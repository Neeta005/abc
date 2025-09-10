export interface ExamRowProps {
    name?: string;
    marks?: number;
    section?: string;
    time?: string;
    difficulty?: string;
    review?: boolean;
    status?: string;
}

export interface CourseProps {
    course: string;
    subject: string;
    scheduledTime: string;
    scheduledDay: string;
    status: string;
}

export interface ScoreData {
    label: string;
    range: string;
    description: string;
    color: string;
    descColor: string;
}

export interface ScoreTableRow {
    topic: string;
    questions: number;
    correct: number;
    incorrect: number;
    skipped: number;
    grade: {
        label: string;
        color: string;
        bg: string;
    };
}

export interface ScoreTableSectionProps {
    sectionTitle: string;
    icon?: React.ReactNode;
    rows: ScoreTableRow[];
}

type StudentInfo = {
    name: string;
    studentId: string;
    field: string;
    avatar: string;
};

type ExamInfo = {
    declared: string;
    title: string;
    time: string;
    date: string;
    status: string;
    course: string;
    subject: string;
    totalMarks: number;
    passingPercentage: number;
    totalScore: string;
    grade: string;
};

type SubjectScore = {
    subject: string;
    grade: string;
    color: string;
};
export type RulesExamData = {
    exam: {
        name: string;
        subject: string;
        questions: number;
    };
    advice: string[];
    notSupported: string[];
    agreement: string;
};
