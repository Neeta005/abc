import BasicInfo from '@/components/student/Exam/search_jobs/basicInfo';
import { create } from 'zustand';
import { JobPostingProgress } from '@/types/JobPostingProgress';
import companyRegistration from '@/types/companyRegistration';
import studentRegistration from '@/types/studentRegistration';
type JobFieldKey = keyof Omit<JobPostingProgress, 'done'>;

interface JobProgressStore {
    progress: JobPostingProgress;
    completedFields: Set<JobFieldKey>;

    incrementDone: (field: JobFieldKey, num?: number) => void;
    decrementDone: (field: JobFieldKey) => void;
    resetProgress: () => void;
}

export const useJobProgressStore = create<JobProgressStore>((set, get) => ({
    progress: {
        file: 5,

        roleName: 15,
        skillsRequired: 15,
        openings: 10,

        type: 7,
        modeOfinteview: 5,
        workType: 5,

        city: 5,
        state: 5,
        country: 5,
        transportProvided: 3,
        questions: 15,
        rolesResp: 10,
        training: 5,
        expCertificate: 3,
        stipend: 3,
        bonus: 4,
        offer: 4,
        stipendCurrency: 1,
        bonusCurrency: 1,
        done: 0,
    },

    completedFields: new Set(),

    incrementDone: (field, num) => {
        const state = get();
        if (!state.completedFields.has(field)) {
            state.completedFields.add(field);
            const fieldValue = num ?? state.progress[field];
            set((prev) => ({
                progress: {
                    ...prev.progress,
                    done: prev.progress.done + fieldValue,
                },
            }));
        }
    },

    decrementDone: (field) => {
        const state = get();
        if (state.completedFields.has(field)) {
            state.completedFields.delete(field);
            const fieldValue = state.progress[field];
            set((prev) => ({
                progress: {
                    ...prev.progress,
                    done: prev.progress.done - fieldValue,
                },
            }));
        }
    },

    resetProgress: () =>
        set(() => ({
            completedFields: new Set(),
            progress: {
                file: 5,

                roleName: 15,
                skillsRequired: 15,
                openings: 10,

                type: 7,
                modeOfinteview: 5,
                workType: 5,

                city: 5,
                state: 5,
                country: 5,
                transportProvided: 3,

                rolesResp: 10,
                training: 5,
                expCertificate: 3,
                stipend: 3,
                bonus: 4,
                offer: 4,
                stipendCurrency: 1,
                bonusCurrency: 1,
                questions: 15,
                done: 0,
            },
        })),
}));

type CompanyFieldKey = keyof Omit<companyRegistration, 'done'>;

interface CompanyProgressStore {
    companyInfo: companyRegistration;
    completedFields: Set<CompanyFieldKey>;
    incrementDone: (field: CompanyFieldKey) => void;
    decrementDone: (field: CompanyFieldKey) => void;
    resetProgress: () => void;
}

type FieldKey = keyof Omit<studentRegistration, 'done'>;

interface ProgressStore {
    basicInfo: studentRegistration;
    completedFields: Set<FieldKey>;
    incrementDone: (field: FieldKey, _num?: number) => void;
    resetProgress: () => void;
    decreamentDone: (field: FieldKey) => void;
}
export const useCompanyProgressStore = create<CompanyProgressStore>((set, get) => ({
    companyInfo: {
        city: 3,
        country: 3,
        state: 3,
        pinCode: 3,
        address: 3,
        fullName: 3,
        mail: 3,
        mobileNumber: 3,
        name: 3,
        size: 3,
        aboutCompany: 3,
        website: 3,
        linkedin: 3,
        gstDetail: 3,
        done: 0,
    },

    completedFields: new Set(),

    incrementDone: (field, num = 3) => {
        const state = get();
        if (!state.completedFields.has(field)) {
            state.completedFields.add(field);
            set((prev) => ({
                companyInfo: {
                    ...prev.companyInfo,
                    done: prev.companyInfo.done + num,
                },
            }));
        }
    },

    decrementDone: (field) => {
        const state = get();
        if (state.completedFields.has(field)) {
            state.completedFields.delete(field);
            set((prev) => ({
                companyInfo: {
                    ...prev.companyInfo,
                    done: prev.companyInfo.done - 3,
                },
            }));
        }
    },

    resetProgress: () =>
        set(() => ({
            companyInfo: {
                city: 3,
                country: 3,
                state: 3,
                pinCode: 3,
                address: 3,
                fullName: 3,
                mail: 3,
                mobileNumber: 3,
                name: 3,
                size: 3,
                aboutCompany: 3,
                website: 3,
                linkedin: 3,
                gstDetail: 3,
                done: 0,
            },
            completedFields: new Set(),
        })),
}));

export const useProgressStore = create<ProgressStore>((set, get) => ({
    basicInfo: {
        photoUpload: 7,
        resumeUpload: 9,
        phoneNumber: 7,
        otpNumber: 7,
        fullName: 3,
        gender: 3,
        dob: 3,
        idProof: 3,
        mail: 3,
        linkedIn: 3,
        college: 3,
        course: 3,
        cgpa: 3,
        year: 3,
        skills: 9,
        done: 0,
        github: 0,
        achievementTitle: 3,
        achievementToDate: 3,
        achievementTextField: 3,
        certificationTitle: 3,
        certIssuedBy: 1,
        certDate: 1,
        projToDate: 1,
        projFromDate: 1,
        projectTitle: 3,
        projectTextField: 3,
        achievmentFromDate: 1,
        projectDescription: 3,
        achievementDescription: 3,
    },

    completedFields: new Set(),

    incrementDone: (field) => {
        const state = get();

        if (!state.completedFields.has(field)) {
            state.completedFields.add(field);
            const fieldValue = state.basicInfo[field];
            set((prev) => ({
                basicInfo: {
                    ...prev.basicInfo,
                    done: prev.basicInfo.done + fieldValue,
                },
            }));
        }
    },
    decreamentDone: (field) => {
        const state = get();

        if (state.completedFields.has(field)) {
            state.completedFields.delete(field);
            const fieldValue = state.basicInfo[field];
            set((prev) => ({
                basicInfo: {
                    ...prev.basicInfo,
                    done: prev.basicInfo.done - fieldValue,
                },
            }));
        }
    },

    resetProgress: () =>
        set(() => ({
            basicInfo: {
                photoUpload: 7,
                resumeUpload: 9,
                phoneNumber: 7,
                otpNumber: 7,
                fullName: 3,
                gender: 3,
                dob: 3,
                idProof: 3,
                mail: 3,
                linkedIn: 3,
                college: 3,
                course: 3,
                cgpa: 3,
                year: 3,
                skills: 9,
                done: 0,
                github: 0,
                achievement: 3,
                achievementToDate: 3,
                achievementTextField: 3,
                certification: 3,
                certIssuedBy: 1,
                certDate: 1,
                projToDate: 1,
                projFromDate: 1,
                project: 3,
                projectTextField: 3,
                achievmentFromDate: 1,
                projectDescription: 3,
                achievementDescription: 3,
                projectTitle: 3,
                certificationTitle: 3,
                achievementTitle: 3,
            },
            completedFields: new Set(),
        })),
}));

import { StateCreator } from 'zustand';

type ProgressStore1<T extends Record<string, number>> = {
    data: T;
    completedFields: Set<keyof Omit<T, 'done'>>;
    incrementDone: (field: keyof Omit<T, 'done'>, customValue?: number) => void;
    decrementDone: (field: keyof Omit<T, 'done'>) => void;
    resetProgress: () => void;
};

export function createProgressStore<T extends Record<string, number>>(
    initialData: T
): StateCreator<ProgressStore1<T>, [], [], ProgressStore1<T>> {
    type FieldKey = keyof Omit<T, 'done'>;

    return (set, get) => ({
        data: { ...initialData },
        completedFields: new Set<FieldKey>(),

        incrementDone: (field, customValue) => {
            const state = get();
            if (!state.completedFields.has(field)) {
                const value = customValue ?? state.data[field];
                const newDone = state.data.done + value;
                const newSet = new Set(state.completedFields);
                newSet.add(field);

                set({
                    data: {
                        ...state.data,
                        done: newDone,
                    },
                    completedFields: newSet,
                });
            }
        },

        decrementDone: (field) => {
            const state = get();
            if (state.completedFields.has(field)) {
                const value = state.data[field];
                console.log(`Decrementing progress for field:, value: ${value}`);
                const newDone = state.data.done - value;

                const newSet = new Set(state.completedFields);
                newSet.delete(field);

                set({
                    data: {
                        ...state.data,
                        done: newDone,
                    },
                    completedFields: newSet,
                });
            }
        },

        resetProgress: () => {
            set({
                data: { ...initialData },
                completedFields: new Set<FieldKey>(),
            });
        },
    });
}
