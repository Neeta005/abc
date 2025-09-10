'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProfileBanner from '@/components/student/profile/ProfileBanner';
import ProfileHeadline from '@/components/student/profile/ProfileHeadline';
import ProfileSkills from '@/components/student/profile/ProfileSkills';
import ProfileExperience from '@/components/student/profile/ProfileExperience';
import ProfileEducation from '@/components/student/profile/ProfileEducation';
import {
    ProfileCertifications,
    ProfileProjects,
    ProfileAchievements,
} from '@/components/student/profile/ProfileExtras/ProfileExtras';
import ProfileSummary from '@/components/student/profile//ProfileSummary';
import TableActions from '@/components/company/profile/table-actions';
import CompetencyReport from '@/components/student/Exam/Comptency-Report/CompetencyReport';
import ProfileBio from '@/components/shared/ProfileBio';
export default function StudentProfileClient() {
    const searchParams = useSearchParams();
    const profile = searchParams.get('company') === 'true';
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <div>
            <div className="bg-twilightBlue flex flex-col w-full overflow-x-auto pr-10">
                {openModal && (
                    <div className="fixed inset-0 z-[9999] flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-40">
                        <div className="bg-deepNavyBlue rounded-2xl w-[600px] h-[80vh] overflow-y-auto p-6">
                            <CompetencyReport onClick={() => setOpenModal(!openModal)} />
                        </div>
                    </div>
                )}

                <div className="flex flex-row gap-4 ml-3 py-6">
                    <div className="shadow-lg">
                        <ProfileSummary
                            isProfile={true}
                            view={profile}
                            onCompetency={() => setOpenModal(!openModal)}
                        />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col">
                        {profile && (
                            <TableActions
                                isProfile={profile}
                                viewAll={false}
                                setViewAll={() => {}}
                            />
                        )}
                        <ProfileBanner />
                        <ProfileHeadline />
                        <ProfileBio view={profile} />
                        <ProfileSkills view={profile} />
                        <ProfileEducation view={profile} />
                        <ProfileExperience view={profile} />
                        <ProfileCertifications view={profile} />
                        <ProfileProjects view={profile} />
                        <ProfileAchievements view={profile} />
                    </div>
                </div>
            </div>
        </div>
    );
}
