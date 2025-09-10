'use client';
import React, { useState, useRef } from 'react';
import { FaCertificate, FaExclamationCircle, FaTrophy } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';
import Certifications from '@/components/student/registration/Certifications/Certifications';
import { useClickOutside } from '@/hooks/useClickOutside';
import { mockedExperiences as mockedCertificates } from '@/mocks/mockedData';
import ProfileCard from '../ProfileCard';
import { VerticalBar } from '../ProfileVerticalBarSvg';

export default function ProfileCertifications({ view = false }: { view?: boolean }) {
    const [open, setOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    useClickOutside(modalRef, () => setOpen(false), open);

    function controlSetOpen() {
        setOpen(false);
    }

    const hasNoData = mockedCertificates.length === 0;

    return (
        <>
            <div className="bg-twilightBlue flex flex-row gap-5 rounded-2xl px-8 relative">
                <VerticalBar />

                <div className="h-[492px] w-full">
                    <div className="flex items-center gap-2 mb-6 ml-11">
                        <FaCertificate className="text-orange-500 text-3xl" />
                        <Text text="Certifications" size="3xl" weight="bold" />

                        {!view && hasNoData && (
                            <FaExclamationCircle className="text-pink-500 text-xl ml-2" />
                        )}
                        {!view && (
                            <Button
                                onClick={() => setOpen(true)}
                                className="ml-auto bg-gradient-to-r from-orange-400 to-pink-400 text-white font-semibold px-8 py-2 rounded-lg shadow hover:opacity-90 transition"
                            >
                                Add Certification
                            </Button>
                        )}
                    </div>

                    {hasNoData ? (
                        <p className="text-gray-400 ml-11">No achievements added yet.</p>
                    ) : (
                        mockedCertificates.map(({ title, date, description }, indx) => (
                            <ProfileCard
                                title={title}
                                key={indx}
                                date={date}
                                description={description}
                            />
                        ))
                    )}
                </div>
            </div>

            {open && (
                <div className="w-1/2 fixed left-1/2 top-1/2 z-50 bg-black bg-opacity-40 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-darkSlateBlue p-4 rounded-lg shadow-lg relative">
                        <Certifications
                            isProfile={true}
                            open={controlSetOpen}
                            handleModal={() => setOpen(!open)}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
