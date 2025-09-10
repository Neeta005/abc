'use client';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { DocTypeIndicator } from './ProfileDocTypeIndicator';
import { mockedProfileSummary } from '@/mocks/mockedProfileData';
import useRegister from '@/stores/registrationStore';
import { MapPin, BriefcaseBusiness, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { EditSvg } from '../../shared/deleteEdit';
import Image from 'next/image';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import DashboardCard from '../dashboard/DashboardCard';
import { mockedProfileData as profileData } from '@/mocks/mockedProfileData';
export default function ProfileSummary({
    view = false, //view for companys perspective
    onCompetency,
    isProfile = false,
}: {
    isProfile?: boolean;
    view?: boolean;
    onCompetency?: () => void;
}) {
    const setStep = useRegister((state) => state.setStep);

    return (
        <aside className="bg-twilightBlue rounded-2xl p-0 shadow-lg min-w-[251px]  flex flex-col items-center relative">
            <div className="w-full bg-duskRosePink rounded-t-2xl flex flex-col items-center pt-6 pb-2 relative h-[83px]">
                <div className="absolute top-3 right-3 rounded-full p-2 hover:bg-white/10">
                    {!view && (
                        <Link href="/student/home">
                            <EditSvg btnClassname="border-0 bg-inherit" />
                        </Link>
                    )}
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 translate-y-[5%] z-10 bottom-[-48px]">
                    <div className="w-24 h-24 flex items-center justify-center overflow-hidden">
                        <Image
                            src={mockedProfileSummary?.avatar}
                            alt="Profile"
                            width={96}
                            height={96}
                            className="max-w-[96px] max-h-[96px] object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="text-white text-center mt-16 mb-4">
                <Text text={mockedProfileSummary?.name} weight="bold" size="xl" />
                <Text text={mockedProfileSummary?.college} size="sm" className="text-gray-300" />
                <Text text={mockedProfileSummary?.cgpa} size="xs" className="text-gray-400" />
                <Text as="span" className="flex items-center justify-center">
                    <Text as="div" className="text-xs mt-3 mx-auto text-white inline">
                        <MapPin className="p-0 mx-auto mr-2 w-3 max-h-[15px] inline" />
                        {mockedProfileSummary?.location}
                    </Text>
                </Text>
            </div>
            <div className="flex flex-col mx-auto gap-3 w-full px-12 mb-4">
                <div className="flex items-center gap-2 text-white">
                    <BriefcaseBusiness className="w-[26px] h-[22.87px]" />
                    <Text as="span" text="Fresher" className="text-[10px]" />
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-1 text-white">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-lg" />
                        <Text
                            as="span"
                            text={mockedProfileSummary?.phone}
                            className="text-[10px]"
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
                            className="text-[10px]"
                        />
                    </div>
                    <div className="flex justify-center gap-2 items-center">
                        <EditSvg btnClassname="w-5 h-5" />
                        <FaCheckCircle className="text-green-400 w-5 h-5 ml-auto" />
                    </div>
                </div>
            </div>
            <div className="shrink-0">
                <div className="w-[195px] max-h-[403px] bg-cobaltNight rounded-[10px] p-4 mb-4 border border-softSlateGray shadow-custom">
                    <div className="flex items-center justify-between mb-1">
                        <Text as="span" size="base" weight="semibold">
                            {mockedProfileSummary.profileComplete}%{' '}
                            <Text as="span" className="text-gray-400 text-[12px] ml-2">
                                Profile Complete
                            </Text>
                        </Text>
                        <Text as="span" className="text-pink-400 text-xl font-bold">
                            !
                        </Text>
                    </div>
                    <Text size="xs" className="mb-2">
                        Finish it to improve your chances of getting hired!
                    </Text>
                    <div className="flex items-center gap-2 mb-2">
                        <Text text="0%" size="xs" className="text-gray-400 mt-8" />
                        <div className="flex-1 h-3 mt-8 bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className={`bg-green-400 h-[9px] rounded-full flex items-center justify-center text-xs text-white w-[${mockedProfileSummary?.profileComplete}%]`}
                            >
                                <Text
                                    as="span"
                                    text={`${mockedProfileSummary?.profileComplete}%`}
                                    size="xs"
                                    className="ml-auto mr-auto"
                                />
                            </div>
                        </div>
                        <Text text="100%" size="xs" className="text-gray-400 mt-8" />
                    </div>
                    <div className="bg-twilightBlue text-[10px] rounded-lg p-3 mt-7 mx-auto flex flex-col gap-2">
                        {mockedProfileSummary?.docTypes?.map(({ done, docType }, idx) => (
                            <DocTypeIndicator key={docType + idx} docType={docType} done={done} />
                        ))}
                    </div>
                </div>
            </div>
            {!view && (
                <Link href="/public/register">
                    <Button
                        asChild
                        onClick={() => {
                            setStep(6);
                        }}
                        className="text-nowrap w-full text-xs  bg-gradient-to-r from-lightSalmon to-coralRed text-white font-semibold py-2 rounded-lg mb-6 mt-2 shadow hover:opacity-70 transition"
                    >
                        Complete Profile
                    </Button>
                </Link>
            )}
            {view && <Button onClick={onCompetency}>Competency Report</Button>}
            {!isProfile && (
                <>
                    {' '}
                    <Text className="text-sm mb-2 mr-12">Activities Around You</Text>
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
                </>
            )}
        </aside>
    );
}
