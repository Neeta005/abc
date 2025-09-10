import React from 'react';
import { jobs } from '@/mocks/mockedJobs';
import Link from 'next/link';
import Image from 'next/image';
import { Text } from '@/components/ui/Text';

export default function JobsForYou() {
    return (
        <div className="bg-steelBlue rounded-2xl p-6 flex-1 ">
            <div className="flex justify-between items-center mb-6">
                <Text text="Jobs for you" size="lg" weight="semibold" />
                <Link
                    href="/student/dashboard/search-jobs"
                    className="text-brightElectricBlue text-xs font-semibold hover:underline"
                >
                    All Jobs
                </Link>
            </div>
            <ul className="space-y-8">
                {jobs?.map(({ logo, company, title, location }, idx) => (
                    <li key={idx} className="flex items-center gap-6">
                        <Image
                            src={logo}
                            alt={company}
                            className="rounded-sm"
                            width={52}
                            height={52}
                        />

                        <div className="flex flex-col flex-1">
                            <Text text={title} weight="bold" size="xs" className="leading-tight" />
                            <Text
                                text={`${company}\u00A0\u00A0${location}`}
                                className="text-gray-300 mt-1 text-[9px]"
                            />
                            <Link
                                href="/student/dashboard/search-jobs"
                                className="text-brightElectricBlue text-xs font-bold mt-2 hover:underline"
                            >
                                View Job
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
