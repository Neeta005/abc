import React from 'react';
import { RecentJobsProps } from '@/types/Jobs';
import { Text } from '@/components/ui/Text';

export default function RecentJobs({ company, image, job, time, country }: RecentJobsProps) {
    return (
        <div className="flex gap-3 w-full bg-midnightBlue mb-2 p-2 rounded-[7.15px] border border-transparent h-[50px] items-center">
            {/* Icon */}
            <div className="w-[30px] h-[30px] rounded-full bg-gray-700 flex items-center justify-center text-xs flex-shrink-0">
                {image || '🙈'}
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center w-full truncate">
                {/* Job Title - Bigger */}
                <Text text={job} className="text-[15px] font-semibold truncate leading-tight" />

                {/* Company, Country, Time - Smaller */}
                <div className="text-stoneGray text-[11px] truncate leading-snug">
                    <Text as="span" text={`${company}, `} className="text-[11px]" />
                    <Text as="span" text={`${country} - `} className="text-[11px]" />
                    <Text as="span" text={time} className="text-[11px]" />
                </div>
            </div>
        </div>
    );
}
