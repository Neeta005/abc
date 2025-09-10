'use client';
import React, { useRef, useState } from 'react';
import { CalendarIcon, Search } from 'lucide-react';
import dayjs from 'dayjs';
import { CalendarPopup } from '@/components/shared/CalendarPopup';
import CertificateCard from './CertificateCard';
import useRegister from '@/stores/registrationStore';
import { useStudentProgressStore } from '@/stores/progressHooks/useStudentProgressStore';
import { useHandleValueChange } from '@/hooks/useHandleValueChange';
import studentRegistration from '@/types/studentRegistration';
import useHandleBlur from '@/hooks/useHandleBlur';
import companyRegistration from '@/types/companyRegistration';
import { JobPostingProgress } from '@/types/JobPostingProgress';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CertificationsProps {
    isProfile?: boolean;
    open?: () => void;
    isRegistration?: boolean;
    handleModal?: () => void;
}

export default function Certifications({
    handleModal,
    isProfile,
    open,
    isRegistration = true,
}: CertificationsProps) {
    const { incrementDone: increament, decrementDone: decreament } = useStudentProgressStore();
    const useCalendarRef = useRef<HTMLButtonElement>(null);
    const certifications = useRegister((state) => state.certifications);
    const setCertifications = useRegister((state) => state.setCertifications);
    const certificationForm = useRegister((state) => state.certificationForm);
    const setCertificationForm = useRegister((state) => state.setCertificationForm);
    const isCalendarOpen = useRegister((state) => state.isCertificationCalendarOpen);
    const setIsCalendarOpen = useRegister((state) => state.setIsCertificationCalendarOpen);

    const toggleCalendar = () => {
        setIsCalendarOpen(!isCalendarOpen);
    };

    const handleDateChange = (date: string) => {
        if (date) increament('certDate');
        else decreament('certDate');
        setCertificationForm({ ...certificationForm, certDate: date });
        setIsCalendarOpen(false);
    };

    const handleValueChange = useHandleValueChange(
        setCertificationForm,
        decreament as (
            field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );
    const handleOnBlur = useHandleBlur(
        increament as (
            field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );
    const addCertification = () => {
        if (
            certificationForm.certificationTitle &&
            certificationForm.certIssuedBy &&
            certificationForm.certDate
        ) {
            setCertifications([...certifications, certificationForm]);
            setCertificationForm({ certificationTitle: '', certIssuedBy: '', certDate: '' });
        }
    };

    const handleEdit = (idx: number) => {
        const selected = certifications[idx];
        setCertificationForm(selected);
        const updated = certifications.filter((_, i) => i !== idx);
        setCertifications(updated);
    };

    const handleDelete = (idx: number) => {
        const updated = certifications.filter((_, i) => i !== idx);
        setCertifications(updated);
    };

    return (
        <div className="w-full rounded-lg relative">
            {isRegistration && (
                <Text
                    as="h2"
                    text="Certifications"
                    className="text-[30px] font-bold mb-6 text-white"
                />
            )}
            {open && (
                <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 rounded-full w-6 h-6"
                    onClick={handleModal}
                >
                    ×
                </Button>
            )}
            <div className="space-y-4 mb-6">
                <div className="mt-12">
                    {!isProfile && (
                        <div className="mb-6">
                            {certifications?.map((cert, idx) => (
                                <CertificateCard
                                    key={idx}
                                    {...cert}
                                    idx={idx}
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}
                                />
                            ))}
                        </div>
                    )}
                    <Text
                        as="label"
                        text="Certification"
                        className="block  text-base font-medium text-white"
                    />
                    <div className="flex items-center max-w-[681px] relative   text-white rounded  py-3">
                        <Input
                            type="text"
                            name="certificationTitle"
                            value={certificationForm.certificationTitle}
                            onBlur={handleOnBlur}
                            onChange={handleValueChange}
                            placeholder="Title"
                            className="max-w-[681px]  rounded-[8px] border border-red-500 bg-transparent px-4 py-2 text-white placeholder:text-gray-400 "
                        />
                        <Search size={18} className="text-white absolute right-7" />
                    </div>
                </div>
                <div>
                    <Text
                        as="label"
                        text="Issued By"
                        className="block  text-base font-medium text-white"
                    />
                    <div className="flex items-center relative max-w-[681px]  rounded text-white  py-2">
                        <Input
                            type="text"
                            name="certIssuedBy"
                            value={certificationForm.certIssuedBy}
                            onChange={handleValueChange}
                            onBlur={handleOnBlur}
                            placeholder="Issued by"
                            className="max-w-[681px]  rounded-[8px] border border-red-500 bg-transparent px-4 py-2 text-white placeholder:text-gray-400 "
                        />
                        <Search size={18} className="text-white absolute right-7" />
                    </div>
                </div>
                <div>
                    <div className="w-[30%]">
                        <Text as="label" text="Issued Date" className="block text-white mb-1" />
                        <div className="relative   rounded-xl">
                            <Button
                                ref={useCalendarRef}
                                type="button"
                                variant="outline"
                                onClick={toggleCalendar}
                                className="w-[237px]  rounded-[8px] border-red-400 bg-transparent px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none text-left flex justify-between items-center"
                            >
                                <Text as="span" className="relative z-10">
                                    {certificationForm.certDate
                                        ? dayjs(certificationForm.certDate).format('MMM DD, YYYY')
                                        : 'Select date'}
                                </Text>
                                <CalendarIcon />
                            </Button>
                            <CalendarPopup
                                onChange={(e) => {
                                    handleDateChange(dayjs().format('YYYY-MM-DD'));
                                }}
                                value={
                                    certificationForm.certDate
                                        ? dayjs(certificationForm.certDate)
                                        : null
                                }
                                open={isCalendarOpen}
                                onClose={() => setIsCalendarOpen(false)}
                                anchorRect={useCalendarRef}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <Button
                        type="button"
                        className="bg-gradient-to-r from-peachGold to-softCoral text-white px-6 py-2 rounded hover:bg-[#ff6a3d] transition"
                        onClick={() => {
                            addCertification();
                            if (open) open();
                        }}
                    >
                        Add Certification
                    </Button>
                </div>
            </div>
        </div>
    );
}
