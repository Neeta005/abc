import React, { ChangeEvent, useState, useRef } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ProfileBanner() {
    const [banner, setBanner] = useState<string>('/assets/hero-world-img.png');
    const oldPreviewUrl = useRef<string | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const openFileDialog = () => {
        inputRef.current?.click();
    };

    const changeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
        if (target.files && target.files[0]) {
            const file = target.files[0];

            if (oldPreviewUrl.current) {
                URL.revokeObjectURL(oldPreviewUrl.current);
            }

            const previewUrl = URL.createObjectURL(file);
            setBanner(previewUrl);
            oldPreviewUrl.current = previewUrl;
        }
    };

    return (
        <div className="w-full bg-twilightBlue rounded-t-2xl flex flex-col items-center pt-6 pb-2 relative min-h-[90px]">
            <Input
                type="file"
                accept="image/*"
                onChange={changeHandler}
                ref={inputRef}
                className="hidden"
            />

            <Image
                src={banner}
                alt="Profile Banner"
                className="w-full h-56 object-cover  rounded-t-2xl"
                width={224}
                height={224}
            />

            <Button
                variant="ghost"
                size="icon"
                className="absolute top-0 right-6 flex justify-center items-center bg-inherit border-2 border-crimsonBerry w-[60px] h-[60px] rounded-full p-2 hover:bg-white/30"
                onClick={openFileDialog}
                aria-label="Change profile banner"
            >
                <ImageIcon width={48} height={48} className="text-crimsonBerry" />
            </Button>
        </div>
    );
}
