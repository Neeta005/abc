import React from 'react';
import { Text } from '@/components/ui/Text';
import { EditSvg } from '@/components/shared/deleteEdit';
import { DeleteSvg } from '@/components/shared/deleteEdit';
import { socialIcons } from './ProfileSocialIcons';
import Link from 'next/link';

export default function ProfileSocialCard({ link, name }: { link: string; name: string }) {
    return (
        <div className="flex w-full items-center gap-2 px-4 py-2 border border-transparent bg-white/10 rounded-lg  transition">
            <Link href={link} target="_blank" rel="noopener noreferrer"></Link>
            <div className="w-6 h-6">{socialIcons[name]}</div>
            <div className="flex w-full justify-between items-center gap-5">
                <Text text={link} size="sm" />
                <div className="flex gap-1 items-center">
                    <EditSvg btnClassname="border-white w-6 h-6" svgClassname="text-white" />
                    <DeleteSvg
                        svgClassname="text-red-500"
                        btnClassname="border w-6 h-6 rounded-full border border-red-500"
                    />
                </div>
            </div>
        </div>
    );
}
