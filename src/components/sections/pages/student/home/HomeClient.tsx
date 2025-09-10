'use client';
import React, { useRef, useState, ChangeEvent } from 'react';
import useRegister from '@/stores/registrationStore';
import PhotoComponent from '@/components/student/registration/PhotoComponent';
import BasicInfoForm from '@/components/student/registration/BasicInfoForm';
import EducationDetailsForm from '@/components/student/registration/EducationDetails/EducationDetailsForm';
import AchievementsForm from '@/components/student/registration/Achievment/AchievementsForm';
import ProjectsForm from '@/components/student/registration/ProjectsForm';
import Certifications from '@/components/student/registration/Certifications/Certifications';
import RegistrationSuccessCard from '@/components/student/registration/RegistrationCards/RegistrationSuccessCard';
import people from '@/assets/banners/bg-people.png';
import { ErrorMessage } from '@/components/shared/errorsection/ErrorMessage';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import { homeTabs as tabs } from '@/mocks/mockedData';
import Link from 'next/link';
import ProgressCircle from '@/components/shared/ProgressCircle';
import { useStudentProgressStore } from '@/stores/progressHooks/useStudentProgressStore';
import { useDismissError } from '@/hooks/useDismissError';
export default function EditStudentProfileClient() {
    const [activeTab, setActiveTab] = useState('basicInfo');
    const [showSuccess, setShowSuccess] = useState(false);

    const selectedPhoto = useRegister((state) => state.selectedPhoto);
    const error = useRegister((state) => state.error);
    const otpMessage = useRegister((state) => state.otpMessage);
    const setError = useRegister((state) => state.setError);
    const setSelectedPhoto = useRegister((state) => state.setSelectedPhoto);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handlePhotoSelect = () => {
        setError('');
        fileInputRef.current?.click();
    };

    useDismissError();

    const handlePhotoChange = ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
        setError('');
        const file = files?.[0];
        if (!file) return;
        if (!(file.type === 'image/jpeg' || file.type === 'image/png')) {
            setError('Only JPG or PNG files are allowed.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (ev) => {
            setSelectedPhoto(ev.target?.result as string);
        };
        reader.onerror = () => {
            setError('Failed to read the file. Please try again.');
        };
        reader.readAsDataURL(file);
    };
    const {
        data: { done: basicProgress },
    } = useStudentProgressStore();

    return (
        <div className="min-h-screen w-full bg-twilightBlue">
            <div className="flex w-full min-h-screen">
                <div className="flex-1 text-white overflow-x-auto">
                    <div className="min-h-screen bg-shadowBlue text-white">
                        <div className="flex">
                            <div className="flex-1 relative overflow-hidden">
                                <div className="absolute top-[110px] right-0 z-0 pointer-events-none">
                                    <div
                                        className="bg-no-repeat bg-right h-[900px] w-[550px] bg-[length:103%_103%]"
                                        style={{ backgroundImage: `url(${people.src})` }}
                                    />
                                </div>

                                {error && (
                                    <div className="mt-6 px-8 z-10 relative">
                                        <ErrorMessage error={error} setError={setError} />
                                    </div>
                                )}

                                <div className="px-10 relative z-10 pt-12">
                                    <div className="flex items-center justify-between mb-6">
                                        <Text
                                            as="h1"
                                            text="Edit Profile"
                                            className="text-[30px] font-bold"
                                        />
                                        <div className="flex gap-4">
                                            <Button
                                                asChild
                                                className=" text-white text-sm px-6 py-2 rounded bg-gradient-to-r from-crimsonBerry to-warmOrange hover:opacity-70"
                                            >
                                                <Link href={'/student/profile'}>Save Changes</Link>
                                            </Button>
                                            <Button
                                                asChild
                                                variant="default"
                                                className="bg-inherit border border-white rounded-lg text-sm flex justify-center text-gray-300 px-6 py-2  h-[44px] w-[83.53125px]"
                                            >
                                                <Link href={'/student/profile'}>Cancel</Link>
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="bg-steelBlue flex gap-7 w-full  py-2 px-4 rounded-lg mb-8 ">
                                            {tabs?.map(({ id, label }) => (
                                                <Button
                                                    key={id}
                                                    variant="ghost"
                                                    onClick={() => setActiveTab(id)}
                                                    className={`px-4 py-2 text-[12px] rounded-[5px] font-semibold ${
                                                        activeTab === id
                                                            ? 'border border-midnightBlue text-warmOrange bg-midnightBlue'
                                                            : 'text-white border border-transparent'
                                                    } focus:outline-none`}
                                                >
                                                    {label}
                                                </Button>
                                            ))}
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="bg-inherit px-6 rounded-lg shadow-md md:w-[700px] xl:[1000px] overflow-hidden min-h-full overflow-y-hidden">
                                                {activeTab === 'basicInfo' && (
                                                    <div className="flex flex-col gap-2">
                                                        <PhotoComponent
                                                            handlePhotoSelect={handlePhotoSelect}
                                                            selectedPhoto={selectedPhoto}
                                                            handlePhotoChange={handlePhotoChange}
                                                            fileInputRef={fileInputRef}
                                                        />
                                                        <BasicInfoForm isRegistration={false} />
                                                    </div>
                                                )}
                                                {activeTab === 'education' && (
                                                    <EducationDetailsForm isRegistration={false} />
                                                )}
                                                {activeTab === 'achievement' && (
                                                    <AchievementsForm isRegistration={false} />
                                                )}
                                                {activeTab === 'cert' && (
                                                    <Certifications isRegistration={false} />
                                                )}
                                                {activeTab === 'proj' && (
                                                    <ProjectsForm isRegistration={false} />
                                                )}
                                            </div>
                                            <ProgressCircle total={basicProgress} />
                                        </div>
                                    </div>
                                </div>

                                {showSuccess && (
                                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur">
                                        <RegistrationSuccessCard />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
