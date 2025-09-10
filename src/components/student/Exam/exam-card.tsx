import React from 'react';
import { CalendarDays, Clock } from 'lucide-react';
import { mockedExamCard as skills } from '@/mocks/mockedExamData';
import { Text } from '@/components/ui/Text';

export default function ExamCard({ subject, skills }: { subject: string; skills: string[] }) {
    return (
        <div className="w-[1175px] h-[434px] bg-steelBlue rounded-2xl flex justify-between p-10 text-white font-sans">
            <div className="flex flex-col justify-between">
                <div className="text-gray-400">
                    <Text
                        as="h2"
                        text="Scheduled"
                        size="3xl"
                        weight="semibold"
                        className="text-white"
                    />
                    <Text className="mt-2">
                        Subject <Text as="span" text={subject} weight="medium" />
                    </Text>
                    <Text text="Total Marks : 50" weight="semibold" className="mt-1" />
                </div>

                <div className="mt-6">
                    <Text text="Skills" className="text-gray-400 mb-2" />
                    <div className="flex flex-wrap gap-3">
                        {skills?.map((skill, idx) => (
                            <Text
                                as="span"
                                key={idx}
                                text={skill}
                                className="border border-graphiteNeutral text-sm px-3 py-1 rounded"
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <Text text="Schedule" className="text-gray-400 mb-2" />
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 bg-deepSlateBlue px-4 py-2 rounded">
                            <CalendarDays className="w-4 h-4" />
                            <Text as="span" text="12-01-2023" size="sm" />
                        </div>
                        <div className="flex items-center gap-2 bg-deepSlateBlue px-4 py-2 rounded">
                            <Clock className="w-4 h-4" />
                            <Text as="span" text="9:40 pm" size="sm" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="absolute -top-4 -right-4 border border-white px-3 py-1 rounded text-sm text-white text-nowrap">
                    <Text text="Not Started" />
                </div>
            </div>
        </div>
    );
}
