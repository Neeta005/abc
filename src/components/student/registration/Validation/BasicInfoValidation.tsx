import { BasicInfoForm } from '@/stores/registrationStore';
import { ValidationResult } from '@/types/validation';
export default function useValidateBasicInfoForm(form: BasicInfoForm): ValidationResult {

    const required: (keyof typeof form)[] = ['fullName', 'gender', 'idProof', 'dob', 'mail'];

    for (const field of required) {
        const value = form[field];
        if (!value) {
            return {
                success: false,
                message: `Please fill in your ${field}`,
            };
        }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.mail)) {
        return {
            success: false,
            message: 'Please enter a valid email address',
        };
    }

    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dobRegex.test(form.dob)) {
        return {
            success: false,
            message: 'Date of Birth must be in YYYY-MM-DD format',
        };
    }

    if (form.linkedIn && !form.linkedIn.startsWith('https://www.linkedin.com/')) {
        return {
            success: false,
            message: 'LinkedIn profile must start with https://www.linkedin.com/',
        };
    }

    if (form.github && !form.github.includes('github.com')) {
        return {
            success: false,
            message: 'GitHub profile must contain github.com',
        };
    }

    return { success: true, message: '' };
}
