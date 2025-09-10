import { Candidate } from '@/types/CandidateTypes';
import { Column, CompanyProfile, Row } from '@/types/Jobs';
import { OfferDetails, AppliedJob } from '@/types/Jobs';
import { Job } from '@/types/Jobs';
export const columns: Column[] = [
    { key: 'title', label: 'Job Title', width: '30%' },
    { key: 'company', label: 'Company', width: '20%' },
    { key: 'location', label: 'Location', width: '20%' },
    { key: 'status', label: 'Status', width: '15%' },
];

export const CandidateColumns: Column[] = [
    { key: 'name', label: 'Intern name', width: '30%' },
    { key: 'degree', label: 'Education', width: '30%' },
    { key: 'location', label: 'Location', width: '20%' },
    { key: 'gender', label: 'Gender', width: '20%' },
    { key: 'rating', label: 'Average Skill', width: '15%' },
    { key: 'finalYear', label: 'Pass out Year', width: '15%' },
    { key: 'certificates', label: 'Certificates', width: '15%' },
];
export const rows: Row[] = [
    {
        id: 1,
        name: 'Radhika Marimuthu',
        image: 'https://picsum.photos/id/237/200/300',
        degree: 'BSC. Computer Science',
        location: 'India',
        gender: 'Female',
        rating: 3,
        certificates: 5,
        finalYear: '2023/2024',
        avatarUrl: 'https://example.com/avatar.jpg',
        selected: false,
    },
];

export const defaultOfferDetails: OfferDetails = {
    description:
        'Offer for UI/UX Designer Intern. Responsibilities After Getting the Job: Conduct user research, create wireframes and prototypes, design visually appealing and intuitive user interfaces, collaborate with developers, perform usability testing, and refine designs based on feedback to enhance the user experience.',
    trainingProvided: false,
    offerLetterProvided: true,
    experienceCertificateProvided: true,
    stipend: {
        amount: '',
        currency: 'Currency',
    },
    bonus: {
        amount: '',
        currency: 'Currency',
    },
};
export const mockedappliedJobs: AppliedJob[] = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'TechNova',
        workLocation: 'Remote',
        location: 'San Francisco, CA',
        salary: '$3,500',
        deadline: '2025-08-15',
        logo: '/assets/company-logo.png',
        status: 'Accepted',
    },
    {
        id: 2,
        title: 'Backend Engineer',
        company: 'Cloudify',
        workLocation: 'On-site',
        location: 'New York, NY',
        salary: '$4,200',
        deadline: '2025-08-10',
        logo: '/assets/avatar-1.png',
        status: 'In process',
    },
    {
        id: 3,
        title: 'Full Stack Developer',
        company: 'CodeCraft',
        workLocation: 'Hybrid',
        location: 'Austin, TX',
        salary: '$4,000',
        deadline: '2025-08-20',
        logo: '/assets/avatar-1.png',
        status: 'Rejected',
    },
    {
        id: 4,
        title: 'Data Analyst',
        company: 'InsightPro',
        workLocation: 'Remote',
        location: 'Seattle, WA',
        salary: '$3,800',
        deadline: '2025-08-12',
        logo: '/assets/avatar-1.png',
        status: 'Rejected',
    },
    {
        id: 5,
        title: 'UI/UX Designer',
        company: 'PixelWorks',
        workLocation: 'On-site',
        location: 'Chicago, IL',
        salary: '$3,200',
        deadline: '2025-08-18',
        logo: '/assets/avatar-1.png',
        status: 'Rejected',
    },
];

export const mockedCompanyProfile: CompanyProfile = {
    companyLogo: 'X',
    jobTitle: 'Product Designer',
    jobDescription: 'Design and iterate intuitive digital products that delight our users.',
    trustedRating: 4.5,
    trustedLabel: 'Trusted',
    applicants: 22,
    companyVerified: true,
    isBookmarked: false,
};

export const jobs: Job[] = [
    {
        company: 'Grameenphone',
        title: 'Product Designer',
        location: 'Dhaka, Bangladesh',
        logo: '/assets/avatar-1.png',
    },
    {
        company: 'Banglalink',
        title: 'Product Designer',
        location: 'Dhaka, Bangladesh',
        logo: '/assets/avatar-2.png',
    },
    {
        company: 'Grameenphone',
        title: 'Product Designer',
        location: 'Dhaka, Bangladesh',
        logo: '/assets/avatar-3.png',
    },
];
