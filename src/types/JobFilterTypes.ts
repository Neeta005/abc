import { Dispatch, SetStateAction } from 'react';

export type JobFilterProps = {
    jobPost: string;
    setJobPost: Dispatch<SetStateAction<string>>;

    workingSchedule: string[];
    setWorkingSchedule: Dispatch<SetStateAction<string[]>>;

    experienceRange: { min: number; max: number };
    setExperienceRange: Dispatch<SetStateAction<{ min: number; max: number }>>;

    salaryRange: { min: number; max: number };
    setSalaryRange: Dispatch<SetStateAction<{ min: number; max: number }>>;

    selectedType: number[];
    setSelectedType: Dispatch<SetStateAction<number[]>>;

    onApply: () => void;
    onReset: () => void;
};
