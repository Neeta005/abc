import React from 'react';

import { mockedappliedJobs } from '@/mocks/mockedJobs';
import Link from 'next/link';
import Image from 'next/image';
import { Text } from '@/components/ui/Text';
import { Check } from 'lucide-react';
const AppliedJobs = () => (
    <div className="bg-steelBlue rounded-2xl p-6 flex-1 min-w-[350px]">
        <div className="flex justify-between items-center mb-6">
            <Text text="Applied Jobs" size="lg" weight="semibold" />
            <Link
                href="/student/dashboard/applied-jobs"
                className="text-brightElectricBlue text-xs font-semibold hover:underline"
            >
                All Jobs
            </Link>
        </div>
        <ul className="space-y-8">
            {mockedappliedJobs?.map(({ logo, company, title, location, deadline: date }, idx) => (
                <li key={idx} className="flex items-center gap-6">
                    <Image src={logo} alt={company} className="rounded-sm" width={52} height={52} />

                    <div className="flex flex-col flex-1">
                        <Text text={title} weight="bold" size="xs" className="leading-tight" />
                        <Text
                            text={`${company}\u00A0\u00A0${location}`}
                            className="text-gray-300 mt-1 text-[9px]"
                        />
                        <div className="relative">
                            <Text text={`${date}`} className="text-gray-300 mt-1 text-xs ml-6" />
                            <Check className="h-4 w-4 text-black absolute top-1 bg-green-600 border border-transparent rounded-full" />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default AppliedJobs;
