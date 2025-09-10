import React from 'react';
import LineChart from '@/components/ui/chart';
import { chartLabels, chartData } from '@/mocks/mockedProfileData';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

export default function ProfileChart() {
    return (
        <div className="bg-steelBlue rounded-lg shadow mb-6 relative w-full max-w-full overflow-x-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 pb-2 px-4">
                <Text text="Matched jobs" size="3xl" weight="semibold" className="leading-tight" />
                <div className="mt-2 sm:mt-0 sm:mr-3 relative">
                    <Text
                        text="4029"
                        className="text-white text-[28.88px] font-extrabold inline-block mr-9"
                    />
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-1 right-0 text-blue-300 text-3xl font-bold inline-block"
                    >
                        ...
                    </Button>
                </div>
            </div>
            <div className="px-4 pb-4">
                <LineChart
                    labels={chartLabels}
                    data={chartData}
                    label="Profile Views"
                    borderColor="#1EA1F1"
                    backgroundColor="rgba(30,161,241,0.10)"
                />
            </div>
        </div>
    );
}
