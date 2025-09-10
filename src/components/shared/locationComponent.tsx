import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import { Search } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import useJobPosting from '@/stores/jobPostingStore';
import { useJobProgressStore } from '@/stores/progressStepperStore';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const LocationSection = ({
    isCompany = true,
    registration = true,
}: {
    isCompany?: boolean;
    registration?: boolean;
}) => {
    const address = useJobPosting((state) => state.workLocation);
    const setAddress = useJobPosting((state) => state.setWorkLocation);

    const [country, setCountry] = useState('');
    const [transport, setTransport] = useState(false);
    const increament = useJobProgressStore((state) => state.incrementDone);
    const decreament = useJobProgressStore((state) => state.decrementDone);

    return (
        <div className="w-full max-w-2xl p-6 bg-inherit rounded-lg">
            {registration && (
                <Text
                    as="h2"
                    text={
                        !isCompany
                            ? 'Interview Location'
                            : 'Company Address (Regional/Headquarters)'
                    }
                    className="text-white text-[30px] font-bold mb-4"
                />
            )}

            {isCompany && (
                <div>
                    <div className="w-full mb-6">
                        <Text
                            as="label"
                            text="Address"
                            size="lg"
                            weight="semibold"
                            className="block text-white mb-1"
                        />
                        <div className="relative w-full">
                            <Input
                                className="text-lg w-full bg-inherit text-white px-2 h-[49px] rounded-lg border border-red-500"
                                placeholder="Electronic City, Bangalore – 560100, India"
                                // value={}
                                onBlur={(e) => {
                                    if (e.target.value.trim()) increament('city');
                                }}
                                onChange={(e) => {
                                    setCountry(e.target.value);
                                    const value = e.target.value;
                                    if (value === '') {
                                        decreament('city');
                                    }
                                }}
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => setCountry('')}
                                className="absolute right-10 top-1/2 -translate-y-1/2 border border-white rounded-full bg-white text-black w-5 h-5 flex justify-center items-center text-base hover:bg-gray-200"
                            >
                                ×
                            </Button>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xl hover:bg-transparent"
                            >
                                <Search />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex gap-12 mb-6">
                <div className="flex-1">
                    <Text
                        as="label"
                        text="City"
                        size="lg"
                        weight="semibold"
                        className="block text-white mb-1"
                    />
                    <div className="relative max-w-[293px]">
                        <Input
                            className="pr-16 text-lg w-full bg-inherit text-white px-2 h-[49px] rounded-lg border border-red-500"
                            placeholder="City"
                            value={address.city}
                            onBlur={(e) => {
                                if (e.target.value.trim()) increament('city');
                            }}
                            onChange={(e) => {
                                setAddress({ ...address, city: e.target.value });
                                const value = e.target.value;
                                if (value === '') {
                                    decreament('city');
                                }
                            }}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => setAddress({ ...address, city: '' })}
                            className="absolute right-10 top-1/2 -translate-y-1/2 border border-white rounded-full bg-white text-black w-5 h-5 flex justify-center items-center text-base hover:bg-gray-200"
                        >
                            ×
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xl hover:bg-transparent"
                        >
                            <Search />
                        </Button>
                    </div>
                </div>

                <div className="flex-1">
                    <Text
                        as="label"
                        text="State"
                        size="lg"
                        weight="semibold"
                        className="block text-white mb-1"
                    />
                    <div className="relative max-w-[293px]">
                        <Input
                            className="pr-16 text-lg w-full bg-inherit text-white px-2 h-[49px] rounded-lg border border-red-500"
                            placeholder="State"
                            value={address.state}
                            onBlur={(e) => {
                                if (e.target.value.trim()) increament('state');
                            }}
                            onChange={(e) => {
                                setAddress({ ...address, state: e.target.value });
                                const value = e.target.value;
                                if (value === '') {
                                    decreament('state');
                                }
                            }}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => setAddress({ ...address, state: '' })}
                            className="absolute right-10 top-1/2 -translate-y-1/2 border border-white rounded-full bg-white text-black w-5 h-5 flex justify-center items-center text-base hover:bg-gray-200"
                        >
                            ×
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xl hover:bg-transparent"
                        >
                            <Search />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mb-6 flex gap-12">
                <div className="flex-1">
                    <Text
                        as="label"
                        text="Country"
                        size="lg"
                        weight="semibold"
                        className="block text-white mb-1"
                    />
                    <div className="relative max-w-[293px]">
                        <Input
                            className="pr-16 text-lg w-full bg-inherit text-white px-2 h-[49px] rounded-lg border border-red-500"
                            placeholder="India"
                            value={address.country}
                            onBlur={(e) => {
                                if (e.target.value.trim()) increament('country');
                            }}
                            onChange={(e) => {
                                setAddress({ ...address, country: e.target.value });
                                const value = e.target.value;
                                if (value === '') {
                                    decreament('country');
                                }
                            }}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => setAddress({ ...address, country: '' })}
                            className="absolute right-10 top-1/2 -translate-y-1/2 border border-white rounded-full bg-white text-black w-5 h-5 flex justify-center items-center text-base hover:bg-gray-200"
                        >
                            ×
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xl hover:bg-transparent"
                        >
                            <Search />
                        </Button>
                    </div>
                </div>
                {isCompany && (
                    <div className="flex-1">
                        <Text
                            as="label"
                            text="Pin Code"
                            size="lg"
                            weight="semibold"
                            className="block text-white mb-1"
                        />
                        <div className="w-[293px]">
                            <Select value={address.country} onValueChange={setCountry}>
                                <SelectTrigger className="w-full h-[48px] bg-transparent border border-terracottaOrange rounded-lg px-5 text-white text-lg focus:border-white">
                                    <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                                <SelectContent className="bg-inkBlue text-white border-terracottaOrange">
                                    <SelectItem value="India">222</SelectItem>
                                    <SelectItem value="USA">123</SelectItem>
                                    {/* <SelectItem value="Germany">Germany</SelectItem>
                                    <SelectItem value="Canada">Canada</SelectItem> */}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                )}
            </div>

            {!isCompany && (
                <div className="flex items-center gap-4 mt-4">
                    <Text text="Transport will be provided (within 5 km)" size="lg" />
                    <Switch
                        checked={transport}
                        onChange={(_, checked) => setTransport(checked)}
                        sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': {
                                color: '#fff',
                                '& + .MuiSwitch-track': {
                                    backgroundColor: '#E05A2B',
                                },
                            },
                            '& .MuiSwitch-track': {
                                backgroundColor: '#8B8B8B',
                            },
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default LocationSection;
