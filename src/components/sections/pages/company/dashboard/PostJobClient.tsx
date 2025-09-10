'use client';
import { useState, useRef } from 'react';
import FileUpload from '@/components/shared/FileUpload';
import OffersResponsibilitiesSection from '@/components/company/addJobs/offersresponsibilitiessection';
// import InterviewLocationSection from '@/components/shared/locationComponent';
import WorkTypeSection from '@/components/company/addJobs/worktypesection';
import AddJobForm from '@/components/company/addJobs/addjobform';
import QuestionsFilter from '@/components/company/addJobs/questionsFilterCandidates';
import { AddMultipleChoiceQs } from '@/components/company/addJobs/addquestionsection';
import Header from '@/components/shared/Header';
import QuestionTypeSelector from '@/components/company/addJobs/questionTypeSelector';
import { useRouter } from 'next/navigation';
import people from '@/assets/banners/bg-people.png';
import InterviewDetail from '@/components/company/addJobs/interviewDetails';
import ArrowNavigation from '@/components/shared/pageSections/arrowNavigation';
import StepContainer from '@/components/shared/pageSections/stepContainer';
import ProgressSideBar from '@/components/shared/pageSections/progressSideBar';
import { useClickOutside } from '@/hooks/useClickOutside';
import SmoothCornerFades from '@/components/shared/CornerFades';
import location from '@/components/company/addJobs/location';
const DashboardClient = () => {
    const router = useRouter();
    const steps = [
        QuestionsFilter,
        FileUpload,
        AddJobForm,
        // InterviewLocationSection,
        WorkTypeSection,
        location,
        OffersResponsibilitiesSection,
        AddMultipleChoiceQs,
        InterviewDetail,
    ];

    const modalRef = useRef<HTMLDivElement>(null);
    const [showQuestionsModal, setShowQuestionsModal] = useState<boolean>(false);
    const handleFinish = () => {
        router.push('/review-posted-job');
    };

    const handleShowModal = () => {
        setShowQuestionsModal(!showQuestionsModal);
    };
    useClickOutside(modalRef, handleShowModal, showQuestionsModal);
    return (
        <SmoothCornerFades zValue={999}>
            <div className="mt-6 z-[9999]">
                <Header />

                <div className="bg-shadowBlue h-full">
                    {showQuestionsModal && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center  bg-grayLightTransparent/35  backdrop-blur-[1px] first-letter:">
                            <QuestionTypeSelector />
                        </div>
                    )}
                    <div className="absolute top-[110px] w-full">
                        <div
                            className="absolute right-0 bg-no-repeat bg-right opacity-100 h-screen w-[550px]  bg-[length:103%_103%]"
                            style={{
                                backgroundImage: `url(${people.src})`,
                            }}
                        ></div>
                    </div>

                    <div className="flex max-w-4xl relative gap-11">
                        <StepContainer
                            type="jobs"
                            components={steps}
                            onFinish={handleFinish}
                            onClick={handleShowModal}
                        />
                        <ProgressSideBar company={true} job={true} />
                        <ArrowNavigation length={steps?.length} student={false} />
                    </div>
                </div>
            </div>
        </SmoothCornerFades>
    );
};
export default DashboardClient;
