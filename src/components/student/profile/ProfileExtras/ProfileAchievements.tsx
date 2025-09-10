'use client';
import React, { useState, useRef } from 'react';
import { FaTrophy, FaExclamationCircle } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';
import AchievementsForm from '@/components/student/registration/Achievment/AchievementsForm';
import { useClickOutside } from '@/hooks/useClickOutside';
import { mockedExperiences } from '@/mocks/mockedData';
import ProfileCard from '../ProfileCard';
import { VerticalBar } from '../ProfileVerticalBarSvg';

export default function ProfileAchievements({ view = false }: { view?: boolean }) {
    const [open, setOpen] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);
    useClickOutside(modalRef, () => setOpen(false), open);

    const hasNoData = mockedExperiences.length === 0;

    function controlSetOpen() {
        setOpen(false);
    }

    return (
        <>
            <div className="bg-twilightBlue flex flex-row gap-5 rounded-2xl px-8  relative">
                <VerticalBar />

                <div className="h-[492px] w-full">
                    <div className="flex items-center gap-2 mb-6 ml-11">
                        <FaTrophy className="text-orange-500 text-3xl" />
                        <Text
                            as="span"
                            text="Achievements"
                            className="text-white text-3xl mt-2 font-bold"
                        />
                        {!view && hasNoData && (
                            <FaExclamationCircle className="text-pink-500 text-xl ml-2" />
                        )}
                        {!view && (
                            <Button
                                onClick={() => setOpen(true)}
                                className="ml-auto bg-gradient-to-r from-orange-400 to-pink-400 text-white font-semibold px-8 py-2 rounded-lg shadow hover:opacity-90 transition"
                            >
                                Add Achievement
                            </Button>
                        )}
                    </div>

                    {mockedExperiences?.map(({ title, date, description }, indx) => (
                        <ProfileCard
                            title={title}
                            key={indx}
                            date={date}
                            description={description}
                        />
                    ))}
                </div>
            </div>

            {open && (
                <div className="w-[50%] fixed left-1/2 top-1/2 z-50 bg-black bg-opacity-40 -translate-x-1/2 -translate-y-1/2">
                    <div
                        ref={modalRef}
                        className="bg-darkSlateBlue p-4 rounded-lg shadow-lg relative"
                    >
                        <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 rounded-full w-6 h-6"
                            onClick={() => setOpen(false)}
                        >
                            ×
                        </Button>
                        <AchievementsForm isProfile={true} open={controlSetOpen} />
                    </div>
                </div>
            )}
        </>
    );
}
