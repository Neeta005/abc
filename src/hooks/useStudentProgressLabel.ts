// Student Section
import useRegister from '@/stores/registrationStore';
export function useStudentProgressLabel() {
    const achievements = useRegister((state) => state.achievements);
    const projects = useRegister((state) => state.projects);
    const certifications = useRegister((state) => state.certifications);
    const basicInfoForm = useRegister((state) => state.basicInfoForm);
    const educationForm = useRegister((state) => state.educationForm);
    const selectedPhoto = useRegister((state) => state.selectedPhoto);
    const selectedFile = useRegister((state) => state.selectedFile);
    const phone = useRegister((state) => state.phone);
    const otp = useRegister((state) => state.otp);

    const stepsState = {
        photo: !!selectedPhoto,
        file: !!selectedFile,
        phone: !!phone,
        otp: otp.every((digit) => digit === '1'),
        basicInfo: !!basicInfoForm.fullName,
        education: !!educationForm.college,
        achievements: achievements.length > 0,
        projects: projects.length > 0,
        certifications: certifications.length > 0,
    };
    const steps = [
        { title: 'Upload Resume', completed: stepsState.file },
        { title: 'Phone Verification', completed: stepsState.phone },
        { title: 'Personal Info + Skills', completed: stepsState.basicInfo },
        { title: 'Educational Details', completed: stepsState.education },
        { title: 'Achievements', completed: stepsState.projects },
        { title: 'Projects', completed: stepsState.achievements },
    ];
    return steps;
}

// Company Section
import useCompanyStore from '@/stores/companyRegistrationStore';
export function useCompanyProgressLabel() {
    const details = useCompanyStore((state) => state.getDetailsStatus)();
    const address = useCompanyStore((state) => state.getCompanyStatus)();
    const recruiter = useCompanyStore((state) => state.getRecruiterStatus)();

    const steps = [
        { title: 'Company Info', completed: details },
        { title: 'Company Address', completed: address },
        { title: 'Recruiter Info', completed: recruiter },
    ];
    return steps;
}

// Job Posting Section
import useJobPosting from '@/stores/jobPostingStore';
export function useJobsProgressLabel() {
    const file = useRegister((state) => state.selectedFile);
    const workType = useJobPosting((state) => state.getWorkTypeStatus)();
    const companyInfo = useJobPosting((state) => state.getJobBasicInfoStatus)();
    const locationDetails = useJobPosting((state) => state.getWorkLocationStatus)();
    const responsibilities = useJobPosting((state) => state.getOffersResponsibilitiesStatus)();
    const questions = useJobPosting((state) => state.getQuestionsStatus)();
    const interview = useJobPosting((state) => state.getInterviewState)();
    const steps = [
        { title: 'Basic Details', completed: !!file },
        { title: 'Work Type', completed: workType },
        { title: 'Company Info', completed: companyInfo },
        { title: 'Location Details', completed: locationDetails },
        { title: 'Responsibilities', completed: responsibilities },
        { title: 'Questions Choice', completed: questions },
        { title: 'Interview Details', completed: interview },
    ];
    return steps;
}
