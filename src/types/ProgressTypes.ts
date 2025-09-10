interface StepsState {
    file: boolean;
    phone: boolean;
    basicInfo: boolean;
    education: boolean;
    projects: boolean;
    achievements: boolean;
}
interface FirstStep {
    title: string;
    completed: boolean;
}
export interface ProgressTrackerProps {
    stepsState?: StepsState;
    firstSteps?: FirstStep[];
    job?: boolean;
    company?: boolean;
}
