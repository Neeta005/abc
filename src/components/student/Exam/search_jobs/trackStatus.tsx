import React, { RefObject } from 'react';
import { Text } from '@/components/ui/Text';
import { Check } from 'lucide-react';
import { steps } from '@/mocks/TrackStatusData';
import TrackCard from './trackStatusCard';
export default function TrackStatus({
    onClick,
    ref,
}: {
    onClick: () => void;
    ref: RefObject<HTMLDivElement>;
}) {
    const totalSteps = steps.length - 1;
    const completedSteps = steps.filter((step) => step.status === 'completed').length;
    const res = (completedSteps / totalSteps) * 100 - 13;
    const progressPercentage = res > 100 ? 90 : res;

    return (
        <div className="flex justify-center items-center w-full " ref={ref}>
            <div className="bg-slate-700 rounded-lg max-w-4xl p-6  flex flex-col gap-5 justify-between">
                <div className="flex justify-between items-center">
                    <div />
                    <Text
                        text={'Track Status'}
                        weight={'semibold'}
                        size={'xl'}
                        className="text-white"
                    />
                    <Text
                        text={'X'}
                        size={'base'}
                        onClick={onClick}
                        className="cursor-pointer text-white"
                    />
                </div>
                <div className="relative w-full gap-6 flex items-center justify-between">
                    <div className="absolute top-[22%] left-4 mr-4 ml-5 right-4 h-1 bg-white/30 z-0 -translate-y-1/2" />
                    <div
                        className="absolute top-[22%] left-4 mr-4 ml-5 right-4 h-1 bg-green-500 z-10 -translate-y-1/2 transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                    />
                    {steps?.map(({ status, label }, idx) => (
                        <TrackCard key={idx} status={status} label={label} />
                    ))}
                </div>
            </div>
        </div>
    );
}
