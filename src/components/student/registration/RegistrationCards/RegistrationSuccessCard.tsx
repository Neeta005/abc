import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

export default function RegistrationSuccessCard() {
    return (
        <div className="flex flex-col items-center justify-center bg-slateBlack w-[419px] h-[399.36px] rounded-[20.95px] shadow-lg p-8">
            <div className="flex items-center justify-center mb-8 w-[170px] h-[170px] rounded-full bg-warmOrange">
                <Check className="w-[125.7px] h-[125.7px]" />
            </div>

            <Text
                text="Successfully Registered"
                className="text-white text-[26.19px] font-normal leading-[100%] text-center mb-2 font-poppins"
            />

            <Text
                text="Your Registration is Successfully completed"
                className="text-gray-400 text-[18px] font-normal leading-[120%] text-center mb-8 font-poppins"
            />

            <Button
                asChild
                className="text-white rounded-[8px] w-[160px] h-[42px] font-semibold text-[16px] font-poppins bg-gradient-to-r from-crimsonBerry to-warmOrange"
            >
                <Link href="/student/dashboard">Go to Dashboard</Link>
            </Button>
        </div>
    );
}
