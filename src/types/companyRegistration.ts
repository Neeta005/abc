type companyRegistration = {
    city: number;
    country: number;
    state: number;
    pinCode: number;
    address: number;

    fullName: number;
    mail: number;
    mobileNumber: number;

    name: number;
    size: number;
    aboutCompany: number;
    website: number;
    linkedin: number;
    gstDetail: number;

    done: number;
};
export default companyRegistration;

export type CompanyDetails = {
    companyName: string;
    state: string;
    city: string;
    recruiter: string;
    country: string;
    companySize: string;
};

export type ProfileSocials = {
    name: string;
    link: string;
};
