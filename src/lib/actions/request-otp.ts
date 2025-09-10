"use server";

import bcrypt from 'bcrypt';
import { sendOtpEmail } from '@/lib/send-mail';
import { clientPromise, DB_NAME } from '@/lib/db';

export async function sendOtp(
    email: string,
): Promise<{ success: boolean; message: string }> {
    try {
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return {
                success: false,
                message: 'Invalid email address.',
            };
        }

        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const hashedOtp = await bcrypt.hash(otp, 10);
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

        const db = (await clientPromise).db(DB_NAME);

        // Delete any existing OTPs for this email
        await db.collection('otps').deleteMany({ email });

        // Save new OTP
        await db.collection('otps').insertOne({
            email,
            otp: hashedOtp,
            expiresAt,
            createdAt: new Date(),
        });

        // Send OTP email using Mailgun
        const emailResult = await sendOtpEmail(email, otp);
        
        if (!emailResult.success) {
            return {
                success: false,
                message: 'Failed to send OTP email. Please try again.',
            };
        }

        return {
            success: true,
            message: 'OTP sent successfully.',
        };
    } catch (error) {
        console.error('Error sending OTP:', error);
        return {
            success: false,
            message: 'Failed to send OTP. Please try again.',
        };
    }
}

export async function resendOtp(
    email: string,
): Promise<
    {
        success: true;
        message: string;
    } | {
        success: false;
        message: string;
    }
> {
    try {
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return {
                success: false,
                message: 'Invalid email address.',
            };
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const hashedOtp = await bcrypt.hash(otp, 10);
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
        const db = (await clientPromise).db(DB_NAME);
        const otpRecord = await db.collection('otps').findOne({ email });
        if (otpRecord) {
            if (new Date(otpRecord.expiresAt) > new Date()) {
                return {
                    success: false,
                    message: 'OTP already sent. Please wait for 5 minutes before requesting a new one.',
                };
            }
        }
        if (!otpRecord) {
            return {
                success: false,
                message: 'OTP not found. Please request a new one.',
            };
        }
        await db.collection('otps').deleteMany({ email });
        await db.collection('otps').insertOne({
            email,
            otp: hashedOtp,
            expiresAt,
            createdAt: new Date(),
        });

        // Send OTP email using Mailgun
        const emailResult = await sendOtpEmail(email, otp);
        
        if (!emailResult.success) {
            return {
                success: false,
                message: 'Failed to send OTP email. Please try again.',
            };
        }

        return {
            success: true,
            message: 'OTP resent successfully.',
        };
    } catch (error) {
        console.error('Error resending OTP:', error);

        return {
            success: false,
            message: 'Failed to resend OTP.',
        };
    }
}