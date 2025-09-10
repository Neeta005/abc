"use client";

import { signIn, signOut } from "next-auth/react";

export const login = async () => {
    // Explicitly set the callbackUrl to dashboard to ensure proper redirection
    signIn("linkedin", {
        callbackUrl: "/dashboard",
        redirect: true
    });
    // window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/linkedin`;
};

export const loginWithOtp = async (email: string, otp: string) => {
    // Set redirect to false to get the result back
    return signIn("credentials", {
        email,
        otp,
        redirect: false,  // This allows us to handle the response
        callbackUrl: "/dashboard"
    });
};

export const logout = async () => {
    await signOut();
};