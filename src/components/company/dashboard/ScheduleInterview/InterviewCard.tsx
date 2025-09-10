import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { CustomLogo } from './custom';
import { Text } from '@/components/ui/Text';

import { InterviewDataProps } from '@/types/InterviewSchedule';
export default function InfoCard({ title, name, date, time, mode, skills }: InterviewDataProps) {
    return (
        <div className="bg-deepIndigo text-white rounded-2xl p-3 max-w-sm shadow-xl flex gap-3">
            <CustomLogo />
            <div className="font-sans flex flex-col gap-1">
                <div className="flex items-center">
                    <Text as="h2" text={title} size="lg" weight="bold" />
                </div>

                <div className="space-y-1">
                    <Text as="p" size="xs" className="text-gray-300">
                        Name:{' '}
                        <Text as="span" className="text-white ">
                            {name}
                        </Text>
                    </Text>

                    <div>
                        <Text as="p" text="Schedule" size="xs" className="text-gray-300 mb-2" />
                        <div className="flex flex-wrap gap-1">
                            <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg">
                                <Calendar size={18} className="text-gray-400" />
                                <Text as="span" text={date} size="sm" className="text-[10px]" />
                            </div>
                            <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg">
                                <Clock size={18} className="text-gray-400" />
                                <Text as="span" text={time} className="text-[10px] md:sm" />
                            </div>
                        </div>
                    </div>

                    <Text as="p" size="xs" className="text-gray-300">
                        Mode:{' '}
                        <Text as="span" className="text-white text-[10px]">
                            {mode}
                        </Text>
                    </Text>

                    <div>
                        <Text as="p" text="Skills" size="xs" className="text-gray-300 mb-2" />
                        <div className="flex flex-wrap gap-2">
                            {skills?.map((skill) => (
                                <Text
                                    as="span"
                                    key={skill}
                                    text={skill}
                                    className="px-3 py-1 bg-gray-500/90 border border-white rounded-lg text-[10px] text-gray-200"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
