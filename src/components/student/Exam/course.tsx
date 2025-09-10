import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { mockedCourses as data } from '@/mocks/mockedExamData';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

function formatDate(dateStr?: string) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
}

export default function Course() {
    return (
        <div className="space-y-6">
            {data?.map(({ course, subject, scheduledTime, scheduledDay, status }, index) => (
                <div
                    key={index}
                    className="w-[1210px] border-l-[10px] border-merlotRed bg-boldSlateBlue h-[139px] flex items-center rounded-[8px] text-white relative px-8"
                >
                    <div className="flex flex-col justify-between flex-1 gap-2">
                        <Text text={course} className="text-[20px]" weight="bold" />
                        <div className="flex flex-col justify-between mt-2 gap-8 text-mutedBlueGray text-base">
                            <Text as="span">
                                <Text as="span" weight="medium">
                                    Subject
                                </Text>
                                <Text
                                    as="span"
                                    text={subject}
                                    className="ml-2 text-white"
                                    weight="normal"
                                />
                            </Text>
                        </div>
                        <div>
                            <span className="flex items-center gap-2">
                                <Text as="span" weight="medium" className="text-mutedBlueGray">
                                    Scheduled
                                </Text>
                                <span className="flex items-center ml-2 gap-2">
                                    <Clock />
                                    <Text as="span" text={scheduledTime} />
                                    <Calendar />
                                    <Text as="span" text={formatDate(scheduledDay)} />
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end h-full py-3">
                        <div className="grid">
                            <Button
                                variant="outline"
                                className="border-mutedBlueGray text-mutedBlueGray rounded-[6px] px-4 py-1 text-base font-medium mb-2 bg-boldSlateBlue"
                            >
                                {status}
                            </Button>
                            <Button
                                variant="link"
                                className="text-vibrantOrange text-base mt-8 ml-0 font-semibold hover:underline"
                            >
                                View Details
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
