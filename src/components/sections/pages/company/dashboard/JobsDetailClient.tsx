'use client';
import React from 'react';
import JobsCard from '@/components/student/Exam/search_jobs/jobsCard';
import FilterComponent from '@/components/student/Exam/search_jobs/JobDetailFilter';
import BasicInfo from '@/components/student/Exam/search_jobs/basicInfo';
import RolesResponsibilities from '@/components/student/Exam/search_jobs/rolesResponsblities';
import OfferDetails from '@/components/student/Exam/search_jobs/offerDetails';
import Questions from '@/components/student/Exam/search_jobs/questions';
import JobHeader from '@/components/student/Exam/search_jobs/JobHeader';
import Search from '@/components/student/Exam/search_jobs/Search';
import { useState } from 'react';
import { TabsBar } from '@/components/shared/TabsBar';
import { PostJobTabs as tabs } from '@/mocks/mockedData';
import { Text } from '@/components/ui/Text';
import avatar6 from '@/assets/avatars/avatar-6.png';
import { useSearchParams } from 'next/navigation';
import SuccessDialog from '@/components/shared/SuccessDialog';
export default function JobDetail() {
    const searchParams = useSearchParams();
    const revoke = searchParams.get('revoke') === 'true';
    const [revokeModal, setRevokeModal] = useState<boolean>(false);
    const [allJobs, setAllJobs] = useState<boolean>(true);
    const [revoked, setRevoked] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>('basicInfo');
    const handleRevoke = () => {
        setRevokeModal(!revokeModal);
        setRevoked(true);
    };
    return (
        <div>
            {revokeModal && (
                <div className="inset-0 fixed flex justify-center items-center backdrop-blur-sm z-[9999]">
                    <SuccessDialog
                        type="error"
                        title="Revoke"
                        message="Are you sure you want to revoke the application?"
                        primaryButtonText="No"
                        secondaryButtonText="Yes"
                        onPrimaryClick={() => setRevokeModal(!revokeModal)}
                        onSecondaryClick={handleRevoke}
                    />
                </div>
            )}

            <div className="flex px-2 p-6 w-full gap-5 text-white ">
                {!revoke && (
                    <div className="flex flex-col gap-4 mt-5 max-w-[400px]">
                        <Search />
                        <div>
                            <div className="flex flex-col">
                                <Text text='Related to "UI/UX Designer"' />
                            </div>
                            <JobsCard />
                        </div>
                    </div>
                )}
                <div className="flex-1 flex flex-col h-full mr-11  gap-9">
                    {!revoke && (
                        <div className="mb-2">
                            <FilterComponent />
                        </div>
                    )}
                    <div className="flex flex-col flex-1 w-full mr-11  h-full mt-2  ml-3 gap-9 bg-shadowBlue">
                        <JobHeader
                            logo={avatar6.src}
                            titile={''}
                            skills={''}
                            id={0}
                            appliedjob={revoke}
                            onRevoke={() => setRevokeModal(!revokeModal)}
                            revoked={revoked}
                        />
                        <div>
                            <div className="flex  justify-between bg-steelBlue border border-1 border-transparent  rounded-sm text-white ">
                                <div className=" flex gap-4 justify-between w-full px-10 rounded-lg mr-7">
                                    <TabsBar
                                        tabs={tabs}
                                        activeTab={activeTab}
                                        setActiveTab={setActiveTab}
                                    />
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                {activeTab === 'basicInfo' && <BasicInfo />}
                                {activeTab === 'roles' && <RolesResponsibilities />}
                                {activeTab === 'offer' && <OfferDetails />}
                                {activeTab === 'questions' && <Questions />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
