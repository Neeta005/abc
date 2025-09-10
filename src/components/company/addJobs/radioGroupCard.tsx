'use client';

import React from 'react';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

interface RadioGroupCardProps {
    label: string;
    name: string;
    options: string[];
    selected: string;
    onSelect: (value: string) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    icons?: string[]; // Optional array of icon paths
}

export default function RadioGroupCard({
    label,
    name,
    options,
    selected,
    onSelect,
    onBlur,
    icons,
}: RadioGroupCardProps) {
    return (
        <div className="mb-6">
            <Text as="label" className="block text-white text-base mb-2" text={label} />
            <div className="flex gap-6">
                {options?.map((option, id) => (
                    <label
                        key={id + option}
                        className={`flex items-center justify-between gap-3 border border-red-800/70 rounded-lg px-4 py-3 cursor-pointer min-w-[180px] ${
                            selected === option && 'ring-2 ring-brand-e05a2b'
                        }`}
                    >
                        <div className="flex items-center gap-2">
                            <Input
                                type="radio"
                                name={name}
                                className="accent-[#fff] w-5 h-5 cursor-pointer"
                                style={{ accentColor: '#fff' }}
                                checked={selected === option}
                                onChange={() => onSelect(option)}
                                onBlur={(e) => onBlur?.(e)}
                            />
                            <Text
                                as="span"
                                className="text-white text-[14px]"
                                text={option?.replace(/-\d$/, '')}
                            />
                        </div>
                        {/* Icon container */}
                        {icons && icons[id] && (
                            <div className="flex-shrink-0">
                                <Image
                                    src={icons[id]}
                                    alt={`${option} icon`}
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                        )}
                    </label>
                ))}
            </div>
        </div>
    );
}