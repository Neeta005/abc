'use client';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { DocTypeIndicator } from '@/components/student/profile/ProfileDocTypeIndicator';
import { mockedProfileSummary } from '@/mocks/mockedProfileData';
import useRegister from '@/stores/registrationStore';
import { EditSvg } from '@/components/shared/deleteEdit';
import { MapPin, BriefcaseBusiness, MessageCircle, Globe } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

export default function ProfileSummary() {
    const setStep = useRegister((state) => state.setStep);

    return (
        <aside className="bg-steelBlue rounded-2xl p-0 shadow-lg min-w-[251px]  flex flex-col items-center relative">
            <div className="w-full bg-duskRosePink rounded-t-2xl flex flex-col items-center pt-6 pb-2 relative h-[83px]">
                <div className="absolute top-3 right-3 rounded-full p-2 hover:bg-white/10">
                    <Link href="/edit-profile ">
                        <img
        src="\icons\Frame 1618874043.png" // path from your public folder
        alt="Edit"
        className="size-8"
    />
                    </Link>
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
                <Text as="span" className="flex items-center justify-center">
                    <Text as="div" className="text-xs mt-3 mx-auto text-white inline">
                        <MapPin className="p-0 mx-auto mr-2 w-3 max-h-[15px] inline" />
                        {mockedProfileSummary?.location}
                    </Text>
                </Text>
            </div>
          <div className="flex flex-col mx-auto gap-3 w-full px-12 mb-4 text-white">
    {/* Globe Row */}
    <div className="flex items-center gap-2">
        <div className="w-[22px] h-[22px] flex items-center justify-center">
            <Globe className="w-full h-full" />
        </div>
        <Text as="span" text="Fresher" className="text-[10px]" />
    </div>

    {/* Phone Row */}
    <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
            <div className="w-[22px] h-[22px] flex items-center justify-center">
                <FaPhoneAlt className="w-full h-full" />
            </div>
            <Text as="span" text={mockedProfileSummary?.phone} className="text-[10px]" />
        </div>
        <div className="flex items-center gap-2">
              <div className="flex items-center justify-center pl-2">
    <img
        src="\icons\Frame 1618874043.png" // path from your public folder
        alt="Edit"
        className="size-5"
    />
</div>
            <FaCheckCircle className="text-green-400 w-5 h-5" />
        </div>
    </div>

    {/* Email Row */}
    <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
            <div className="w-[22px] h-[22px] flex items-center justify-center">
                <FaEnvelope className="w-full h-full" />
            </div>
            <Text as="span" text={mockedProfileSummary?.email} className="text-[10px]" />
        </div>
        <div className="flex items-center gap-2">
         <div className="flex items-center justify-center pl-2">
    <img
        src="\icons\Frame 1618874043.png" // path from your public folder
        alt="Edit"
        className="size-5"
    />
</div>

            <FaCheckCircle className="text-green-400 w-5 h-5" />
        </div>
    </div>
</div>

         <div className="shrink-0">
    <div className="w-[250px] max-h-[403px] bg-cobaltNight rounded-[10px] p-4 mb-4 border border-softSlateGray shadow-custom">
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
                    className={`bg-green-400 h-[9px] rounded-full flex items-center justify-center`}
                    style={{ width: `${mockedProfileSummary?.profileComplete}%` }}
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

        {/* Updated docTypes section */}
        <div className="bg-twilightBlue text-[10px] rounded-lg p-3 mt-7 mx-auto flex flex-col gap-2">
            {['About', 'Social', 'Profile Picture']?.map((docType, idx) => (
                <DocTypeIndicator key={docType + idx} docType={docType} done={true} />
            ))}
        </div>
    </div>
</div>

            <Button
                asChild
                onClick={() => {
                    setStep(6);
                }}
                className="text-nowrap w-full px-2 bg-gradient-to-r from-lightSalmon to-coralRed text-white font-semibold py-2 rounded-lg mb-6 mt-2 shadow hover:opacity-70 transition"
            >
                <Link href="/edit-profile ">Complete Profile</Link>
            </Button>
            <div className="fixed bottom-8 right-8 flex flex-col items-end z-50">
                <div className="relative mb-2">
                    <div className="bg-white rounded-lg px-4 py-2 shadow flex items-center">
                        <Text as="span" className="text-gray-800 text-sm">
                            Hi there{' '}
                            <Text as="span" role="img" aria-label="wave">
                                👋
                            </Text>
                        </Text>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="ml-2 text-gray-400 hover:text-gray-600 text-lg p-0 h-auto"
                        >
                            ×
                        </Button>
                    </div>
                </div>
                <Button className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    <MessageCircle className="h-7 w-7 text-white" />
                </Button>
            </div>
        </aside>
    );
}
