import { create } from 'zustand';

type AchievementForm = {
    achievementTitle: string;
    achievmentFromDate: string;
    achievementToDate: string;
    achievementDescription: string;
    done?: boolean;
};

export type EducationForm = {
    college: string;
    course: string;
    year: string;
    cgpa: string;
    skills: string[];
    done?: boolean;
};

export type BasicInfoForm = {
    fullName: string;
    gender: string;
    idProof: string;
    dob: string;
    dobCalendarOpen: boolean;
    mail: string;
    linkedIn: string;
    github: string;
    done?: boolean;
};

type ProjectForm = {
    projToDate: string;
    projFromDate: string;
    projectTitle: string;
    tasks: string[];
    projectDescription: string;
    done?: boolean;
};

export type Certification = {
    certificationTitle: string;
    certIssuedBy: string;
    certDate: string;

    done?: boolean;
};

type PhotoUploadState = {
    selectedPhoto: string | null;
    setSelectedPhoto: (photo: string | null) => void;
    photoError: string | null;
    setPhotoError: (error: string | null) => void;
};

type PhoneNumberState = {
    selectedCode: string;
    setSelectedCode: (code: string) => void;
    phone: string;
    setPhone: (phone: string) => void;
    phoneMessage: string;
    setPhoneMessage: (msg: string) => void;
    phoneError: string;
    setPhoneError: (err: string) => void;
};

type OTPState = {
    otp: string[];
    otpRequested: boolean;
    setOtpRequested: (requested: boolean) => void;
    setOtp: (otp: string[]) => void;
    otpError: string;
    setOtpError: (err: string) => void;
    resendTimer: number;
    setResendTimer: (n: number) => void;
    validTimer: number;
    setValidTimer: (n: number) => void;
    otpMessage: string;
    setOtpMessage: (msg: string) => void;
};

export type RegisterState = {
    educationForm: EducationForm;
    setEducationForm: (form: Partial<EducationForm>) => void;
    setSkills: (skills: string[]) => void;

    finalStep: boolean;
    setFinalStep: (final: boolean) => void;

    otpRequested: boolean;
    setOtpRequested: (requested: boolean) => void;

    educations: EducationForm[];
    addEducation: (education: EducationForm) => void;
    updateEducations: (educations: EducationForm[]) => void;

    basicInfoForm: BasicInfoForm;
    setBasicInfoForm: (form: Partial<BasicInfoForm>) => void;

    achievementForm: AchievementForm;
    setAchievementForm: (form: Partial<AchievementForm>) => void;

    achievements: AchievementForm[];
    setAchievements: (achievements: AchievementForm[]) => void;
    addAchievement: (achievement: AchievementForm) => void;

    projectForm: ProjectForm;
    setProjectForm: (form: Partial<ProjectForm>) => void;
    projects: ProjectForm[];
    setProjects: (projects: ProjectForm[]) => void;

    certifications: Certification[];
    setCertifications: (certifications: Certification[]) => void;
    certificationForm: Certification;
    setCertificationForm: (form: Partial<Certification>) => void;

    openCalendar: boolean;
    setOpenCalendar: (value: boolean) => void;
    isCertificationCalendarOpen: boolean;
    setIsCertificationCalendarOpen: (open: boolean) => void;

    error: string;
    setError: (value: string) => void;

    // Photo upload state
    selectedPhoto: string | null;
    setSelectedPhoto: (photo: string | null) => void;
    photoError: string | null;
    setPhotoError: (error: string | null) => void;

    // Phone number state
    selectedCode: string;
    setSelectedCode: (code: string) => void;
    phone: string;
    setPhone: (phone: string) => void;
    phoneMessage: string;
    setPhoneMessage: (msg: string) => void;
    phoneError: string;
    setPhoneError: (err: string) => void;

    // OTP state
    otp: string[];
    setOtp: (otp: string[]) => void;
    otpError: string;
    step: number;
    setStep: (val: number) => void;

    setOtpError: (err: string) => void;
    resendTimer: number;
    setResendTimer: (n: number) => void;
    validTimer: number;
    setValidTimer: (n: number) => void;
    otpMessage: string;
    setOtpMessage: (msg: string) => void;

    isDragOver: boolean;
    setIsDragOver: (v: boolean) => void;
    uploadError: boolean;
    setUploadError: (v: boolean) => void;
    selectedFile: File | null;
    setSelectedFile: (f: File | null) => void;
    uploadProgress: number;
    setUploadProgress: (n: number) => void;
    isUploading: boolean;
    setIsUploading: (v: boolean) => void;
};

const OTP_LENGTH = parseInt(process.env.NEXT_PUBLIC_OTP_LENGTH || '6');
const RESEND_TIME = parseInt(process.env.NEXT_PUBLIC_OTP_RESEND_TIME || '60');
const VALID_TIME = parseInt(process.env.NEXT_PUBLIC_OTP_VALID_TIME || '180');

const useRegister = create<RegisterState>((set) => ({
    educationForm: {
        college: '',
        course: '',
        year: '',
        cgpa: '',
        skills: [],
        done: false,
    },
    finalStep: false,
    setFinalStep: (final: boolean) => set({ finalStep: final }),
    otpRequested: false,
    setOtpRequested: (requested: boolean) => set({ otpRequested: requested }),

    step: 0,
    setStep: (val: number) => set({ step: val }),

    setEducationForm: (form) =>
        set((state) => ({
            educationForm: {
                ...state.educationForm,
                ...form,
            },
        })),

    setSkills: (skills) =>
        set((state) => ({
            educationForm: {
                ...state.educationForm,
                skills,
            },
        })),

    educations: [],
    addEducation: (education) =>
        set((state) => ({
            educations: [...state.educations, education],
        })),
    updateEducations: (educations) => set({ educations }),

    basicInfoForm: {
        fullName: '',
        gender: '',
        dobCalendarOpen: false,
        idProof: '',
        dob: '',
        mail: '',
        linkedIn: '',
        github: '',
        done: false,
    },
    setBasicInfoForm: (form) =>
        set((state) => ({
            basicInfoForm: {
                ...state.basicInfoForm,
                ...form,
            },
        })),

    achievementForm: {
        achievementTitle: '',
        achievmentFromDate: '',
        achievementToDate: '',
        achievementDescription: '',
        done: false,
    },
    setAchievementForm: (form) =>
        set((state) => ({
            achievementForm: {
                ...state.achievementForm,
                ...form,
            },
        })),

    achievements: [],
    setAchievements: (achievements) => set({ achievements }),
    addAchievement: (achievement) =>
        set((state) => ({
            achievements: [...state.achievements, achievement],
        })),

    projectForm: {
        projectTitle: '',
        projFromDate: '',
        projToDate: '',
        tasks: [''],
        projectDescription: '',
        done: false,
    },
    setProjectForm: (form) =>
        set((state) => ({
            projectForm: {
                ...state.projectForm,
                ...form,
            },
        })),
    projects: [],
    setProjects: (projects) => set({ projects }),

    certifications: [],
    setCertifications: (certifications) => set({ certifications }),
    certificationForm: { certificationTitle: '', certIssuedBy: '', certDate: '' },
    setCertificationForm: (form) =>
        set((state) => ({
            certificationForm: {
                ...state.certificationForm,
                ...form,
            },
        })),

    openCalendar: false,
    setOpenCalendar: (value) => set({ openCalendar: value }),

    isCertificationCalendarOpen: false,
    setIsCertificationCalendarOpen: (open) => set({ isCertificationCalendarOpen: open }),

    error: '',
    setError: (value) => set({ error: value }),

    selectedPhoto: null,
    setSelectedPhoto: (photo) => set({ selectedPhoto: photo }),
    photoError: null,
    setPhotoError: (error) => set({ photoError: error }),

    selectedCode: 'IN', // Default to India, can be changed
    setSelectedCode: (code) => set({ selectedCode: code }),
    phone: '',
    setPhone: (phone) => set({ phone }),
    phoneMessage: '',
    setPhoneMessage: (msg) => set({ phoneMessage: msg }),
    phoneError: '',
    setPhoneError: (err) => set({ phoneError: err }),

    otp: Array(OTP_LENGTH).fill('') as string[],
    setOtp: (otp) => set({ otp }),
    otpError: '',
    setOtpError: (err) => set({ otpError: err }),
    resendTimer: RESEND_TIME,
    setResendTimer: (n) => set({ resendTimer: n }),
    validTimer: VALID_TIME,
    setValidTimer: (n) => set({ validTimer: n }),
    otpMessage: '',
    setOtpMessage: (msg) => set({ otpMessage: msg }),

    isDragOver: false,
    setIsDragOver: (v) => set({ isDragOver: v }),
    uploadError: false,
    setUploadError: (v) => set({ uploadError: v }),
    selectedFile: null,
    setSelectedFile: (f) => set({ selectedFile: f }),
    uploadProgress: 0,
    setUploadProgress: (n) => set({ uploadProgress: n }),
    isUploading: false,
    setIsUploading: (v) => set({ isUploading: v }),
}));

// Selector for stepsState

export default useRegister;
