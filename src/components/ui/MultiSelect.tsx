'use client';
import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, ChevronDown } from 'lucide-react';
import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/utils';

type MultiSelectProps = {
    options: string[];
    selected: string[];
    onChange: (selected: string[]) => void;
    placeholder?: string;
};

export function MultiSelect({
    options,
    selected,
    onChange,
    placeholder = 'Select',
}: MultiSelectProps) {
    const handleToggle = (value: string) => {
        if (selected.includes(value)) {
            onChange(selected.filter((item) => item !== value));
        } else {
            onChange([...selected, value]);
        }
    };

    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Text text={placeholder} />
            </Popover.Trigger>
            <Popover.Content
                side="bottom"
                align="start"
                className="bg-stormySlate text-white border border-tangerineBlast rounded-md shadow-md p-2 z-[900]"
            >
                {options.map((option) => (
                    <div
                        key={option}
                        className="flex items-center gap-2 py-1 cursor-pointer"
                        onClick={() => handleToggle(option)}
                    >
                        <Checkbox.Root
                            checked={selected.includes(option)}
                            className="w-4 h-4 border border-white rounded-sm flex items-center justify-center"
                        >
                            <Checkbox.Indicator>
                                <Check className="w-3 h-3 text-white" />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        <span className="text-sm">{option}</span>
                    </div>
                ))}
            </Popover.Content>
        </Popover.Root>
    );
}
