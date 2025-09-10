import React from 'react';
import { Text } from '@/components/ui/Text';
import { Check } from 'lucide-react';
export default function TrackCard({ status, label }: { status: string; label: string }) {
    return (
        <div className="flex flex-col items-center z-10">
            <div
                className={`
                                        w-9 h-9 rounded-full flex items-center justify-center border-2
                                        ${status === 'completed' && 'bg-green-500 text-white border-green-500'}
                                        ${status === 'current' && 'border-green-500 bg-white'}
                                        ${status === 'pending' && 'border-gray-400 bg-white'}
                                    `}
            >
                {status === 'completed' ? (
                    <Check size={18} />
                ) : status === 'current' ? (
                    <div className="w-2 h-2 bg-green-500 rounded-full  animate-ping" />
                ) : null}
            </div>

            <Text
                text={label}
                size="sm"
                className={`mt-2 text-center ${
                    status === 'pending' ? 'text-gray-400' : 'text-white'
                }`}
            />
        </div>
    );
}
