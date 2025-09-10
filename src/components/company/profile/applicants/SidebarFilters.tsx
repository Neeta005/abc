import React from 'react';
import FilterSidebar from '@/components/company/profile/filter-sidebar';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Text } from '@/components/ui/Text';

interface SidebarFiltersProps {
    selectedGender: string;
    setSelectedGender: (val: string) => void;
    selectedPassOut: string;
    setSelectedPassOut: (val: string) => void;
}

export default function SidebarFilters({
    selectedGender,
    setSelectedGender,
    selectedPassOut,
    setSelectedPassOut,
}: SidebarFiltersProps) {
    return (
        <div className="xl:w-[350px] md:w-[280px] shrink-0 flex flex-col gap-3">
            <FilterSidebar
                label="Location"
                items={['India', 'United States', 'Canada', 'Nigeria', 'China']}
            />
            <FilterSidebar
                label="Skills"
                items={[
                    'UI Design',
                    'UX Design',
                    'Interaction Design',
                    'UX Research',
                    'App Design',
                ]}
            />
            <FilterSidebar label="Language" items={['English']} />

            <div className="mb-4 px-2 text-white bg-richSlateBlue py-2 pb-5">
                <Text
                    as="label"
                    text="Gender"
                    className="text-white text-sm font-semibold mb-1 block"
                />
                <Select onValueChange={setSelectedGender} value={selectedGender}>
                    <SelectTrigger className="w-full border-[1px] border-warmOrange">
                        <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent className="bg-inherit">
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="mb-4 px-2 pb-5 py-2 text-white bg-richSlateBlue">
                <Text
                    as="label"
                    text="Pass Out Year"
                    className="text-sm font-semibold mb-2 block"
                />
                <Select onValueChange={setSelectedPassOut} value={selectedPassOut}>
                    <SelectTrigger className="w-full border-[1px] border-warmOrange">
                        <SelectValue placeholder="Select Year" />
                    </SelectTrigger>
                    <SelectContent className="bg-inherit">
                        {Array.from({ length: 50 }, (_, i) => (
                            <SelectItem value={`${i + 2000}`} key={i}>
                                {i + 2000}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
