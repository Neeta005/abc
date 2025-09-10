import React, { ComponentType } from 'react';
import useRegister from '@/stores/registrationStore';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import QuestionsFilter from '@/components/company/addJobs/questionsFilterCandidates';
import Link from 'next/link';
import { StepContainerProps } from '@/types/StepTypes';

const StepContainer = ({
    components,
    validations,
    onFinish,
    type,
    onClick,
}: StepContainerProps) => {
    const step = useRegister((state) => state.step);
    const setStep = useRegister((state) => state.setStep);
    const setError = useRegister((state) => state.setError);

    const steps = useMemo(() => components, []);
    const StepComponent = steps[step];

    const handleSteps = () => {
        if (validations) {
            const mssg = validations[step]();

            if (!mssg?.success) {
                setError(mssg?.message || 'Please fix validation errors');
                return;
            } else {
                setError('');
            }
        }

        if (step === steps.length - 1 || step === 7) {
            onFinish();
        } else {
            setStep(step + 1);
        }
    };

    return (
        <div className="pt-[74px] flex-1 lg:left-[140px] relative z-10">
            <div className="max-w-2xl flex gap-3 px-4 relative">
                <div className="w-full relative flex gap-3">
                    <div className="w-full sm:mx-auto relative lg:min-w-[620px] lg:min-h-[700px]">
                        <div className="h-full z-0">
                            {type === 'jobs' && step === 0 ? (
                                <QuestionsFilter onClick={onClick} />
                            ) : (
                                <StepComponent />
                            )}
                        </div>
                    </div>
                    <div className="pt-2 absolute right-[-130px] top-[20px]">
                        <Button
                            className=" text-white px-8 py-2 text-md font-semibold rounded-md shadow-lg"
                            onClick={handleSteps}
                        >
                            {type === 'student' &&
                                (step === steps.length - 1
                                    ? 'Save and Submit'
                                    : step === 5
                                      ? 'Finish & Register'
                                      : 'Next')}
                            {type === 'jobs' &&
                                (step === steps.length - 1 ? (
                                    <Link href="/review-jobs">Review</Link>
                                ) : (
                                    'Next'
                                ))}
                            {type === 'company' &&
                                (step === steps.length - 1 ? 'Finish and Register' : 'Next')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default StepContainer;
