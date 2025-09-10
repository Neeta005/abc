'use client';
import BasicInfo from '@/components/student/Exam/search_jobs/basicInfo';
import RolesResponsibilities from '@/components/student/Exam/search_jobs/rolesResponsblities';
import OfferDetails from '@/components/student/Exam/search_jobs/offerDetails';
import Questions from '@/components/student/Exam/search_jobs/questions';
import { useState } from 'react';
import { TabsBar } from '@/components/shared/TabsBar';
import Link from 'next/link';
import { PostJobTabs } from '@/mocks/mockedData';
import { Button } from '@/components/ui/button';
import SuccessDialog from '@/components/shared/SuccessDialog';
import SmoothCornerFades from '@/components/shared/CornerFades';
export default function PostJobClient() {
    const [step, setStep] = useState<number>(0);
    const [successModal, setSuccessModal] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>('basicInfo');
   const handleClickBack = () => {
    if (step > 0) {
        setActiveTab(PostJobTabs?.[step - 1]?.id);
        setStep(step - 1);
    } else {
        // redirect to /post-job when on the first tab
        window.location.href = "/post-job";
    }
};

    const handleClickNext = () => {
        if (step < PostJobTabs?.length - 1) {
            setActiveTab(PostJobTabs?.[step + 1].id);
            setStep(step + 1);
        }
    };
    function renderNextButton(step: number) {
        const commonClasses =
            'border rounded-lg bg-gradient-to-r from-crimsonBerry to-warmOrange p-2 w-[105px] hover:opacity-70';

        if (step === 3) {
            return (
                <Link
                    href="#"
                    className={`${commonClasses} inline-block text-center`}
                    onClick={() => setSuccessModal(!successModal)}
                >
                    Post
                </Link>
            );
        }

        return (
            <Button className={commonClasses} onClick={handleClickNext}>
                Next
            </Button>
        );
    }
    return (
        <SmoothCornerFades>
            {successModal && (
                <div className="inset-0 fixed flex justify-center bg-white/15 items-center backdrop-blur-sm z-[9999]">
                    <SuccessDialog
                        className="flex-col"
                        type="success"
                        title="Posted Successfully"
                        message="Your job is Successfully Posted"
                        primaryButtonText="Edit Job"
                        secondaryButtonText="View Application"
                        phref="/edit-profile"
                        shref="/dashboard/posted-jobs"
                    />
                </div>
            )}
            <div className="flex flex-col mx-auto h-full  bg-shadowBlue mt-10">
                <div className="flex justify-between">
                    <div></div>
                    <div className="flex gap-2 justify-between px-5 py-4">
                        <Button
                            variant={'secondary'}
                            className="border rounded-lg bg-inherit text-white p-3 w-[105px] hover:opacity-70"
                            onClick={handleClickBack}
                        >
                            Back
                        </Button>

                        {renderNextButton(step)}
                    </div>
                </div>
                <div>
                    <div className="flex justify-between bg-steelBlue border border-1 border-transparent px-3 rounded-sm m-4 text-white ml-[0.5px] mr-[0.5px] ">
                        <TabsBar
                            tabs={PostJobTabs}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            setStep={setStep}
                        />
                    </div>
                    {activeTab === 'basicInfo' && <BasicInfo />}
                    {activeTab === 'roles' && <RolesResponsibilities />}
                    {activeTab === 'offer' && <OfferDetails />}
                    {activeTab === 'questions' && <Questions />}
                </div>
            </div>
        </SmoothCornerFades>
    );
}
