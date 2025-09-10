import NextAuth from "next-auth";
import LinkedInProvider from "next-auth/providers/linkedin";
import CredentialsProvider from 'next-auth/providers/credentials';

import bcrypt from 'bcrypt';
import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import type { Session } from "next-auth";

// Import the shared database connection
import { clientPromise, DB_NAME } from "./db";

// Ensure this file only runs on the server
if (typeof window !== 'undefined') {
  throw new Error('This file should only be imported on the server');
}

// Get the base URL for redirect URI
const baseUrl = process.env.NEXTAUTH_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

// Use the environment variables that are actually set
const LINKEDIN_CLIENT_ID = process.env.AUTH_LINKEDIN_ID;
const LINKEDIN_CLIENT_SECRET = process.env.AUTH_LINKEDIN_SECRET;

// Debug environment variables (don't log actual secrets in production)
console.log("LinkedIn Client ID exists:", !!LINKEDIN_CLIENT_ID);
console.log("LinkedIn Client Secret exists:", !!LINKEDIN_CLIENT_SECRET);
console.log("Base URL:", baseUrl);
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);

// Verify that both LinkedIn credentials are set
if (!LINKEDIN_CLIENT_ID || !LINKEDIN_CLIENT_SECRET) {
    console.error("LinkedIn OAuth credentials are missing or invalid");
}

// Configure the callback URL for LinkedIn
const callbackUrl = `${baseUrl}/api/auth/callback/linkedin`;

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    debug: true, // Enable debug mode to help diagnose issues
    providers: [
        // Using the most basic LinkedIn configuration possible to avoid errors
        LinkedInProvider({
            clientId: LINKEDIN_CLIENT_ID as string,
            clientSecret: LINKEDIN_CLIENT_SECRET as string,
            // Explicitly define the authorization endpoint to avoid 404 errors
            authorization: {
                url: "https://www.linkedin.com/oauth/v2/authorization",
                params: { 
                    scope: "openid profile email",
                    response_type: "code"
                }
            },
            // Explicitly define the token endpoint
            token: "https://www.linkedin.com/oauth/v2/accessToken",
            // Explicitly define the userinfo endpoint
            userinfo: {
                url: "https://api.linkedin.com/v2/me",
                params: { projection: "(id,localizedFirstName,localizedLastName,profilePicture(displayImage~:playableStreams))" }
            },
            // Helper function to process LinkedIn profile data
            async profile(profile, tokens) {
                // Log the initial profile data
                console.log("LinkedIn profile data received:", JSON.stringify(profile, null, 2));
                
                // Default profile data
                const profileData = {
                    id: profile.id,
                    name: profile.localizedFirstName && profile.localizedLastName ? 
                          `${profile.localizedFirstName} ${profile.localizedLastName}` : 
                          profile.name || "LinkedIn User",
                    email: profile.emailAddress || profile.email || `${profile.id}@linkedin.example.com`,
                    image: profile.profilePicture?.displayImage || profile.picture || null
                };
                
                // Fetch email separately since it's not included in the basic profile
                if (tokens?.access_token) {
                    try {
                        console.log("Fetching LinkedIn email with token...");
                        const emailRes = await fetch('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
                            headers: {
                                Authorization: `Bearer ${tokens.access_token}`,
                            },
                        });
                        
                        if (emailRes.ok) {
                            const emailData = await emailRes.json();
                            console.log("LinkedIn email data:", JSON.stringify(emailData, null, 2));
                            
                            // Extract email from LinkedIn's nested response format
                            const email = emailData?.elements?.[0]?.['handle~']?.emailAddress;
                            if (email) {
                                profileData.email = email;
                                console.log("Found LinkedIn email:", email);
                            }
                        } else {
                            console.error("Failed to fetch LinkedIn email:", await emailRes.text());
                        }
                    } catch (error) {
                        console.error("Error fetching LinkedIn email:", error);
                    }
                }
                
                console.log("Final LinkedIn profile:", profileData);
                return profileData;
            },
            allowDangerousEmailAccountLinking: true
        }),
        CredentialsProvider({
            name: 'OTP Login',
            credentials: {
                email: { label: 'Email', type: 'email' },
                otp: { label: 'OTP', type: 'text' },
                provider: { label: 'Provider', type: 'text' },
            },
            async authorize(credentials) {
                // console.log("Credentials:", credentials);
                if (!credentials?.email || !credentials?.otp) {
                    return null;
                }

                const db = (await clientPromise).db();
                const otpsCollection = db.collection('otps');
                const usersCollection = db.collection('users');

                // Verify OTP
                const otpRecord = await otpsCollection.findOne({
                    email: credentials.email,
                    expiresAt: { $gt: new Date() },
                });

                if (!otpRecord) {
                    return null;
                }

                const isOtpValid = await bcrypt.compare(credentials.otp as string, otpRecord.otp);
                if (!isOtpValid) {
                    return null;
                }
                // Fetch or create user
                let user: any = await usersCollection.findOne({ email: credentials.email });
                if (!user) {
                    // Create new user if not exists
                    const result = await usersCollection.insertOne({
                        email: credentials.email,
                        name: null,
                        role: 'employer',
                        logoUrl: null,
                        linkedinId: null,
                        isVerified: false,
                        emailVerified: null,
                        lastLogin: new Date(),
                        createdAt: new Date(),
                    });
                    user = {
                        _id: result.insertedId,
                        email: credentials.email,
                        role: 'employer',
                    };
                }

                // Update last login
                await usersCollection.updateOne(
                    { email: credentials.email },
                    { $set: { lastLogin: new Date() } }
                );

                // Delete used OTP
                await otpsCollection.deleteOne({ _id: otpRecord._id });

                return {
                    id: user._id.toString(),
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    image: user.logoUrl,
                    linkedinId: user.linkedinId,
                    isVerified: user.isVerified,
                    emailVerified: user.emailVerified,
                    lastLogin: user.lastLogin,
                };
            },
        }),
    ],
    session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 }, // 30 days
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log("SignIn callback called");
            console.log("User:", user);
            console.log("Account provider:", account?.provider);
            
            if (account?.provider === "linkedin") {
                console.log("LinkedIn sign-in detected");
                // Enhanced logging for LinkedIn authentication
                console.log("LinkedIn authentication details:", {
                    userEmail: user?.email,
                    userName: user?.name,
                    userImage: !!user?.image,
                    accountId: account?.providerAccountId,
                    hasAccessToken: !!account?.access_token,
                    environment: process.env.NODE_ENV
                });
                
                try {
                    // Make sure we have an email and basic user data
                    if (!user || !user.email) {
                        console.error("No user or email provided by LinkedIn");
                        return true; // Still return true to avoid breaking the flow
                    }
                    
                    console.log("Connecting to database...");
                    const db = (await clientPromise).db(DB_NAME);
                    const usersCollection = db.collection("users");
                    
                    console.log("Updating user in database");
                    await usersCollection.updateOne(
                        { email: user.email },
                        {
                            $set: {
                                name: user.name || "",
                                email: user.email,
                                role: "student",
                                logoUrl: user.image || null,
                                linkedinId: account.providerAccountId,
                                lastLogin: new Date(),
                                isVerified: true,
                                accessToken: account.access_token || null,
                                refreshToken: account.refresh_token || null,
                                expiresAt: account.expires_at ? new Date(account.expires_at * 1000) : null,
                            },
                            $setOnInsert: { emailVerified: null },
                        },
                        { upsert: true }
                    );
                    console.log("User updated successfully");
                    return true;
                } catch (error: any) {
                    // Detailed error logging
                    console.error("Error during LinkedIn sign-in:", error);
                    console.error("Error details:", JSON.stringify({
                        message: error.message,
                        stack: error.stack,
                        code: error.code,
                        name: error.name
                    }, null, 2));
                    
                    // Still return true to avoid breaking the flow
                    // The user will be redirected to dashboard, but might not have all data
                    return true;
                }
            }
            
            return true; // Allow all sign-ins by default
        },
        async redirect({ url, baseUrl }) {
            console.log("Redirect called with URL:", url);
            console.log("Base URL:", baseUrl);
            
            // Simplify the redirect logic to avoid potential issues
            
            // Always redirect to dashboard after successful authentication
            if (url.includes("/api/auth/callback")) {
                console.log("Authentication callback detected, redirecting to dashboard");
                return "/dashboard";
            }
            
            // For error URLs, go to home page
            if (url.includes("/error") || url.includes("error=")) {
                console.log("Error URL detected, redirecting to home");
                return "/home";
            }
            
            // If the URL is already for the dashboard, keep it
            if (url.includes("/dashboard")) {
                return url;
            }
            
            // If it's a relative URL, make it absolute
            if (url.startsWith("/")) {
                return `${baseUrl}${url}`;
            }
            
            // If it's already an absolute URL matching our base, use it
            if (url.startsWith(baseUrl)) {
                return url;
            }
            
            // Default fallback - go to dashboard
            return "/dashboard";
        },
        async session({ session, token }) {
            // console.log("Session:", session);
            // console.log("Token:", token);
            session.user.id = token.sub as string;
            session.user.name = token.name as string;
            session.user.email = token.email as string;
            session.user.image = token.logoUrl as string;
            // @ts-ignore
            // session.accessToken = token.accessToken;
            // @ts-ignore
            session.user.role = token.role as string;
            // @ts-ignore
            session.user.linkedinId = token.linkedinId as string;
            // @ts-ignore
            session.user.isVerified = token.isVerified as boolean;
            // @ts-ignore
            session.user.emailVerified = token.emailVerified as boolean;
            // @ts-ignore
            session.user.lastLogin = token.lastLogin as Date;
            return session;
        },
        async jwt({ token }) {
            // console.log("JWT Token:", token);
            const user = await (await clientPromise).db(DB_NAME).collection("users").findOne({ email: token.email });
            return user;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
        // Redirect errors to home page instead of error page
        error: "/",
    },
});
