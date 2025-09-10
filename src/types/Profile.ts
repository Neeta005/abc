export default interface ProfileHeaderProps {
    name: string;
    location: string;
    gender: string;
    college: string;
    education: string;
    passOutYear: string;
    recommended?: boolean;
    avgSkillRating: number;
    certificateCount: number;
}
export type Activity = {
    user: string;
    status: string;
    statusColor: string;
    detail: string;
};

export type ProfileData = {
    name: string;
    avatar: string;
    college: string;
    cgpa: string;
    phone: string;
    email: string;
    profileCompletion: number;
    activities: Activity[];
};

export type ProfileSummary = {
    name: string;
    college: string;
    cgpa: string;
    location: string;
    phone: string;
    email: string;
    profileComplete: number;
    docTypes: { docType: string; done: boolean }[];
    avatar: string;
};

export type ProfileStat = {
    label: string;
    value: number;
    change: string;
    color: string;
    text: string;
};
export type SkillProps = {
    label: string;
    score: number;
};
