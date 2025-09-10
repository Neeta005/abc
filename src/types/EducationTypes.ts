export interface EducationCardProps {
    edu: {
        college: string;
        course: string;
        cgpa: string;
        year: string;
        skills?: string[];
    };
    idx: number;
    handleEdit: (idx: number) => void;
    handleDelete: (idx: number) => void;
    collapse?: boolean;
    setCollapse?: (collapse: boolean) => void;
}

export interface CertificateCardProps {
    certificationTitle: string;
    certIssuedBy: string;
    certDate: string;
    idx: number;
    handleEdit: (idx: number) => void;
    handleDelete: (idx: number) => void;
}
export interface AchievmentCardProps {
    achievementTitle?: string;
    achievmentFromDate?: string;
    achievementToDate?: string;
    achievementDescription?: string;
    from?: string;
    to?: string;

    idx: number;
    handleEdit: (idx: number) => void;
    handleDelete: (idx: number) => void;
}
export interface ProjectAchivmentProps extends AchievmentCardProps {
    projectTitle?: string;
    projFromDate?: string;
    projToDate?: string;
    projectDescription?: string;
    from?: string;
    to?: string;

    idx: number;
    handleEdit: (idx: number) => void;
    handleDelete: (idx: number) => void;
}
