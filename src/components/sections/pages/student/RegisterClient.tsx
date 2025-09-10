'use client';
import Header from '@/components/shared/Header';
import FileUpload from '@/components/shared/FileUpload';
import PhotoUpload from '@/components/student/registration/PhotoUpload';
import PhoneNumberInput from '@/components/student/registration/PhoneNumberInput';
import OTPVerification from '@/components/student/registration/OTPVerification';
import BasicInfoForm from '@/components/student/registration/BasicInfoForm';
import EducationDetailsForm from '@/components/student/registration/EducationDetails/EducationDetailsForm';
import AchievementsForm from '@/components/student/registration/Achievment/AchievementsForm';
import ProjectsForm from '@/components/student/registration/ProjectsForm';
import Certifications from '@/components/student/registration/Certifications/Certifications';
import { useEffect, useState } from 'react';
import RegistrationSuccessCard from '@/components/student/registration/RegistrationCards/RegistrationSuccessCard';
import people from '@/assets/banners/bg-people.png';
import StepContainer from '@/components/shared/pageSections/stepContainer';
import ProgressSideBar from '@/components/shared/pageSections/progressSideBar';
import ArrowNavigation from '@/components/shared/pageSections/arrowNavigation';
import useRegister from '@/stores/registrationStore';

import validateBasicInfoForm from '@/components/student/registration/Validation/BasicInfoValidation';
import validateEducationForm from '@/components/student/registration/Validation/EducationShema';
import { ErrorMessage } from '@/components/shared/errorsection/ErrorMessage';
import { ValidationResult } from '@/types/validation';
import { useDismissError } from '@/hooks/useDismissError';
import SmoothCornerFades from '@/components/shared/CornerFades';
export default function Register() {
    const [showSuccess, setShowSuccess] = useState(false);
    const error = useRegister((state) => state.error);
    const setError = useRegister((state) => state.setError);
    const educations = useRegister((state) => state.educations);
    const steps = [
        PhotoUpload,
        FileUpload,
        PhoneNumberInput,
        OTPVerification,
        BasicInfoForm,
        EducationDetailsForm,
        AchievementsForm,
        ProjectsForm,
        Certifications,
    ];

    const validations: Array<() => ValidationResult> = [
        () => ({ success: true, message: '' }),
        () => ({ success: true, message: '' }),
        () => ({ success: true, message: '' }),
        () => ({ success: true, message: '' }),
        () => validateBasicInfoForm(useRegister.getState().basicInfoForm),
        () => validateEducationForm(useRegister.getState().educationForm, !!educations),
        () => ({ success: true, message: '' }),
        () => ({ success: true, message: '' }),
        () => ({ success: true, message: '' }),
    ];
    useDismissError();
    const handleFinishRegister = () => {
        setShowSuccess(!showSuccess);
    };
    return (
        <SmoothCornerFades>
            <Header />
            <div className="mt-20 bg-charcoalBlue">
                {showSuccess && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm">
                        <RegistrationSuccessCard />
                    </div>
                )}

                <div className="absolute top-[110px] w-full ">
                    <div
                        className="absolute right-0 bg-no-repeat bg-right h-[900px] w-[550px] bg-[length:103%_103%]"
                        style={{ backgroundImage: `url(${people.src})` }}
                    ></div>
                </div>
                <div />

                {error && <ErrorMessage error={error} setError={setError} />}

                <div className="flex w-full relative gap-11">
                    <StepContainer
                        components={steps}
                        validations={validations}
                        onFinish={handleFinishRegister}
                        type={'student'}
                    />
                    <ProgressSideBar company={false} job={false} />
                    <ArrowNavigation
                        length={steps.length}
                        student={true}
                        validations={validations}
                    />
                </div>
            </div>
        </SmoothCornerFades>
    );
}
