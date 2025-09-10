'use client';
import React, { useRef, useState, ChangeEvent } from 'react';
import useRegister from '@/stores/registrationStore';
import Link from 'next/link';
import people from '@/assets/banners/bg-people.png';

import PhotoComponent from '@/components/student/registration/PhotoComponent';
import RegisterCompanyDetailsForm from '@/components/company/register/RegisterCompanyDetailsForm';
import RegisterRecruiterForm from '@/components/company/register/RegisterRecruiterForm';
import RegisterCompanyForm from '@/components/company/register/RegisterCompanyForm';
import LocationSection from '@/components/shared/locationComponent';
import { editProfileTabs } from '@/mocks/mockedData';
import { ErrorMessage } from '@/components/shared/errorsection/ErrorMessage';
import { OtpMessage } from '@/components/shared/errorsection/OtpMessage';
import RegistrationSuccessCard from '@/components/student/registration/RegistrationCards/RegistrationSuccessCard';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import ProgressCircle from '@/components/shared/ProgressCircle';
import { useCompanyProgressStore } from '@/stores/progressHooks/companyStore';

export default function EditProfileClient() {
    const [activeTab, setActiveTab] = useState<String>('basicInfo');
    const [showSuccess, setShowSuccess] = useState<boolean>(false);

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
    } = useCompanyProgressStore();

    return (
        <div className="min-h-screen w-full bg-twilightBlue">
            <div className="flex w-full min-h-screen">
                <div className="flex-1 text-white overflow-x-auto">
                    <div className="min-h-screen bg-shadowBlue text-white">
                        <div className="flex">
                            <div className="flex-1 relative overflow-hidden">
                                <div className="absolute top-[110px] right-0 z-0 pointer-events-none">
                                    <div
                                        className="bg-no-repeat bg-right min-h-screen h-[900px] w-[550px] bg-[length:103%_103%]"
                                        style={{ backgroundImage: `url(${people.src})` }}
                                    />
                                </div>

                                {error && (
                                    <div className="mt-6 px-8 z-10 relative">
                                        <ErrorMessage error={error} setError={setError} />
                                        <OtpMessage otpMessage={otpMessage} />
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
                                                variant="outline"
                                                className="border-gray-500 text-sm flex justify-center text-gray-300 px-6 py-2 rounded h-[44px] w-[83.53125px]"
                                            >
                                                <Link href={'/student/profile'}>Cancel</Link>
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="w-full flex-1">
                                        <div className="bg-steelBlue flex gap-7 w-full justify-between py-2 px-4 rounded-lg mb-8 ">
                                            {editProfileTabs?.map(({ id, label }) => (
                                                <Button
                                                    key={id}
                                                    variant="ghost"
                                                    onClick={() => setActiveTab(id)}
                                                    className={`px-4 py-2 text-[12px] rounded-[5px] font-semibold ${
                                                        activeTab === id
                                                            ? 'border border-midnightBlue text-warmOrange'
                                                            : 'text-white border border-transparent'
                                                    } focus:outline-none`}
                                                >
                                                    {label}
                                                </Button>
                                            ))}
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="bg-inherit px-6 rounded-lg min-h-screen shadow-md md:w-[800px] xl:[1100px] overflow-hidden  overflow-y-hidden">
                                                {activeTab === 'basicInfo' && (
                                                    <div className="flex flex-col gap-2">
                                                        <PhotoComponent
                                                            handlePhotoSelect={handlePhotoSelect}
                                                            selectedPhoto={selectedPhoto}
                                                            handlePhotoChange={handlePhotoChange}
                                                            fileInputRef={fileInputRef}
                                                        />
                                                        {activeTab === 'basicInfo' && (
                                                            <RegisterCompanyDetailsForm
                                                                registration={false}
                                                            />
                                                        )}
                                                    </div>
                                                )}
                                                {activeTab === 'address' && (
                                                    <LocationSection registration={false} />
                                                )}
                                                {activeTab === 'recruiter' && (
                                                    <RegisterRecruiterForm registration={false} />
                                                )}
                                                {activeTab === 'details' && (
                                                    <RegisterCompanyForm registration={false} />
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
