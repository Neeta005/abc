'use client';
import React, { useEffect, useRef, useState, useTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logos/logo-interns.png';
import { loginWithOtp } from '@/lib/actions/auth';
import TelegramSVG from '../svgs/telegram';
import HomeHumbergerSvg from '../svgs/humberger';
import PopUpDialog from './LoginSignUpDialog';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useRedirectIfAuthenticated } from '@/hooks/authHook';
import { NavbarData } from '@/data/Header';
export function Navbar() {
    const [otpSent, setOtpSent] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [isPending, startTransition] = useTransition();
    const [isRegistering, setIsRegistering] = useState<boolean>(false);
    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const [formData, setFormData] = useState<FormData | null>(null);
    const router = useRouter();
    const { status, data } = useRedirectIfAuthenticated();
   const onComplete = async (otp: string) => {
    try {
        const result = await loginWithOtp(formData?.get('email') as string, otp);
        
        if (result?.error) {
            setError('Invalid OTP');
        } else if (result?.ok) {
            // Successfully signed in, manually redirect
            router.push('/student/dashboard');
        } else {
            setError('Login failed. Please try again.');
        }
    } catch (error) {
        setError('Failed to login. Please try again.');
    }
};
    if (status === 'loading') {
        return <Text as="p">Loading...</Text>;
    }

    return (
        <header className="relative z-[9999]">
            <div className="py-5">
                <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12">
                    <div className="flex justify-between items-center">
                        <Link href="/">
                            <Image
                                src={Logo}
                                alt="Logo"
                                className="w-[175px] h-auto max-w-full md:w-[150px] sm:w-[120px] xs:w-[100px]"
                            />
                        </Link>

                        <div className="flex items-center gap-2 lg:hidden">
                            <Button className="text-white text-sm font-normal py-1.5 px-2.5 rounded-lg bg-gradient-to-r from-wineRed to-warmOrange">
                                <span className="flex items-center">
                                    <TelegramSVG />
                                    <Text
                                        as="p"
                                        text="Post An Internship"
                                        className="text-white text-xs font-bold font-sans"
                                    />
                                </span>
                            </Button>
                            <HomeHumbergerSvg onClick={() => setIsRegistering(!isRegistering)} />
                        </div>

                        <nav className="lg:flex items-center gap-4 hidden">
                            <ul className="hidden md:flex items-center gap-8">
                                <Button
                                    asChild
                                    className="text-white text-base font-sans px-4 py-2 rounded-md bg-gradient-to-r from-wineRed to-warmOrange"
                                >
                                    <Link href="/">Home</Link>
                                </Button>
                                {NavbarData.map(
                                    (link: { label: string; href: string }, idx: number) => (
                                        <Link
                                            key={idx}
                                            href={link.href}
                                            className="text-white text-base font-sans"
                                        >
                                            {link.label}
                                        </Link>
                                    )
                                )}
                            </ul>

                            {data ? null : <PopUpDialog />}

                            <Button className="block text-white text-base font-normal py-2 px-4 rounded-lg bg-gradient-to-r from-wineRed to-warmOrange">
                                <span className="flex items-center">
                                    <TelegramSVG />
                                    <Text className="text-white text-base font-bold font-sans hidden sm:inline">
                                        Post An Internship
                                    </Text>
                                    <Text className="text-white text-sm font-bold font-sans sm:hidden">
                                        Post
                                    </Text>
                                </span>
                            </Button>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
