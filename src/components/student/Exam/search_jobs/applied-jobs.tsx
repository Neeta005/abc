'use client';
import Image from 'next/image';
import { UpArrowIcon } from '@/components/svgs/UpArrow';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import { JobStatus } from '@/types';
import { AppliedJob } from '@/types/Jobs';
import Tbody from './appliedJobsTboady';
import { useState, useMemo } from 'react';

export default function AppliedJobs({
    jobs,
    onClick,
}: {
    jobs: AppliedJob[];
    onClick: () => void;
}) {
    const [sortBy, setSortBy] = useState<'salary' | 'deadline' | null>(null);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const handleSort = (field: 'salary' | 'deadline') => {
        if (sortBy === field) {
            setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortBy(field);
            setSortOrder('asc');
        }
    };

    const sortedJobs = useMemo(() => {
        if (!sortBy) return jobs;

        return [...jobs].sort((a, b) => {
            let valA: number;
            let valB: number;

            if (sortBy === 'salary') {
                valA = parseFloat(a.salary.replace(/[^0-9.]/g, ''));
                valB = parseFloat(b.salary.replace(/[^0-9.]/g, ''));
            } else {
                valA = new Date(a.deadline).getTime();
                valB = new Date(b.deadline).getTime();
            }

            return sortOrder === 'asc' ? valA - valB : valB - valA;
        });
    }, [jobs, sortBy, sortOrder]);

    return (
        <div className="w-full">
            <div className="min-w-[700px] sm:min-w-full xl:min-w-[1091px] w-full text-white rounded-2xl p-2">
                <table className="w-full border-separate border-spacing-y-1">
                    <colgroup>
                        <col className="w-[30%]" />
                        <col className="w-[17.5%]" />
                        <col className="w-[17.5%]" />
                        <col className="w-[17.5%]" />
                        <col className="w-[17.5%]" />
                    </colgroup>
                    <thead>
                        <tr className="text-left text-sm text-[14px] text-white">
                            <th>
                                <Text text="Applications" />
                            </th>
                            <th className="text-center">
                                <div
                                    className="flex justify-center items-center gap-1 cursor-pointer"
                                    onClick={() => handleSort('salary')}
                                >
                                    <Text text="Salary" />
                                    <UpArrowIcon
                                        className={`transition-transform ${
                                            sortBy === 'salary' && sortOrder === 'desc'
                                                ? 'rotate-180'
                                                : ''
                                        }`}
                                    />
                                </div>
                            </th>
                            <th className="text-center">
                                <div
                                    className="flex justify-center items-center gap-1 cursor-pointer"
                                    onClick={() => handleSort('deadline')}
                                >
                                    <Text text="Applied On" />
                                    <UpArrowIcon
                                        className={`transition-transform ${
                                            sortBy === 'deadline' && sortOrder === 'desc'
                                                ? 'rotate-180'
                                                : ''
                                        }`}
                                    />
                                </div>
                            </th>
                            <th className="text-center">
                                <Text text="Application" />
                            </th>
                            <th className="text-center">
                                <Text text="Track Status" />
                            </th>
                        </tr>
                    </thead>
                    {sortedJobs?.map((job, id) => (
                        <Tbody key={id} onClick={onClick} {...job} />
                    ))}
                </table>
            </div>
        </div>
    );
}
