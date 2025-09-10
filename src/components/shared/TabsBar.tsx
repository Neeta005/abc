import React from 'react';
import { Button } from '@/components/ui/button';

export function TabsBar({
    tabs,
    activeTab,
    setActiveTab,
    setStep,
}: {
    tabs: { id: string; label: string }[];
    activeTab: string;
    setActiveTab: (id: string) => void;
    setStep?: (step: number) => void;
}) {
    return (
        <div className="flex gap-4  w-full  rounded-lg mr-7">
            {tabs?.map(({ id, label }, indx) => (
                <Button
                    key={indx}
                    variant="default"
                    onClick={() => {
                        setActiveTab(id);
                        if (setStep) setStep(indx);
                    }}
                    className={`px-4 py-4 text-[12px] border border-transparent  rounded-[5px] bg-inherit font-semibold ${
                        activeTab === id
                            ? 'text-warmOrange bg-midnightBlue border border-midnightBlue'
                            : 'text-white '
                    } focus:outline-none`}
                >
                    {label}
                </Button>
            ))}
        </div>
    );
}
