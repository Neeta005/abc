import { ComponentType } from 'react';
import { ValidationResult } from '@/types/validation';
export type StepComponentType = ComponentType;

export interface StepContainerProps {
    components: StepComponentType[];
    validations?: ((data?: any) => ValidationResult)[];
    onFinish: () => void;
    type: string;
    onClick?: () => void;
}
