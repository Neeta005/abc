import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

interface SortShowControlsProps {
    selectedGender: string;
    setSelectedGender: (val: string) => void;
}

export default function SortShowControls({
    selectedGender,
    setSelectedGender,
}: SortShowControlsProps) {
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <Text as="span" text="Sort by:" className="text-nowrap" />
                <Select onValueChange={setSelectedGender} value={selectedGender}>
                    <SelectTrigger className="w-full border-[1px] border-inherit">
                        <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent className="bg-inherit">
                        <SelectItem value="Male">Relevance</SelectItem>
                        <SelectItem value="Female">Date</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex items-center gap-2">
                <Text as="span" text="Show" />
                <Select onValueChange={setSelectedGender} value={selectedGender}>
                    <SelectTrigger className="w-full border-[1px] border-inherit">
                        <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent className="bg-inherit">
                        <SelectItem value="40">40</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex items-center gap-2">
                <Button className="border border-white px-2 py-1 rounded-md" variant="default">
                    «
                </Button>
                <Text
                    as="span"
                    text="Page 1 of 1"
                    className="border border-white px-3 py-1 rounded-md"
                />
                <Button className="border border-white px-2 py-1 rounded-md" variant="default">
                    »
                </Button>
            </div>
        </div>
    );
}
