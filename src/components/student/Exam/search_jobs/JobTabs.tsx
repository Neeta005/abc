'use client';
import React from 'react';
import { BasicTabs } from '@/components/ui/tabs';

export default function JobTabs({
    activeTab = 0,
    onTabChange,
}: {
    activeTab?: number;
    onTabChange?: (idx: number) => void;
}) {
    const tabLabels: string[] = [
        'Basic Information',
        'Roles & Responsibilities',
        'Offer Details',
        'Questions',
    ];

    const tabContents = tabLabels?.map((label) => <div className="text-white" key={label}></div>);

    return (
        <div className="w-full bg-stormySlate px-8 border-b-[1.5px] border-stormySlate">
            <div className="text-white">
                <BasicTabs
                    tabs={tabLabels?.map((label, idx) => ({
                        label,
                        content: tabContents?.[idx],
                    }))}
                />
            </div>
        </div>
    );
}
