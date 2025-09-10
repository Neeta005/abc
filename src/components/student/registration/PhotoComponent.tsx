import React from 'react';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

type PhotoComponentProps = {
    handlePhotoSelect: () => void;
    handlePhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fileInputRef: React.RefObject<HTMLInputElement>;
    selectedPhoto?: string | null;
};

export default function PhotoComponent({
    handlePhotoSelect,
    handlePhotoChange,
    fileInputRef,
    selectedPhoto,
}: PhotoComponentProps) {
    return (
        <div className="flex flex-col items-center justify-center w-[30%]">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-6">
                {selectedPhoto ? (
                    <Image
                        src={selectedPhoto}
                        alt="Profile"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <Text text="👤" className="text-5xl text-gray-400" />
                )}
            </div>
            <Input
                type="file"
                accept="image/jpeg,image/png"
                ref={fileInputRef}
                className="hidden"
                onChange={handlePhotoChange}
            />
            <Button
                onClick={handlePhotoSelect}
                className=" text-white font-medium rounded-md  mb-3 shadow transition-colors "
            >
                Upload new photo
            </Button>
        </div>
    );
}
