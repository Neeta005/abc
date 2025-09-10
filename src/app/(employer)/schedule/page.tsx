import React from 'react';
import MyCalendar from '@/components/company/dashboard/ScheduleInterview/CalendarClient';
import InfoCard from '@/components/company/dashboard/ScheduleInterview/InterviewCard';
import { mockInterviewData } from '@/mocks/mockedInterview';
export default function ScheduleInterview() {
    return (
        <div className="h-screen">
            <div className="flex gap-3 h-full">
                <div className="overflow-y-auto flex-col space-y-2">
                    {mockInterviewData?.map((data, indx) => (
                        <InfoCard key={indx} {...data} />
                    ))}
                </div>
                <div className="flex-1">
                    <div className="w-full h-full  ">
                        <MyCalendar />
                    </div>
                </div>
            </div>
        </div>
    );
}
