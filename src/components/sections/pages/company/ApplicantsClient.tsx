'use client';
import React, { useRef, useState } from 'react';
import TableActions from '@/components/company/profile/table-actions';
import Profile from '@/components/company/profile/applicants/ApplicantProfile';
import { ApplicantTabs } from '@/mocks/mockedData';
import SidebarFilters from '@/components/company/profile/applicants/SidebarFilters';
import StatusButtons from '@/components/company/profile/applicants/StatusButtons';
import SortShowControls from '@/components/company/profile/applicants/SortShowControls';
import AddEvent from '@/components/company/profile/add-new-event';
import { useClickOutside } from '@/hooks/useClickOutside';
import JobTable from '@/components/company/profile/job-table';
import { rows, CandidateColumns } from '@/mocks/mockedJobs';
import CommentBox from '@/components/company/profile/comment-box';
import { Text } from '@/components/ui/Text';
import CompetencyReport from '@/components/student/Exam/Comptency-Report/CompetencyReport';
import { TabsBar } from '@/components/shared/TabsBar';
const ApplicantsClient = () => {
    const [viewAll, setViewAll] = useState<boolean>(true);
    const [activeTab, setActiveTab] = useState<string>('all');
    const [selectedGender, setSelectedGender] = useState<string>('');
    const [selectedPassOut, setSelectedPassOut] = useState<string>('');
    const [openEvent, setOpenEvent] = useState<boolean>(false);
    const [openComment, setOpenComment] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleClickEvent = () => {
        setOpenEvent(!openEvent);
    };

    const handleClickComment = () => {
        setOpenComment(!openComment);
    };

    const modalRef = useRef<HTMLDivElement>(null);

    useClickOutside(
        modalRef,
        () => {
            setOpenEvent(!openEvent);
        },
        openEvent
    );

    return (
        <div className="bg-twilightBlue flex w-full min-h-screen">
            {openEvent && (
                <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm">
                    <AddEvent onClick={handleClickEvent} eventRef={modalRef} />
                </div>
            )}
            {openModal && (
                <div className="fixed inset-0 z-[9999] flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-40">
                    <div className="bg-deepNavyBlue rounded-2xl w-[600px] h-[80vh] overflow-y-auto p-6">
                        <CompetencyReport onClick={() => setOpenModal(!openModal)} />
                    </div>
                </div>
            )}
            {openComment && (
                <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm">
                    <CommentBox onClick={() => setOpenComment(!openComment)} />
                </div>
            )}
            <div className="flex gap-9 w-full">
                <SidebarFilters
                    selectedGender={selectedGender}
                    setSelectedGender={setSelectedGender}
                    selectedPassOut={selectedPassOut}
                    setSelectedPassOut={setSelectedPassOut}
                />
                <div className="flex-1 flex flex-col gap-4 min-w-0 py-4">
                    <div className="flex  items-center bg-steelBlue text-white px-4 py-2 rounded-lg">
                        <TabsBar
                            tabs={ApplicantTabs}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    </div>
                    <StatusButtons />
                    <div className="flex flex-wrap items-center justify-between bg-steelBlue text-white px-4 py-3 rounded-lg text-sm">
                        <div className="text-white">
                            <Text>Showing</Text> <span className="font-semibold">27</span> Responses
                        </div>
                        <SortShowControls
                            selectedGender={selectedGender}
                            setSelectedGender={setSelectedGender}
                        />
                    </div>
                    <TableActions viewAll={viewAll} setViewAll={setViewAll} />
                    {!viewAll ? (
                        <div className="min-w-full flex flex-col gap-3">
                            <Profile
                                onViewCompetency={() => setOpenModal(!openModal)}
                                onEventClick={handleClickEvent}
                                onAddComment={handleClickComment}
                            />
                        </div>
                    ) : (
                        <JobTable columns={CandidateColumns} rows={rows} applicant={true} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ApplicantsClient;
