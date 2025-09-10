'use client';
import useRegister from '@/stores/registrationStore';
import {
    useStudentProgressLabel,
    useCompanyProgressLabel,
    useJobsProgressLabel,
} from '@/hooks/useStudentProgressLabel';
import { useCompanyProgressStore } from '@/stores/progressStepperStore';
import { useStudentProgressStore } from '@/stores/progressHooks/useStudentProgressStore';
import { useJobProgressStore } from '@/stores/progressHooks/jobStore';
import { ProgressTrackerProps } from '@/types/ProgressTypes';
import { Text } from '@/components/ui/Text';
import ProgressCircle from './ProgressCircle';
const ProgressTracker = ({
    stepsState,
    firstSteps,
    job = false,
    company = false,
}: ProgressTrackerProps) => {
    // const  = useProgressStore((state) => state.basicInfo).done;
    const companyProgress = useCompanyProgressStore((state) => state.companyInfo).done;
    // const jobProgress = useJobProgressStore((state) => state.progress).done;
    const {
        data: { done: basicProgress },
    } = useStudentProgressStore();

    const {
        data: { done: jobProgress },
    } = useJobProgressStore();

    let total = 0;
    const step = useRegister((state) => state.step);
    type Step = {
        title: string;
        completed: boolean;
    };

    let steps: Step[] = [];
    if (!company && !job) {
        total = basicProgress;
        steps = step > 5 ? useStudentProgressLabel() : useStudentProgressLabel().slice(0, 4);
    } else if (company && !job) {
        total = companyProgress;
        steps = useCompanyProgressLabel();
    } else if (company && job) {
        total = jobProgress;
        steps = useJobsProgressLabel();
    }

    return (
<div className="rounded-[12px] bg-[#FFFFFF1A] p-4 w-[329px] text-white shadow-md border border-white flex flex-col items-center justify-center -mt-12">
            <ProgressCircle total={total} />
            <div className="grid grid-cols-[32px_1fr] gap-x-4 w-full px-6 mt-2">
                <div className="flex flex-col gap-6 items-end">
                    {steps?.map(({ title, completed }, id) => (
                        <svg
                            key={id}
                            className="w-8 h-8"
                            fill="none"
                            stroke={completed ? '#22c55e' : '#6b7280'}
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                        >
                            {completed ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            )}
                        </svg>
                    ))}
                </div>
                <div className="flex flex-col gap-6 items-start">
                    {steps?.map(({ title, completed }, id) => (
                        <Text
                            key={id}
                            text={title}
                            className={`font-semibold text-[15px] whitespace-nowrap p-[7px] text-base leading-tight ${
                                completed ? 'text-green-400' : 'text-white'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgressTracker;
