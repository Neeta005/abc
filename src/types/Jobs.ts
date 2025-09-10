import { ReactNode } from 'react';
export type BookmarkMessage = 'Job unbookmarked' | 'Job bookmarked';
import { Column as ColumnProps } from '@/types/Jobs';
export default interface JobPostedProps {
    title: string;
    company: string;
    postedDate: string;
    openings: number;
    stipend: string;
    interviewMode: string;
    workHours: string;
    type: string;
    skills: string[];
    onEdit?: () => void;
    onDelete?: () => void;
    onCopy?: () => void;
}
export interface RecentJobsProps {
    job: string;
    company: string;
    time: string;
    country: string;
    image?: string;
}

export type Column = {
    key: string;
    label: string;
    width?: string;
};

export type Row = {
    [key: string]: React.ReactNode;
};

export type JobTableProps = {
    columns: Column[];
    rows: Row[];
    applicant?: boolean;
};
export type JobRowProps = {
    applicant?: boolean;
    idx: number;
    row: Row;
    columns: Column[];
    activeRow: number | null;
    setActiveRow: (val: number | null) => void;
    menuRef: React.RefObject<HTMLDivElement>;
};

export type OfferDetails = {
    description: string;
    trainingProvided: boolean;
    offerLetterProvided: boolean;
    experienceCertificateProvided: boolean;
    stipend: {
        amount: string;
        currency: string;
    };
    bonus: {
        amount: string;
        currency: string;
    };
};
export type AppliedJob = {
    id: number;
    title: string;
    company: string;
    workLocation: string;
    location: string;
    salary: string;
    deadline: string;
    logo: string;
    status: string;
};
export type CompanyProfile = {
    companyLogo: string;
    jobTitle: string;
    jobDescription: string;
    trustedRating: number;
    trustedLabel: string;
    applicants: number;
    companyVerified: boolean;
    isBookmarked: boolean;
};
export type Job = {
    company: string;
    title: string;
    location: string;
    logo: string;
};

export type ShareOption = {
    name: string;
    icon: ReactNode;
    bgColor: string;
    onClick: (url: string) => void;
};

export type ProfileColumn = {
    keyName: string;
    width?: string;
    row: Row;
    columns: ColumnProps[];
    applicant?: boolean;
};
