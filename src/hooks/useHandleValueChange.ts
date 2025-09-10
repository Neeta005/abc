import { useFormField } from '../helpers/useFormField';
import studentRegistration from '@/types/studentRegistration';
import { JobPostingProgress } from '@/types/JobPostingProgress';
import companyRegistration from '@/types/companyRegistration';
export function useHandleValueChange(
    setter: Function,
    decreament: (
        field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
    ) => void
) {
    const handleChange = useFormField(setter);

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        handleChange(e);

        if (e.target instanceof HTMLInputElement) {
            const value = e.target.value;
            if (value === '') {
                decreament(
                    e.target.name as
                        | keyof studentRegistration
                        | keyof companyRegistration
                        | keyof JobPostingProgress
                );
            }
        }
    };

    return handleValueChange;
}
