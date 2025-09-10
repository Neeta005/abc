"use client";

import * as React from 'react';

import Image from 'next/image';

import { login } from '@/lib/actions/auth';

import LinkedIn from '@/assets/shapes/linkedin.png';

import { cn } from '@/lib/utils';
const SignInButton: React.FC<{ disabled: boolean; className?:string }> = ({
    disabled = false, className
}) => {
    const signin = async () => {
        await login();
    };

    return (
        <button onClick={() => signin()} disabled={disabled} className={cn("w-full bg-white text-cadetGray font-semibold py-2 rounded-md flex items-center justify-center mb-4 text-sm hover:bg-gray-100 transition-colors", className)}>
            <span className="mr-2">
                <Image
                    src={LinkedIn}
                    alt="LinkedIn Logo"
                    className="w-5 h-5"
                />
            </span>
            Log in with LinkedIn
        </button>
    );
}

export default SignInButton;