'use client';
import { Bookmark, Star } from 'lucide-react';
import React, { useState } from 'react';
import { mockedCompanyProfile as dummyData } from '@/mocks/mockedJobs';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

export default function JobsCard() {
    const [selected, setSelected] = useState<boolean>(false);

    return (
        <div
            className={`max-w-[500px] w-full min-h-[146px] bg-shadowBlue flex flex-col p-4 rounded-xl border transition-colors duration-200 ${
                selected ? 'border-brightCoral' : 'border-twilightNavy'
            } cursor-pointer`}
            onClick={() => setSelected((prev) => !prev)}
        >
            <div className="mb-4 flex-1 flex flex-col justify-between w-full">
                <div className="grid grid-cols-[48px_1fr_32px] items-start w-full gap-2">
                    <Text
                        text={dummyData.companyLogo}
                        className="flex items-center justify-center w-12 h-12 bg-ironSlateBlue text-white text-2xl font-bold rounded-lg"
                    />
                    <div className="pl-2">
                        <Text
                            text={dummyData.jobTitle}
                            className="text-white text-xl font-semibold leading-tight"
                        />
                        <Text
                            text={dummyData.jobDescription}
                            className="text-gray-300 text-sm md:text-base font-normal leading-snug mt-1"
                        />
                    </div>
                    <div className="flex items-start justify-end">
                        <Button variant="ghost" size="icon">
                            <Bookmark />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2 text-white text-[12px] sm:text-[13px] md:text-sm font-normal mt-auto w-full">
                <div className="flex items-center gap-1 whitespace-nowrap">
                    <Star />
                    <Text as="span" size={'xs'}>
                        {dummyData.trustedRating} {dummyData.trustedLabel}
                    </Text>
                </div>
                <Text
                    text={`${dummyData.applicants} Applicants`}
                    size={'xs'}
                    className="whitespace-nowrap"
                />
                <div className="flex items-center gap-1 whitespace-nowrap">
                    <Text as="span" size={'xs'}>
                        Company Verified
                    </Text>
                </div>
            </div>
        </div>
    );
}
