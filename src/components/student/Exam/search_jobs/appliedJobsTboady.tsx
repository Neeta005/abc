import React from 'react';
import Image from 'next/image';
import { Text } from '@/components/ui/Text';
import { AppliedJob as JobType } from '@/types/Jobs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
interface AppliedJobWithClick extends JobType {
    onClick: () => void;
}

export default function AppliedJobsTableBody({
    onClick,
    logo,
    company,
    title,
    location,
    workLocation,
    salary,
    deadline,
    status,
}: AppliedJobWithClick) {
    return (
        <tbody>
            <tr className="rounded-2xl h-[74px] transition-all duration-200 shadow-md bg-midnightBlue hover:bg-black">
                <td className="px-6 py-2 align-middle">
                    <div className="flex items-center gap-4 min-w-[60px]">
                        <Image
                            src={logo}
                            alt={company}
                            width={56}
                            height={56}
                            className="rounded-[12px] object-cover bg-white"
                        />
                        <div className="flex flex-col">
                            <Text text={title} weight="semibold" size="lg" className="truncate" />
                            <Text size="xs" className="text-periwinkleGray truncate">
                                {company}
                                {workLocation ? `, ${workLocation}` : ''}
                            </Text>
                            <Text
                                text={location}
                                weight="semibold"
                                size="base"
                                className="text-gray-400 truncate"
                            />
                        </div>
                    </div>
                </td>
                <td className="font-semibold text-base truncate text-center align-middle">
                    <Text>
                        {salary}
                        <br />
                        <Text
                            as="span"
                            text="Per Month"
                            size="xs"
                            weight="normal"
                            className="text-periwinkleGray"
                        />
                    </Text>
                </td>
                <td className="font-semibold text-base truncate text-center align-middle">
                    <Text text={deadline} />
                </td>
                <td className="align-middle cursor-pointer ">
                    <Link href={' /student/dashboard/jobs-detail?revoke=true '}>
                        <div className="flex flex-row gap-1 min-w-[215px] justify-center items-center">
                            <Text
                                text={status}
                                className={`px-2 py-1 rounded-full text-xs font-semibold flex items-center justify-center gap-1 w-[92px] h-[22px] ${
                                    {
                                        Rejected: 'bg-red-300 text-red-900',
                                        Accepted: 'bg-green-300 text-green-900',
                                        'In process': 'bg-orange-200 text-red-900/40',
                                    }[status] || ''
                                }`}
                            />
                        </div>
                    </Link>
                </td>
                <td className="align-middle text-center">
                    <Button onClick={onClick} variant="link" className="text-skyBlue text-[14px]">
                        Track
                    </Button>
                </td>
            </tr>
        </tbody>
    );
}
