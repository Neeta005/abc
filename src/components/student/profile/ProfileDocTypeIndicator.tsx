'use client';
import React from 'react';
import { Text } from '@/components/ui/Text';

type CompProps = {
    docType: string;
    done: boolean;
};

export function DocTypeIndicator({ docType, done }: CompProps) {
    return (
        <div className="flex justify-between border border-[#1F29374D] shadow-[10px] items-center text-white text-base mb-2">
            <Text as="span" text={docType} className="text-[10px]" />
            <Text
                as="span"
                text={done ? 'Added' : 'Not Added'}
                className={`font-semibold text-[10px] ${done ? 'text-green-400' : 'text-red-400'}`}
            />
        </div>
    );
}
