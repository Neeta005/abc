'use client';
import React, { useState, useRef } from 'react';
import { mockedEducations } from '@/mocks/mockedData';
import EducationForm from '@/components/student/registration/EducationDetails/EducationDetailsForm';
import { DeleteSvg, EditSvg } from '@/components/shared/deleteEdit';
import { VerticalBar } from './ProfileVerticalBarSvg';
import { useClickOutside } from '@/hooks/useClickOutside';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

export default function ProfileEducation({ view = false }: { view?: boolean }) {
    const [open, setOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const controlSetOpen = () => setOpen(false);

    useClickOutside(modalRef, () => setOpen(false), open);
    return (
        <div className="bg-twilightBlue flex p-8 mt-8">
            <div className="mr-3">
                <VerticalBar />
            </div>

            <div className="w-full">
                <div className="flex items-center gap-2 mb-6">
                    <Text text="Education" size="3xl" weight="bold" className="mb-3 ml-3" />
                    {!view && (
                        <Button
                            className="max-w-[178px] max-h-[35px] ml-auto bg-gradient-to-r from-orange-400 to-pink-400 text-white font-semibold px-8 py-2 rounded-lg shadow hover:opacity-90 transition"
                            onClick={() => setOpen(true)}
                        >
                            Add Education
                        </Button>
                    )}
                </div>

                {mockedEducations?.map(({ degree, school, date }, indx) => (
                    <div key={indx} className="relative mb-2">
                        <div className="bg-shadowSlate p-2 pb-0 shadow flex flex-col h-[76px]">
                            <div className="flex justify-between items-center relative">
                                <div className="pl-2 pr-2 pt-1">
                                    <Text text={degree} weight="bold" size="xl" className="block" />
                                    <Text
                                        text={school}
                                        size="base"
                                        className="text-gray-300 block"
                                    />
                                </div>
                                <Text
                                    as="span"
                                    text={date}
                                    className="text-warmOrange text-[12px] font-semibold whitespace-nowrap pt-0 flex gap-3"
                                />
                           
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
                    <div
                        ref={modalRef}
                        className="bg-cobaltNight p-4 rounded-lg shadow-lg relative w-[90%] max-w-2xl"
                    >
                        <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 rounded-full w-6 h-6"
                            onClick={() => setOpen(false)}
                        >
                            ×
                        </Button>
                        <EducationForm isProfile={true} open={controlSetOpen} />
                    </div>
                </div>
            )}
        </div>
    );
}
