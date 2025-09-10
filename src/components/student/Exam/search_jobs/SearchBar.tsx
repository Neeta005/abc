'use client';
import React, { useState } from 'react';
import GradientSearchIcon from '@/components/svgs/gradientSearchIcon';
import { Bookmark, ListFilter, MapPin, Search, X } from 'lucide-react';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MultiSelect } from '@/components/ui/MultiSelect';
import Link from 'next/link';
export default function SearchBar({
    removeFilter,
    selectedFilters,
    setSelectedfilter,
    selectedLocations,
    setSelectedLocations,
    handleShowFilter,
}: {
    removeFilter: (filter: string) => void;
    selectedFilters: string[];
    setSelectedfilter: (value: string[]) => void;

    selectedLocations: string[];
    setSelectedLocations: (location: string[]) => void;
    handleShowFilter: () => void;
}) {
    return (
        <div className="text-white space-y-4 w-full max-w-[1062px] mx-auto  mb-2">
            <div className="flex justify-between">
                <Text as="h2" text="Search for Jobs" size="2xl" weight="semibold" />
                <Link href={'/student/dashboard/bookmarked'}>
                    <Button variant={'search'}>
                        Saved Jobs{' '}
                        <span>
                            <Bookmark className="w-6 h-6" />
                        </span>
                    </Button>
                </Link>
            </div>

            <div className="flex gap-4 justify-between">
                <div className="flex items-center border border-red-900 rounded-[11px] overflow-hidden w-full max-w-[800px] max-h-[54px]">
                    <div className="px-4">
                        <GradientSearchIcon />
                    </div>
                    <Input
                        type="text"
                        placeholder="Search by Job title, company, keywords"
                        className=" bg-transparent w-full px-2 py-2 outline-none placeholder:text-white text-white border-none h-auto"
                    />
                    <Button
                        className=" px-6 py-2 rounded-md font-semibold text-white h-[54px] w-[114px] rounded-l-none"
                        variant={'search'}
                    >
                        Search
                    </Button>
                </div>

                <div className="flex border border-scarletRed items-center gap-2 border-gradient-to-r from-pink-500 to-orange-500 px-4 py-2 rounded-md h-[54px]">
                    <MapPin className="text-white w-4 h-6" />
                    <div className="cursor-pointer">
                        <MultiSelect
                            options={['Anywhere', 'Alwar', 'Amla', 'Ahmedabad']}
                            selected={selectedLocations}
                            onChange={setSelectedLocations}
                            placeholder="Location"
                        />
                    </div>
                </div>

                <div
                    className="flex border border-scarletRed items-center gap-2 border-gradient-to-r from-pink-500 to-orange-500 px-4 py-2 rounded-md h-[54px] cursor-pointer"
                    onClick={handleShowFilter}
                >
                    <ListFilter className="text-white w-7 h-7 " />
                    <Text text={'Filters'} />

                    <div className="w-4 h-4 bg-deepRoyalBlue rounded-full"></div>
                </div>
            </div>

            <div className="flex gap-3 flex-wrap mt-2">
                {selectedFilters?.map((filter, idx) => (
                    <div
                        key={idx}
                        className="bg-ashGray rounded-full px-4 py-1 flex items-center gap-2 border border-white/30 text-wrap h-[37px]"
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFilter(filter)}
                            className="border border-white rounded-full w-6 h-6 p-0 hover:bg-white/20"
                        >
                            <X className="text-white w-4 h-4" />
                        </Button>
                        <Text as="span" text={filter} className="text-xs" />
                    </div>
                ))}
            </div>
            <Text text={'Jobs Recommendations for You'} className="text-[26px] text-white" />
        </div>
    );
}
