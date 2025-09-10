import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { DeleteSvg, EditSvg } from '@/components/shared/deleteEdit';
import useRegister from '@/stores/registrationStore';
import { mockedProfileData as profileData, mockedProfileSummary } from '@/mocks/mockedProfileData';
import Link from 'next/link';
import Image from 'next/image';
import { Text } from '@/components/ui/Text';
import ProfileSidebarCard from './ProfileSidebarCard';
export default function DashboardSideBar() {
    const setStep = useRegister((state) => state.setStep);

    return (
        <aside className="bg-steelBlue rounded-2xl min-w-[227px] flex flex-col items-center relative ">
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
            </div>
            <div className="border-[0.5px] border-gray-300 w-full mb-10"></div>
            <div className="flex flex-col mx-auto gap-9 w-full px-12 mb-4">
                <div className="grid grid-cols-[1fr_auto] gap-3 text-white">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-lg" />
                        <Text
                            as="span"
                            text={mockedProfileSummary?.phone}
                            className="text-[14px]"
                        />
                    </div>
                    <div className="flex justify-center gap-2 items-center">
                        <EditSvg btnClassname="w-5 h-5" />
                        <FaCheckCircle className="text-green-400 w-5 h-5 ml-auto" />
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-lg" />
                        <Text
                            as="span"
                            text={mockedProfileSummary?.email}
                            className="text-[14px]"
                        />
                    </div>
                    <div className="flex justify-center gap-2 items-center">
                        <EditSvg btnClassname="w-5 h-5" />
                        <FaCheckCircle className="text-green-400 w-5 h-5 ml-auto" />
                    </div>
                </div>
            </div>

            <div className="w-full">
                <Text
                    as="h3"
                    text="Activities Around You"
                    size="lg"
                    weight="semibold"
                    className="mb-2"
                />
                <div className="flex flex-col gap-3 bg-cobaltNight py-4 px-3">
                    {profileData?.activities?.map(
                        ({ user, statusColor, detail, status }, index) => (
                            <ProfileSidebarCard
                                user={user}
                                status={status}
                                statusColor={statusColor}
                                detail={detail}
                            />
                        )
                    )}
                </div>
            </div>
        </aside>
    );
}
