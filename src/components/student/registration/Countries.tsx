'use client';
import React from 'react';
import { getCountryListMap } from '@/constants/fileTypes';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import { Text } from '@/components/ui/Text';

const countryCodes = Object.entries(getCountryListMap()).map(([code, data]) => ({
    ...data,
}));

interface CustomCountrySelectorProps {
    selectedCode: string;
    setSelectedCode: (code: string) => void;
}

export function CustomCountrySelector({
    selectedCode,
    setSelectedCode,
}: CustomCountrySelectorProps) {
    const countryList = getCountryListMap();
    const arrayCountry = Object.entries(countryList).map(([code, data]) => ({
        ...data,
    }));

    const selectedCountry = arrayCountry.find((c) => c.code === selectedCode) || arrayCountry[0];

    return (
        <Menu as="div" className="relative w-[109px] inline-block text-left">
            <div>
                <MenuButton
                    className="inline-flex h-[49px] w-[109px] justify-center gap-x-1.5 rounded-md bg-inherit px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-inset hover:bg-gray-50 border border-red-500"
                    type="button"
                    onClick={(e) => e.preventDefault()}
                >
                    <span className="flex items-center gap-2">
                        <span
                            className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center"
                            dangerouslySetInnerHTML={{ __html: selectedCountry.flag || '' }}
                        />
                        <Text as="span">{selectedCountry.code}</Text>
                        <Text as="span" className="text-gray-500">
                            {selectedCountry.dialCode}
                        </Text>
                    </span>
                    <ChevronDownIcon aria-hidden="true" className="text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-[390px] h-[200px] origin-top-right rounded-md bg-midnightInk shadow-lg ring-1 ring-black/5 overflow-y-auto focus:outline-none"
            >
                {arrayCountry?.map((country, idx) => (
                    <div className="" key={country.code || idx}>
                        <MenuItem>
                            {({ active }) => (
                                <div
                                    className={`flex items-center justify-between px-4 py-3 border-b border-gray-700 cursor-pointer min-h-[56px] ${active ? 'bg-basaltBlue' : ''}`}
                                    onClick={() => setSelectedCode(country.code)}
                                >
                                    <span className="flex items-center gap-3">
                                        <span
                                            className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-white"
                                            dangerouslySetInnerHTML={{ __html: country.flag || '' }}
                                        />
                                        <Text as="span" className="text-white text-lg font-normal">
                                            {country.country}
                                        </Text>
                                    </span>
                                    <Text as="span" className="text-white text-lg font-normal">
                                        {country.dialCode}
                                    </Text>
                                </div>
                            )}
                        </MenuItem>
                    </div>
                ))}
            </MenuItems>
        </Menu>
    );
}
