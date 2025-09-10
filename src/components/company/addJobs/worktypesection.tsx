'use client';

import React from 'react';
import useJobPosting from '@/stores/jobPostingStore';
import { workTypes } from '@/mocks/mockedData';
import { useJobProgressStore } from '@/stores/progressHooks/jobStore';
import { useHandleValueChange } from '@/hooks/useHandleValueChange';
import useHandleBlur from '@/hooks/useHandleBlur';
import studentRegistration from '@/types/studentRegistration';
import companyRegistration from '@/types/companyRegistration';
import { JobPostingProgress } from '@/types/JobPostingProgress';
import RadioGroupCard from './radioGroupCard';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';

const WorkTypeSection = () => {
    const workTerms = ['Part-time', 'Full-time'];
    const setSelectedWork = useJobPosting((state) => state.setWorkType);
    const workType = useJobPosting((state) => state.workType);
    const selectedInterviewMode = workType.modeOfinteview;
    const selectedWorkTime = workType.workType;
    const selectedWorkType = workType.type;
    const { incrementDone: increament, decrementDone: decreament } = useJobProgressStore();
    
    // Define icon paths for different categories
    const workTypeIcons = ['/icons/image 143.png', '/icons/image 144.png']; // Adjust paths as needed
    const interviewModeIcons = ['/icons/communication 1.png', '/icons/Group 1171276234.png']; // Adjust paths as needed
    
    const handleBlur = useHandleBlur(
        increament as (
            field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );
    const handleValueChange = useHandleValueChange(
        setSelectedWork,
        decreament as (
            field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );
    
    return (
        <div className="mb-8">
            <Text as="h2" text="Work Type" className="text-white text-[30px] font-bold mb-6" />
            <Text as="p" text="Choose your work type" className="text-white mb-2" />
            <div className="flex gap-6 mb-8 text-white">
                {workTypes?.map(({ label, desc }) => (
                    <div
                        className={`w-[222px] border border-red-800/90 rounded-xl brand-e05a2b py-2 px-2  flex ${selectedWorkType === label ? 'ring-2 ring-brand-e05a2b' : ''}`}
                        key={label}
                    >
                        <div
                            className={`flex-1 cursor-pointer  py-2 px-2 flex flex-col gap-2 items-start relative `}
                        >
                            <Input
                                type="radio"
                                name="type"
                                className="accent-white w-5 h-5 mb-2 cursor-pointer"
                                style={{ accentColor: '#fff' }}
                                checked={selectedWorkType === label}
                                onBlur={handleBlur}
                                onChange={() => setSelectedWork({ ...workType, type: label })}
                            />
                        </div>
                        <div>
                            <Text
                                as="span"
                                className="text-white text-lg font-bold block"
                                text={label}
                            />
                            <Text as="span" className="text-base" text={desc} />
                        </div>
                    </div>
                ))}
            </div>

            <RadioGroupCard
                label="Work Type"
                name="workType"
                options={workTerms}
                selected={selectedWorkTime}
                icons={workTypeIcons}
                onSelect={(type) => {
                    setSelectedWork({ ...workType, workType: type });
                    if (type === '') {
                        decreament('workType');
                    }
                }}
                onBlur={handleBlur}
            />

            <RadioGroupCard
                label="Mode of Interview"
                name="modeOfinteview"
                options={['Face-to-Face-1', 'Face-to-Face-2']}
                selected={selectedInterviewMode}
                icons={interviewModeIcons}
                onSelect={(type) => {
                    setSelectedWork({ ...workType, modeOfinteview: type });
                    if (type === '') {
                        decreament('modeOfinteview');
                    }
                }}
                onBlur={handleBlur}
            />
        </div>
    );
};

export default WorkTypeSection;