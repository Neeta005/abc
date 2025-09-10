'use client';
import React from 'react';
import useJobPosting from '@/stores/jobPostingStore';
import { Text } from '@/components/ui/Text';

export default function BasicInfo() {
    const jobBasicInfo = useJobPosting((state) => state.jobBasicInfo);
    const work = useJobPosting((state) => state.workType);
    const data: { label: string; value: string | string[] }[] = [
        { label: 'Role Name', value: jobBasicInfo.roleName },
        { label: 'Mode of Interview', value: work.modeOfinteview },
        { label: 'Posted', value: 'Mon Jul' },
        { label: 'skills', value: jobBasicInfo.skillsRequired },
    ];
    const workType: { label: string; value: string }[] = [
        { label: 'Work Category', value: work.type },
        { label: 'Work Type', value: work.workType },
        { label: 'No. of Opening', value: jobBasicInfo.openings },
    ];

    return (
        <div className="bg-shadowBlue rounded-xl p-4 max-w-5xl text-white shadow-lg">
            <div className="mb-6">
                <Text
                    as="h2"
                    text="Corporate Sales - Client Acquisition"
                    size="2xl"
                    weight="semibold"
                    className="mb-1"
                />
               <div className="flex items-center gap-2 text-sm">
  {/* Company Name */}
  <span>Info Edge</span>

  {/* Small dot */}
  <span className="mx-1 text-gray-400">●</span>

  {/* Rating */}
  <span>3.9</span>

  {/* Divider */}
  <span className="text-gray-400">|</span>

  {/* Reviews */}
  <span className="text-yellow-500">2920 reviews</span>
</div>

            </div>

            <div className="bg-richSlateBlue rounded-lg p-4 flex flex-col md:flex-row gap-6 mb-4 items-center justify-between">
                {data?.slice(0, 3)?.map(({ label, value }, idx) => (
                    <div key={idx} className="flex flex-col gap-1 flex-1 min-w-[120px]">
                        <Text as="span" text={label} className="text-xs text-periwinkleGray" />
                        <Text as="span" weight="medium">
                            {Array.isArray(value) ? value.join(', ') : value}
                        </Text>
                    </div>
                ))}
            </div>

            <div className="bg-richSlateBlue rounded-lg p-4 flex flex-col md:flex-row gap-6 mb-4 items-center justify-between">
                {workType?.map(({ label, value }, idx) => (
                    <div key={idx} className="flex flex-col gap-1 flex-1 min-w-[120px]">
                        <Text as="span" text={label} className="text-xs text-periwinkleGray" />
                        <Text as="span" text={value} weight="medium" />
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <Text
                    as="span"
                    text="Skills Required"
                    className="text-periwinkleGray text-sm mb-2 block"
                />
                <div className="flex flex-wrap gap-3 mt-2">
                    {Array.isArray(data[3].value) &&
                        data[3].value?.map((skill, idx) => (
                            <Text
                                as="span"
                                key={idx}
                                text={skill}
                                className="bg-richSlateBlue border border-graphiteSlateBlue rounded-full px-4 py-1 text-sm"
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
