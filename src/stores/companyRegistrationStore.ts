import { create } from 'zustand';

type Address = {
    city: string;
    country: string;
    state: string;
    pinCode: string;
    address: string;
};
export type Recruiter = {
    fullName: string;
    email: string;
    mobileNumber: string;
};

type companyDetails = {
    name: string;
    size: number;
    aboutCompany: string;
    website: string;
    linkedin: string;
    gstDetail: string;
};
interface Company {
    company: companyDetails;
    address: Address;
    recruiter: Recruiter;
    setCompanyData: (data: companyDetails) => void;
    getCompanyStatus: () => boolean;
    getRecruiterStatus: () => boolean;
    getDetailsStatus: () => boolean;
    setRecruiter: (data: Recruiter) => void;
    setAddress: (data: Address) => void;
}

const useCompanyStore = create<Company>((set, get) => ({
    company: {
        name: '',
        size: 0,
        aboutCompany: '',
        website: '',
        linkedin: '',
        gstDetail: '',
    },
    address: {
        city: '',
        country: '',
        state: '',
        pinCode: '',
        address: '',
    },
    recruiter: {
        fullName: '',
        email: '',
        mobileNumber: '',
    },

    setRecruiter: (data) =>
        set((state) => ({
            recruiter: {
                ...state.recruiter,
                ...data,
            },
        })),
    setAddress: (data) =>
        set((state) => ({
            address: {
                ...state.address,
                ...data,
            },
        })),

    setCompanyData: (data) =>
        set((state) => ({
            company: {
                ...state.company,
                ...data,
            },
        })),

    getCompanyStatus: () => {
        const state = get();
        const currAddress = state.address;
        return Object.values(currAddress).every((value) => value !== '');
    },
    getRecruiterStatus: () => {
        const recruiter = get().recruiter;
        return Object.values(recruiter).every((value) => value !== '');
    },
    getDetailsStatus: () => {
        const details = get().company;
        return Object.values(details).every((value) => value !== '');
    },
}));

export default useCompanyStore;
