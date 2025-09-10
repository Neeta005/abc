import { ExamRowProps } from '@/types/ExamTypes';
import { CourseProps } from '@/types/ExamTypes';
export const mockedExamBoardData: ExamRowProps[] = [
    {
        name: 'Graphic Design Fundamentals',
        marks: 0,
        section: 'Default',
        time: '1:45 Minutes',
        difficulty: 'Average',
        status: 'Correct',
        review: true,
    },
    {
        name: 'Digital Illustration',
        marks: 0,
        section: 'Default',
        time: '1:45 Minutes',
        difficulty: 'Average',
        status: 'Correct',
        review: true,
    },
    {
        name: 'UX/UI Design Principles',
        marks: 0,
        section: 'Default',
        time: '1:45 Minutes',
        difficulty: 'Average',
        status: 'Wrong',
        review: true,
    },
    {
        name: 'History of Design Essay',
        marks: 0,
        section: 'Default',
        time: '1:45 Minutes',
        difficulty: 'Average',
        status: 'Wrong',
        review: true,
    },
    {
        name: 'Product Design Prototype',
        marks: 0,
        section: 'Default',
        time: '1:45 Minutes',
        difficulty: 'Average',
        status: 'Wrong',
        review: true,
    },
    {
        name: 'Color Theory and Application',
        marks: 0,
        section: 'Default',
        time: '1:45 Minutes',
        difficulty: 'Average',
        status: 'Wrong',
        review: true,
    },
    {
        name: 'Visual Communication Design',
        marks: 0,
        section: 'Default',
        time: '1:45 Minutes',
        difficulty: 'Average',
        status: 'Wrong',
        review: true,
    },
];

export const mockedCourses: CourseProps[] = [
    {
        course: 'Fundamentals of Programming',
        subject: 'Networking',
        scheduledTime: '12:40 PM',
        scheduledDay: '2023-01-03',
        status: 'Not Started',
    },
    {
        course: 'Web Development',
        subject: 'Frontend',
        scheduledTime: '3:00 PM',
        scheduledDay: '2023-02-15',
        status: 'In Progress',
    },
];

export const mockedExamCard: string[] = [
    'Graphic Design',
    'User Interface Design',
    'User Experience Design',
    'UX Research',
    'Front-End Developer',
];

export const mockedScoreData = [
    {
        label: 'A1',
        range: '90% - 100%',
        description: 'Excellent',
        color: '#4B6FFF',
        descColor: '#4B6FFF',
    },
    {
        label: 'A2',
        range: '70% - 80%',
        description: 'Good',
        color: '#E05A2B',
        descColor: '#E05A2B',
    },
    {
        label: 'B1',
        range: '50% - 60%',
        description: 'Average',
        color: '#3CB371',
        descColor: '#3CB371',
    },
    {
        label: 'B2',
        range: '30% - 40%',
        description: 'Blow Average',
        color: '#FFC300',
        descColor: '#FFC300',
    },
    {
        label: 'C1',
        range: '10% - 20%',
        description: 'Fail',
        color: '#E53935',
        descColor: '#E53935',
    },
];

export const mockedQuestionsStatus = [
    { number: 1, status: 'bookmark' },
    { number: 2, status: 'attempted' },
    { number: 3, status: 'skip' },
    ...Array.from({ length: 27 }, (_, i) => ({ number: i + 4, status: 'none' })),
];

export const mockedStatusColors: Record<string, string> = {
    bookmark: 'bg-brand-3b82f6 text-white',
    attempted: 'bg-brand-22c55e text-white',
    skip: 'bg-brand-ef4444 text-white',
    none: 'bg-transparent text-white border border-white',
};

export const mockedStatusLabels = [
    { color: '#3B82F6', label: 'Book mark' },
    { color: '#22C55E', label: 'Attempted' },
    { color: '#EF4444', label: 'Skip' },
];

export const mockedExamTerms: string[] = [
    'Camera and mic',
    'Windows machine',
    'good internet connectivity (preferred to have broadband/5g)',
];

export const mockedSubjectTopics: { title: string; subtopics: string[] }[] = [
    {
        title: 'Graphic Designing',
        subtopics: ['UI/UX Design', 'Design System', 'AI Design'],
    },
    { title: 'Fundamental Physics', subtopics: [] },
    { title: 'Programming', subtopics: [] },
    { title: 'Mathematics', subtopics: [] },
    { title: 'AI', subtopics: [] },
];

import avatar1 from '@/assets/avatars/avatar-1.png';
export const mockedStudentInfo = {
    name: 'Raj Anadkat',
    studentId: 'TIPS5682',
    field: 'Computer Science',
    avatar: avatar1,
};

export const mockedExamInfo = {
    declared: 'Result Declared on 12:30 AM | 22 September 2023',
    title: 'Score Card | Vetkai Labs Certified Exam [SUBJECT] (Attempt 1)',
    time: '12:40 P.M',
    date: '03 Jan 2023',
    status: 'Pass',
    course: 'B.Tech Spcl. in Health Informatics',
    subject: 'Networking',
    totalMarks: 50,
    passingPercentage: 80,
    totalScore: '32/50',
    grade: 'A1',
};

export const mockedSubjectScores = [
    { subject: 'Graphic Design', grade: 'A1', color: '#2341C7' },
    { subject: 'Web Development', grade: 'A2', color: '#F25C2E' },
    { subject: 'Basic Computers', grade: 'B1', color: '#1BC47D' },
    { subject: 'Basic Science', grade: 'B2', color: '#F2C94C' },
];
export const mockedCompatibilityData: { label: string; value: string; status: string }[] = [
    { label: 'Operating System', value: 'Windows', status: 'Compatible' },
    { label: 'Browser', value: 'Chrome', status: 'Compatible' },
    { label: 'Browser Version', value: '135.0.0.0 Safari/537.36', status: 'Compatible' },
    { label: 'Screen Resolution', value: '1600×1000', status: 'Compatible' },
    { label: 'Exam Server Connectivity', value: '18.01 Mbps', status: 'Compatible' },
    { label: 'Server Status', value: '200 Ok', status: 'Compatible' },
    { label: 'Javascript', value: 'Enabled', status: 'Compatible' },
    { label: 'Microphone', value: 'Enabled', status: 'Compatible' },
    { label: 'Webcam', value: 'Enabled', status: 'Compatible' },
];