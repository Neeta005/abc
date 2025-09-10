'use client';
import { useRef } from 'react';
import useRegister from '@/stores/registrationStore';
import PhotoComponent from './PhotoComponent';
import { Text } from '@/components/ui/Text';
import { useStudentProgressStore } from '@/stores/progressHooks/useStudentProgressStore';
export default function PhotoUpload() {
    const selectedPhoto = useRegister((state) => state.selectedPhoto);
    const setSelectedPhoto = useRegister((state) => state.setSelectedPhoto);
    const error = useRegister((state) => state.photoError);
    const setError = useRegister((state) => state.setPhotoError);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { incrementDone: increament } = useStudentProgressStore();

    const handlePhotoSelect = () => {
        setError(null);
        fileInputRef.current?.click();
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(null);
        const file = e.target.files?.[0];
        if (!file) return;
        if (!(file.type === 'image/jpeg' || file.type === 'image/png')) {
            setError('Only JPG or PNG files are allowed.');
            return;
        }
        // if (file.size > 2 * 1024 * 1024) {
        //   setError("File size should not exceed 2MB.");
        //   return;
        // }
        const reader = new FileReader();
        reader.onload = (ev) => {
            setSelectedPhoto(ev.target?.result as string);
            increament('photoUpload');
        };
        reader.onerror = () => {
            setError('Failed to read the file. Please try again.');
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="text-white">
            <Text as="p" text="Register" className=" font-bold text-3xl" />
            <div className="flex flex-col items-center mt-6 bg-steelBlue rounded-2xl px-2 max-w-[654px] h-[512px] ">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <PhotoComponent
                        handlePhotoSelect={handlePhotoSelect}
                        selectedPhoto={selectedPhoto}
                        handlePhotoChange={handlePhotoChange}
                        fileInputRef={fileInputRef}
                    />
                    <Text className="text-white text-center text-sm font-[500]">
                        At least 800x800 px
                        <br />
                        recommended. JPG or PNG is allowed
                    </Text>
                    {error && (
                        <Text text={error} className="text-red-400 mt-2 text-sm font-semibold" />
                    )}
                </div>
            </div>
        </div>
    );
}
