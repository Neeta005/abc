import React from 'react';
import { Text } from '@/components/ui/Text';

export default function ScoreGradeBody({
    label,
    color,
    range,
    descColor,
    description,
}: {
    label: string;
    color: string;
    range: string;
    descColor: string;
    description: string;
}) {
    return (
        <div className="flex flex-col items-center flex-1" key={label}>
            <div
                className={`border-[4px] rounded-full w-[3.75rem] h-[3.75rem] flex items-center justify-center mb-2 ${
                    color ?? 'border-black'
                }`}
            >
                <Text as="span" text={label} weight="semibold" className="text-white text-[18px]" />
            </div>
            <Text
                text={range}
                className="text-white text-base mt-1 font-semibold text-[16px]"
                style={{ color: descColor }}
            />
            <Text text={description} />
        </div>
    );
}
