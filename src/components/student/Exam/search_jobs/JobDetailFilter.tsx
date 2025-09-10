import React from 'react';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/components/ui/select';
import { ListFilter } from 'lucide-react';
import { Text } from '@/components/ui/Text';
import { filters } from '@/mocks/mockedProfileData';

export default function FilterComponent() {
    return (
        <div className="flex gap-4 mx-auto items-center px-2 rounded-lg">
            {filters?.map(({ label, options }) => (
                <div
                    key={label}
                    className="flex items-center gap-2 bg-stoneSlateBlue pl-1 pr-2 rounded-[8px]"
                >
                    <Text text={`${label}:`} className="text-gray-300 text-base" />

                    <Select>
                        <SelectTrigger className="bg-steelSlateBlue text-white px-4 py-1 rounded-[8px] border border-paleSlateBlue min-w-[90px] capitalize">
                            <SelectValue placeholder={options[0]} />
                        </SelectTrigger>
                        <SelectContent className="bg-steelSlateBlue text-white">
                            {options?.map((option) => (
                                <SelectItem key={option} value={option} className="capitalize">
                                    {option}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            ))}

            <Select>
                <SelectTrigger className="bg-ironSlateBlue text-whitepy-1 max-w-40 rounded-lg border border-paleSlateBlue  gap-2">
                    <SelectValue placeholder="More Filter" />
                    <ListFilter size={16} />
                </SelectTrigger>
                <SelectContent className="bg-ironSlateBlue text-white">
                    {['Remote', 'Hybrid', 'Full-time', 'Part-time'].map((type: string, idx) => (
                        <SelectItem key={type} value={type} className="capitalize">
                            {type}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
