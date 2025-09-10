export const mockedEducations: {
    degree: string;
    school: string;
    date: string;
}[] = [
    {
        degree: 'BSC Computer Science',
        school: 'Havard University',
        date: 'April 2019 - June 2021',
    },
    {
        degree: 'BSC English Studies',
        school: 'Havard University',
        date: 'April 2019 - June 2021',
    },
    {
        degree: 'BSC English Studies',
        school: 'Havard University',
        date: 'April 2019 - June 2021',
    },
];

export const mockedBio: string = `cursus dui in Vestibulum ex lacus, facilisis Morbi dui lacus consectetur luctus enim. lorem. vel amet, non placerat non. Sed viverra vitae turpis quam Nullam fringilla commodo ipsum commodo ex. quis enim. sapien efficitur. adipiscing quam
sit Ut enim. ullamcorper vitae est. nibh Donec non nibh eget enim. tincidunt massa consectetur orci non, Donec odio urna placerat odio Cras volutpat faucibus ex Sed laoreet facilisis ac tincidunt Nam lorem. scelerisque non, hendrerit in celerisque id urna. nisi scelerisque lorem. at nisi Vestibulum Nullam Donec orci dignissim, faucibus Nam ipsum viverra viverra nisl. non ac nec non at fringilla quis Ut sapien leo. lobortis, dolor non viverra laoreet Nunc non elit eget Morbi viverra viverra tincidunt dolor consectetur quis elit. nulla, dui elementum orci nibh amet, lacus, ex urna. ipsum efficitur. elit Vestibulum Ut dignissim, ullamcorper malesuada Sed sollicitudin. tincidunt efficitur. felis, odio quam`;

export type MockedExperience = {
    title: string;
    date: string;
    description: string;
};

export const mockedExperiences: MockedExperience[] = [
    {
        title: 'Senior UI/UX Designer at AirBnB',
        date: 'April 2019 - June 2021 (2 years 3 months)',
        description:
            'nisl. quam odio placerat. Ut Cras In elit. Praesent dui. tempor non. fringilla at, nisl. nec venenatis vitae dolor porta Donec porta dignissim, viverra quis',
    },
    {
        title: 'Senior UI/UX Designer at AirBnB',
        date: 'April 2019 - June 2021 (2 years 3 months)',
        description:
            'nisl. quam odio placerat. Ut Cras In elit. Praesent dui. tempor non. fringilla at, nisl. nec venenatis vitae dolor porta Donec porta dignissim, viverra quis',
    },
    {
        title: 'Senior UI/UX Designer at AirBnB',
        date: 'April 2019 - June 2021 (2 years 3 months)',
        description:
            'nisl. quam odio placerat. Ut Cras In elit. Praesent dui. tempor non. fringilla at, nisl. nec venenatis vitae dolor porta Donec porta dignissim, viverra quis',
    },
];

export const mockedHeadline: string =
    'UXDesigner | Mobile & Web Apps | User-Centered Design | Product Design';

export type MockedSkill = {
    name: string;
    stars: number;
    percent: number;
    assessed: boolean;
};

export const mockedSkills: MockedSkill[] = [
    { name: 'Mobile UI/UX Design', stars: 4, percent: 90, assessed: true },
    { name: 'Interaction Design', stars: 4, percent: 40, assessed: true },
    { name: 'Responsive Web Design', stars: 4, percent: 90, assessed: true },
    { name: 'User Research', stars: 1.5, percent: 90, assessed: true },
    { name: 'Information Architecture', stars: 0, percent: 0, assessed: false },
];

export type MockedCompanyType = {
    label: string;
    description: string;
};

export const MockedCompanyTypes: MockedCompanyType[] = [
    {
        label: 'Startup',
        description:
            'A young company focused on innovation and rapid growth, often exploring new markets.',
    },
    {
        label: 'SME',
        description: 'Business with limited employees and turnover, catering to niche markets.',
    },
    {
        label: 'MNC',
        description:
            'A large organization operating in multiple countries with established global influence',
    },
];

type MockedRecentJob = {
    job: string;
    company: string;
    time: string;
    country: string;
    image?: string;
};

export const mockedRecentJobs: MockedRecentJob[] = [
    {
        image: '🙈',
        job: 'Frontend Engineer',
        company: 'Spotify',
        time: '1hr ago',
        country: 'Singapore',
    },
    {
        image: '🙈',
        job: 'Product Designer',
        company: 'Spotify',
        time: '6hr ago',
        country: 'Singapore',
    },
     {
        image: '🙈',
        job: 'ios Developer',
        company: 'San  Fransisco',
        time: '2hr ago',
        country: 'Singapore',
    },
     {
        image: '🙈',
        job: 'Product Designer',
        company: 'Spotify',
        time: '6hr ago',
        country: 'Singapore',
    },
];

// TypeScript type for a mocked tab
import TabsProps from '@/types/tab';
export const tabs: TabsProps[] = [
    { id: 'activeJobs', label: 'Active Jobs' },
    { id: 'completed', label: 'Completed' },
    { id: 'unfinished', label: 'Unfinised' },
];
export const editProfileTabs: TabsProps[] = [
    { id: 'basicInfo', label: 'Basic Info' },
    { id: 'address', label: 'Company Address' },
    { id: 'details', label: 'Company Details' },
    { id: 'recruiter', label: 'Recruiter Details' },
];

export const ApplicantTabs: TabsProps[] = [
    { id: 'all', label: 'All Responses' },
    { id: 'shortlisted', label: 'Shortlisted' },
    { id: 'rejected', label: 'Rejected' },
];

export const PostJobTabs: TabsProps[] = [
    { id: 'basicInfo', label: 'Basic Information' },
    { id: 'roles', label: 'Roles & Responsibilities' },
    { id: 'offer', label: 'Offer Details' },
    { id: 'questions', label: 'Questions' },
];
const defaultOfferDetails: {
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
} = {
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

interface workTypesProps {
    label: string;
    desc: string;
}

export const workTypes: workTypesProps[] = [
    {
        label: 'Freelancer',
        desc: 'This mode is for executing a specific job in a defined period. This has more clear requirement given for delivery to be done.',
    },
    {
        label: 'Hybrid',
        desc: 'This mode is to select a full time employee who would be working in Office and from home.',
    },
    {
        label: 'Remote',
        desc: 'This mode is to select a full time or. parttime employee who would be working from anywhere.',
    },
];

export type Activity = {
    name: string;
    action: string;
    job: string;
    time: string;
    tag: string;
    tagColor: string;
    avatarColor: string;
};

export const mockedActivities: Activity[] = [
    {
        name: 'Marvin McKinney',
        action: 'applied for the job',
        job: 'Product Designer',
        time: '10 mins ago',
        tag: 'Applying',
        tagColor: 'bg-[#1E40AF]',
        avatarColor: 'bg-[#065F46]',
    },
    {
        name: 'Jone Copper',
        action: 'Created new Account as a',
        job: 'Job Hunt',
        time: '4 hours ago',
        tag: 'Sign Up',
        tagColor: 'bg-[#065F46]',
        avatarColor: 'bg-[#78350F]',
    },
    {
        name: 'Jenny Wilson',
        action: 'applied for the job',
        job: 'Frontend Engineer',
        time: '10 mins ago',
        tag: 'Applying',
        tagColor: 'bg-[#1E40AF]',
        avatarColor: 'bg-[#1E3A8A]',
    },
];

export const mockedMonths: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
export type StatData = {
    month: string;
    applications: number;
    gap: number;
    shortlisted: number;
    rejected: number;
};

export const MockedStatData: StatData[] = [
    { month: 'Jan', applications: 60, gap: 5, shortlisted: 20, rejected: 20 },
    { month: 'Feb', applications: 55, gap: 5, shortlisted: 30, rejected: 15 },
    { month: 'Mar', applications: 30, gap: 5, shortlisted: 40, rejected: 10 },
    { month: 'Apr', applications: 35, gap: 5, shortlisted: 40, rejected: 15 },
    { month: 'May', applications: 60, gap: 5, shortlisted: 20, rejected: 20 },
    { month: 'Jun', applications: 45, gap: 5, shortlisted: 35, rejected: 20 },
    { month: 'Jul', applications: 55, gap: 5, shortlisted: 30, rejected: 15 },
    { month: 'Aug', applications: 65, gap: 5, shortlisted: 20, rejected: 15 },
    { month: 'Sep', applications: 55, gap: 5, shortlisted: 30, rejected: 15 },
    { month: 'Oct', applications: 30, gap: 5, shortlisted: 20, rejected: 30 },
    { month: 'Nov', applications: 50, gap: 5, shortlisted: 40, rejected: 10 },
    { month: 'Dec', applications: 25, gap: 5, shortlisted: 40, rejected: 15 },
];

export type StatColors = {
    applications: string;
    shortlisted: string;
    gap: string;
    rejected: string;
};

export const mockedStatColors: StatColors = {
    applications: '#50D1F6',
    shortlisted: '#F4A825',
    gap: '#111827',
    rejected: '#EA5636',
};

export type Meeting = {
    day: string;
    date: string;
    title: string;
    time: string;
    color: string;
};

export const mockedMeetings: Meeting[] = [
    {
        day: 'Mon',
        date: '10',
        title: 'Interview',
        time: '9:00 am – 11:30 am',
        color: 'bg-yellow-700',
    },
    {
        day: 'Thu',
        date: '08',
        title: 'Organizational meeting',
        time: '9:00 am – 11:30 am',
        color: 'bg-yellow-800',
    },
    {
        day: 'Fri',
        date: '11',
        title: 'Meeting with the manager',
        time: '9:00 am – 11:30 am',
        color: 'bg-yellow-600',
    },
];

export const mockedEmojis: string[] = ['😁', '😟', '💯', '👍', '❤️', '+'];

export type Participant = {
    name: string;
    avatar: string;
};

export const mockedParticipants: Participant[] = [
    { name: 'Meeti...', avatar: '/assets/avatar-1.png' },
    { name: 'Meeti...', avatar: '/assets/avatar-2.png' },
    { name: 'Meeti...', avatar: '/assets/avatar-3.png' },
    { name: 'Meeti...', avatar: '/assets/avatar-4.png' },
];

export const homeTabs: { id: string; label: string }[] = [
    { id: 'basicInfo', label: 'Basic Info' },
    { id: 'education', label: 'Education & Skills' },
    { id: 'cert', label: 'Certifications' },
    { id: 'achievement', label: 'Achievements' },
    { id: 'proj', label: 'Projects' },
];
