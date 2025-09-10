'use client';

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';
import { X, Check } from 'lucide-react';
import { SuccessDialogProps } from '@/types/SuccessDialog';
import { cn } from '@/lib/utils';
import Link from 'next/link';
export default function SuccessDialog({
    shref = '#',
    phref = '#',
    className,
    type,
    title,
    message,
    primaryButtonText,
    secondaryButtonText,
    onPrimaryClick,
    onSecondaryClick,
}: SuccessDialogProps) {
    const isSuccess = type === 'success';

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-deepNavyBlue rounded-2xl p-8 w-[400px] text-center shadow-lg">
                <div className="flex items-center justify-center mb-6">
                    <div
                        className={`w-20 h-20 rounded-full flex items-center justify-center ${
                            isSuccess ? 'bg-orange-500' : 'bg-red-500'
                        }`}
                    >
                        {isSuccess ? (
                            <Check size={40} strokeWidth={3} className="text-white" />
                        ) : (
                            <X size={40} strokeWidth={3} className="text-white" />
                        )}
                    </div>
                </div>
                <Text text={title} className="text-white text-2xl font-semibold mb-4" />
                <Text text={message} className="text-gray-400 text-sm mb-4" />
                <div className={cn(`flex gap-2 items-center `, className)}>
                    {secondaryButtonText && (
                        <Link href={shref} className="w-full">
                            <Button
                                onClick={onSecondaryClick}
                                variant="gradient"
                                className="border w-full  text-white  rounded-lg hover:bg-transparent"
                            >
                                {secondaryButtonText}
                            </Button>
                        </Link>
                    )}
                    <Link href={phref} className="w-full">
                        <Button
                            onClick={onPrimaryClick}
                            variant="secondary"
                            className="w-full border border-red-400 bg-inherit  text-white py-2 rounded-lg"
                        >
                            {primaryButtonText}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
