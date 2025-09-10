import { z } from 'zod';

const QuestionSchema = z.object({
    id: z.string(),
    type: z.enum(['text', 'multiple-choice', 'yes-no', 'number']),
    text: z.string(),
    required: z.boolean(),
    options: z.array(z.string()).optional(),
    maxLength: z.number().optional(),
    minValue: z.number().optional(),
    maxValue: z.number().optional(),
});

const JobPostFormDataSchema = z.object({
    roleName: z.string().min(1, 'Role name is required').max(100, 'Role name must be 100 characters or less'),
    company: z.string().min(1, 'Company name is required').max(100, 'Company name must be 100 characters or less'),
    skills: z.array(z.string().min(1, 'Skill cannot be empty')).min(1, 'At least one skill is required'),
    noOfOpenings: z.number().min(1, 'At least one opening is required').int('Number of openings must be an integer'),
    jobType: z.string().min(1, 'Job type is required'),
    workType: z.string().min(1, 'Work type is required'),
    modeOfInterview: z.string().min(1, 'Mode of interview is required'),
    fullAddress: z.string().min(1, 'Full address is required'),
    country: z.string().min(1, 'Country is required'),
    state: z.string().min(1, 'State is required'),
    city: z.string().min(1, 'City is required'),
    location: z.object({
        lat: z.number(),
        lng: z.number(),
    }),
    transportationSupport: z.boolean().optional(),
    responsibilities: z.string().min(1, 'Responsibilities are required'),
    training: z.boolean(),
    offerLetter: z.boolean(),
    certificate: z.boolean(),
    stipendPerMonth: z.number().min(0, 'Stipend cannot be negative'),
    bonus: z.number().min(0, 'Bonus cannot be negative'),
    questions: z.array(QuestionSchema),
    interviewMethod: z.string().min(1, 'Interview method is required'),
});

export interface Question {
    id: string;
    type: 'text' | 'multiple-choice' | 'yes-no' | 'number';
    text: string;
    required: boolean;
    options?: string[];
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
}

export interface JobPostFormData {
    roleName: string;
    company: string;
    skills: string[];
    noOfOpenings: number;
    jobType: string;
    workType: string;
    modeOfInterview: string;
    fullAddress: string;
    country: string;
    state: string;
    city: string;
    location: {
        lat: number;
        lng: number;
    };
    transportationSupport?: boolean;
    responsibilities: string;
    training: boolean;
    offerLetter: boolean;
    certificate: boolean;
    stipendPerMonth: number;
    bonus: number;
    questions: Question[];
    interviewMethod: string;
}

export interface ExtendedJobPostFormData extends JobPostFormData {
    companyDescription: string; // For "About Makro Pro" section
    jobOverview: string; // For "Job Overview" section
    whatYouWillDo: string[]; // For "What You Will Do" section
    postedDate?: string; // For displaying when the job was posted
    applicationDeadline?: string; // For application deadline
    experienceLevel?: string; // For additional job details
    salaryRange?: string; // For additional job details
}

export { QuestionSchema, JobPostFormDataSchema };


export interface StudentFormData {
    avatar: string;
    fullName: string;
    gender: string;
    governmentId: string;
    dateOfBirth: string;
    courses: string[];
    cgpa: string;
    linkedIn: string;
    github: string;
    country: string;
    state: string;
    city: string;
    location?: {
        lat: number;
        lng: number;
    };
    languages: string[];
    skills: string[];
    certifications: string[];
    achievements: string[];
};

export interface EmployerFormData {
    avatar: string;
    name: string;
    website: string;
    linkedin: string;
    type: string;
    addressLine1: string;
    country: string;
    state: string;
    city: string;
    location: {
        lat: number;
        lng: number;
    };
    fullName: string;
    phone: string;
    email: string;
}
