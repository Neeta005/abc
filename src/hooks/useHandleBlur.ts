import companyRegistration from '@/types/companyRegistration';
import { useFormField } from '../helpers/useFormField';
import studentRegistration from '@/types/studentRegistration';
import { JobPostingProgress } from '@/types/JobPostingProgress';

export default function useHandleBlur(
    increament: (
        field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
    ) => void
) {
    return (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value.trim()) {
            console.log('Field is not empty, incrementing progress', e.target.value);
            increament(
                e.target.name as
                    | keyof studentRegistration
                    | keyof companyRegistration
                    | keyof JobPostingProgress
            );
        }
    };
}
