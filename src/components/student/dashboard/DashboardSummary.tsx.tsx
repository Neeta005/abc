import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { EditSvg } from '../../shared/deleteEdit';
import useRegister from '@/stores/registrationStore';
import { mockedProfileData as profileData, mockedProfileSummary } from '@/mocks/mockedProfileData';
import Link from 'next/link';
import Image from 'next/image';
import { Text } from '@/components/ui/Text';
import DashboardCard from './DashboardCard';

export default function DashboardSideBar({ isProfile = false }: { isProfile?: boolean }) {
    const setStep = useRegister((state) => state.setStep);

    return (
        <aside className="bg-steelBlue rounded-2xl shadow-lg min-w-[227px] flex flex-col items-center relative">
            <div className="w-full bg-duskRosePink rounded-t-2xl h-[100px] relative flex justify-end items-start p-3">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[10%] w-24 h-24 rounded-full overflow-hidden z-10">
                    <Image
                        src={profileData?.avatar}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                        width={96}
                        height={96}
                    />
                </div>
                <Link href="/student/home">
                    <EditSvg btnClassname="border-0 bg-inherit" />
                </Link>
            </div>
            <div className="text-white text-center mt-16 mb-4">
                <Text text={mockedProfileSummary?.name} weight="bold" size="xl" />
                <Text text={mockedProfileSummary?.college} size="sm" className="text-gray-300" />
                <Text text={mockedProfileSummary?.cgpa} size="xs" className="text-gray-400" />
            </div>
            <div className="border-[0.5px] border-gray-300 w-full mb-10"></div>
            <div className="flex flex-col mx-auto gap-9 w-full px-12 mb-4">
                <div className="flex items-center justify-between gap-2 text-white">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-lg" />
                        <Text as="span" text={mockedProfileSummary?.phone} size="base" />
                    </div>
                    <div className="flex justify-center gap-2 items-center">
                        <EditSvg btnClassname="w-5 h-5" />
                        <FaCheckCircle className="text-green-400 w-5 h-5 ml-auto" />
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2 text-white">
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-lg" />
                        <Text as="span" text={mockedProfileSummary?.email} size="base" />
                    </div>
                    <div className="flex justify-center gap-2 items-center">
                        <EditSvg btnClassname="w-5 h-5" />
                        <FaCheckCircle className="text-green-400 w-5 h-5 ml-auto" />
                    </div>
                </div>
            </div>
            <div className="min-w-[197px] flex flex-col gap-4 justify-between min-h-[122px] bg-cobaltNight rounded-[10px] p-4 mb-6 border border-softSlateGray">
                <div className="flex items-center justify-between mb-1">
                    <Text as="span" weight="semibold" size="base">
                        {profileData.profileCompletion}%{' '}
                        <Text as="span" size="xs" weight="normal" className="text-gray-400">
                            Profile Complete
                        </Text>
                    </Text>
                    <FaCheckCircle className="text-green-400 w-4 h-4" />
                </div>
                <Text size="xs" className="mb-2">
                    Now you have more chances of getting hired!
                </Text>
                <div className="flex items-center gap-2 mb-4">
                    <Text text="0%" size="xs" className="text-gray-400" />
                    <div className="flex-1 h-3 bg-gray-700 rounded-full overflow-hidden">
                        <div
                            className={`bg-green-400 h-[9px] rounded-full text-center text-white text-xs leading-[9px] w-[${profileData.profileCompletion}%]`}
                        >
                            {profileData.profileCompletion}%
                        </div>
                    </div>
                    <Text text="100%" size="xs" className="text-gray-400" />
                </div>
            </div>
            <div className="w-full px-4">
                <Text
                    as="h3"
                    text="Activities Around You"
                    size="lg"
                    weight="semibold"
                    className="mb-2"
                />
                {!isProfile && (
                    <div className="flex flex-col gap-3 bg-cobaltNight py-4 px-3">
                        {profileData?.activities?.map(
                            ({ user, statusColor, detail, status }, indx) => (
                                <DashboardCard
                                    key={indx}
                                    user={user}
                                    status={status}
                                    statusColor={statusColor}
                                    detail={detail}
                                />
                            )
                        )}
                    </div>
                )}
            </div>
        </aside>
    );
}
