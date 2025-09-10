import { EducationForm } from '@/stores/registrationStore';
import { ValidationResult } from '@/types/validation';
export default function validateEducationForm(
    form: EducationForm,
    educations: boolean
): ValidationResult {
    if (educations) return { success: true, message: '' };
    const { college, course, year, cgpa, skills } = form;

    if (!college || !course || !year || !cgpa) {
        return { success: false, message: 'Please fill all required fields.' };
    }

    if (!/^\d{4}$/.test(year)) {
        return { success: false, message: 'Year must be in YYYY format.' };
    }

    if (!/^\d+(\.\d{1,2})?$/.test(cgpa)) {
        return { success: false, message: 'CGPA/Percentage must be a valid number.' };
    }

    if (skills.length === 0) {
        return { success: false, message: 'Please add at least one skill.' };
    }

    return { success: true, message: '' };
}
