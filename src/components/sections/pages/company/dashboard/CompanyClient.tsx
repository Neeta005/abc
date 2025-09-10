'use client';
import React, { useState } from 'react';
import Header from '@/components/shared/Header';
import RegisterCompanyDetailsForm from '@/components/company/register/RegisterCompanyDetailsForm';
import RegisterRecruiterForm from '@/components/company/register/RegisterRecruiterForm';
import RegisterCompanyForm from '@/components/company/register/RegisterCompanyForm';
import LocationSection from '@/components/shared/locationComponent';
import people from '@/assets/banners/bg-people.png';
import ArrowNavigation from '@/components/shared/pageSections/arrowNavigation';
import ProgressSideBar from '@/components/shared/pageSections/progressSideBar';
import StepContainer from '@/components/shared/pageSections/stepContainer';
import SuccessDialog from '@/components/shared/SuccessDialog';
import { useRouter } from 'next/navigation';
import SmoothCornerFades from '@/components/shared/CornerFades';
const CompanyRegisterClient = () => {
    const [successModal, setSuccessModal] = useState<boolean>(false);
    const router = useRouter();
    const steps = [
        RegisterCompanyDetailsForm,
        RegisterRecruiterForm,
        RegisterCompanyForm,
        LocationSection,
    ];
    return (
        <SmoothCornerFades>
            <div className="bg-charcoalBlue">
                {successModal && (
                    <div className="inset-0 fixed flex justify-center items-center backdrop-blur-sm z-[9999]">
                        <SuccessDialog
                            type="success"
                            title="Thank You"
                            message="Your Registration is Successfully completed"
                            primaryButtonText="Review"
                            secondaryButtonText="Go to Dashboard"
                            phref="/dashboard/profile"
                            shref="/dashboard/1"
                        />
                    </div>
                )}
                <div className="absolute top-[110px] w-full">
                    <div
                        className="absolute right-0 bg-no-repeat bg-right opacity-100 h-[900px] w-[550px] bg-[length:103%_103%]"
                        style={{ backgroundImage: `url(${people.src})` }}
                    ></div>
                </div>

                <Header />

                <div className="flex max-w-4xl relative gap-11 ">
                    <StepContainer
                        components={steps}
                        onFinish={() => setSuccessModal(!successModal)}
                        type={'company'}
                    />
                    <ProgressSideBar company={true} />
                    <ArrowNavigation length={steps.length} />
                </div>
            </div>
        </SmoothCornerFades>
    );
};

export default CompanyRegisterClient;
