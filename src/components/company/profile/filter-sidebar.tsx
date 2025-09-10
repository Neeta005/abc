import React, { useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';

interface FilterProps {
    label: string;
    items: string[];
}

export default function FilterSidebar({ label, items }: FilterProps) {
    const [selectedFilters, setSelectedFilters] = useState<string[]>(['skills', 'locations']);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const toggleFilter = (item: string) => {
        setSelectedFilters((prev) =>
            prev.includes(item) ? prev.filter((f) => f !== item) : [...prev, item]
        );
    };

    const clearAll = () => setSelectedFilters([]);

    const removeFilter = (item: string) => {
        setSelectedFilters((prev) => prev.filter((f) => f !== item));
    };

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-[339px] bg-richSlateBlue text-white">
            <div className="flex flex-col gap-2 px-3 py-1">
                <Text text={label} size="base" className="mb-2" />
                <div className="border-[0.5px] mb-2 border-warmOrange"></div>
                <div className="border rounded-[8px] mb-2 relative border-warmOrange">
                    <Input
                        className="h-[51px] bg-inherit px-3 w-full  border-0 text-white placeholder:text-gray-400"
                        type="text"
                        placeholder={'Search ' + label}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <SearchIcon className="absolute right-4 top-1/4 text-white" />
                </div>
                {selectedFilters?.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                        {selectedFilters?.map((item) => (
                            <div key={item}>
                                <span className="bg-deepSeaNavy rounded-[15px] text-[12px] px-2 py-1 flex items-center gap-1">
                                    {item}
                                    <Button
                                        variant="ghost"
                                        onClick={() => removeFilter(item)}
                                        className="p-0 h-auto text-lg text-red-400 hover:text-red-400 hover:bg-transparent"
                                    >
                                        ×
                                    </Button>
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {searchTerm?.length > 0 && (
                    <div className="mt-2 flex flex-col gap-1 max-h-[200px] overflow-y-auto">
                        {filteredItems?.length > 0 ? (
                            filteredItems?.map((item) => (
                                <Button
                                    key={item}
                                    onClick={() => toggleFilter(item)}
                                    variant="ghost"
                                    className={`w-full justify-start text-left px-3 py-2 rounded-md ${
                                        selectedFilters.includes(item)
                                            ? 'bg-warmOrange text-white hover:bg-warmOrange/90'
                                            : 'bg-deepSeaNavy hover:bg-steelSlate'
                                    }`}
                                >
                                    {item}
                                </Button>
                            ))
                        ) : (
                            <Text
                                text="No matches found"
                                size="sm"
                                className="text-gray-400 px-3 py-2"
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
