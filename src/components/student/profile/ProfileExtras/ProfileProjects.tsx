'use client';
import React, { useState, useRef } from 'react';
import { FaExclamationCircle, FaGraduationCap } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';
import ProjectsForm from '@/components/student/registration/ProjectsForm';
import { useClickOutside } from '@/hooks/useClickOutside';
import { mockedExperiences as mockedProjects } from '@/mocks/mockedData';
import ProfileCard from '../ProfileCard';
import { VerticalBar } from '../ProfileVerticalBarSvg';

export default function ProfileProjects({ view = false }: { view?: boolean }) {
    const [open, setOpen] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);
    useClickOutside(modalRef, () => setOpen(false), open);

    function controlSetOpen() {
        setOpen(false);
    }

    const hasNoData = !mockedProjects || mockedProjects.length === 0;

    return (
        <>
            <div className="bg-twilightBlue flex flex-row gap-5 rounded-2xl px-8  relative">
                <VerticalBar />

                <div className="h-[492px] w-full">
                    <div className="flex items-center justify-between mb-6 ml-11">
                        <div className="flex items-center gap-3">
                            <FaGraduationCap className="text-orange-500 text-3xl" />
                            <Text text="Projects" size="3xl" weight="bold" />
                            {!view && hasNoData && (
                                <FaExclamationCircle className="text-pink-500 text-xl ml-2" />
                            )}
                        </div>

                        {!view && (
                            <Button
                                onClick={() => setOpen(true)}
                                className="bg-gradient-to-r from-orange-400 to-pink-400 text-white font-semibold px-8 py-2 rounded-lg shadow hover:opacity-90 transition"
                            >
                                Add Project
                            </Button>
                        )}
                    </div>

                    {hasNoData ? (
                        <p className="text-gray-400 ml-11">No projects added yet.</p>
                    ) : (
                        mockedProjects.map(({ title, date, description }, indx) => (
                            <ProfileCard
                                key={indx}
                                title={title}
                                date={date}
                                description={description}
                            />
                        ))
                    )}
                </div>
            </div>

            {open && (
                <div className="w-[50%] fixed left-1/2 top-1/2 z-50 bg-black bg-opacity-40 -translate-x-1/2 -translate-y-1/2">
                    <div
                        ref={modalRef}
                        className="bg-darkSlateBlue p-4 rounded-lg shadow-lg relative"
                    >
                        <ProjectsForm isProfile={true} open={controlSetOpen} />
                    </div>
                </div>
            )}
        </>
    );
}
