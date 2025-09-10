// Mocked profile summary data for ProfileSummary component

import { Candidate } from '@/types/CandidateTypes';
import { ProfileData, Activity, ProfileSummary } from '@/types/Profile';
import { AppliedJob } from '@/types/Jobs';
import { ProfileStat } from '@/types/Profile';
import { SkillProps } from '@/types/Profile';

export const mockedProfileSummary: ProfileSummary = {
    name: 'Company Name',
    college: 'Havard University',
    cgpa: '9.2',
    location: 'Mumbai',
    phone: '+9187794802021',
    email: 'example12@gmail.com',
    profileComplete: 100,
    docTypes: [
        { docType: 'certifications', done: true },
        { docType: 'Projects', done: false },
        { docType: 'Achievements', done: true },
        { docType: 'Profile Picture', done: true },
    ],
    avatar: '/assets/avatar-1.png',
};

export const mockedProfileData: ProfileData = {
    name: mockedProfileSummary.name,
    avatar: mockedProfileSummary.avatar,
    college: 'College Name',
    cgpa: 'CGPA',
    phone: '+9187794802021',
    email: 'example12@gmail.com',
    profileCompletion: 100,
    activities: [
        {
            user: 'Suraj Dev',
            status: 'Taking Exam',
            statusColor: 'text-red-400',
            detail: 'Fundamental Programming',
        },
        {
            user: 'Suraj Dev',
            status: 'Jobs Applied',
            statusColor: 'text-red-400',
            detail: 'Applied for Job in ASERIA',
        },
        {
            user: 'Suraj Dev',
            status: 'Scheduled Exams',
            statusColor: 'text-red-400',
            detail: 'Schedule exam for Fundamental Programming',
        },
    ],
};

export const chartLabels: string[] = [
    '04/01',
    '04/05',
    '04/10',
    '04/15',
    '04/20',
    '04/25',
    '04/20',
    '04/21',
];
export const chartData: number[] = [650, 700, 400, 605, 350, 700, 700];

export const mockedStats: ProfileStat[] = [
    {
        label: 'Potential Job',
        value: 13,
        change: '+14% Inc',
        color: 'bg-green-400',
        text: 'text-green-900',
    },
    {
        label: 'Matched Jobs',
        value: 9,
        change: '+14% Inc',
        color: 'bg-yellow-500',
        text: 'text-yellow-900',
    },
    {
        label: 'Applied Job',
        value: 8,
        change: '+14% Inc',
        color: 'bg-blue-500',
        text: 'text-blue-900',
    },
    {
        label: 'Search Appearance',
        value: 293,
        change: '+14% Inc',
        color: 'bg-red-500',
        text: 'text-red-900',
    },
];

export const employeeMockedStats: ProfileStat[] = [
  {
    label: "Jobs Posted",
    value: 5672,
    change: "+14% Inc",
    color: "jobs",
    text: "text-blue-500",
  },
  {
    label: "Shortlisted Candidates",
    value: 234,
    change: "+14% Inc",
    color: "shortlisted",
    text: "text-green-500",
  },
  {
    label: "Upcoming Interviews",
    value: 3567,
    change: "+14% Inc",
    color: "interviews",
    text: "text-yellow-500",
  },
  {
    label: "Candidates In-Review",
    value: 2145,
    change: "+14% Inc",
    color: "review",
    text: "text-red-500",
  },
];

export const technicalSkills: SkillProps[] = [
    { label: 'Mobile UI/UX Design', score: 3.7 },
    { label: 'Interaction Design', score: 4.0 },
    { label: 'Responsive Web Design', score: 4.1 },
    { label: 'User Research', score: 3.5 },
    { label: 'Information Architecture', score: 0.5 },
];

export const communicationSkills: SkillProps[] = [
    { label: 'Presentation', score: 3.7 },
    { label: 'Confidence and Tone', score: 4.0 },
    { label: 'Responsive Web Design', score: 4.1 },
    { label: 'Correctness & Relevance of Content', score: 3.5 },
    { label: 'Pace & Rhythm', score: 0.5 },
];

export const jobSpecificRoles: SkillProps[] = [
    { label: 'UI designer', score: 3.7 },
    { label: 'Graphic Designer', score: 4.0 },
    { label: 'Graphic Designer', score: 4.1 },
    { label: 'Web Designer', score: 3.5 },
    { label: 'UI/UX', score: 0.5 },
];

export const mockedCandidateData: Candidate[] = [
    {
        id: 1,
        name: 'Radhika Marimuthu',
        degree: 'BSC. Computer Science',
        country: 'India',
        gender: 'Female',
        rating: 4,
        ratingCount: 5,
        academicYear: '2023/2024',
        avatarUrl: 'https://example.com/avatar.jpg',
        selected: false,
    },
];

export const filters: { label: string; options: string[] }[] = [
    { label: 'Location', options: ['Mumbai', 'Delhi', 'Bangalore', 'AA'] },
    { label: 'Job Type', options: ['SE', 'EE', 'IT'] },
    { label: 'Industry', options: ['Tech', 'Finance', 'Marketing'] },
];
