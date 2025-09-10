import React from 'react';
import VerticalBar from './Svgs/VerticalBar';
import ProfileIcon from './Svgs/ProfileIcon';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import { EditSvg } from '@/components/shared/deleteEdit';
import { DeleteSvg } from '@/components/shared/deleteEdit';
import { socialIcons } from './ProfileSocialIcons';
import { socials } from './ProfileSocialIcons';
import Link from 'next/link';
import ProfileSocialCard from './ProfileSocialCards';
export default function ProfileSocials() {
    return (
        <div className="flex w-full items-start gap-4">
            <div>
                <ProfileIcon />
                <VerticalBar />
            </div>
            <div className="flex flex-col w-full  gap-5">
                <div className="flex justify-between items-center w-full">
                    <Text text={'Social'} size={'2xl'} />
                    <Button>Add</Button>
                </div>
                <div className="w-full flex gap-4">
                    {socials?.map(({ name, link }, id) => (
                        <ProfileSocialCard key={id} link={link} name={name} />
                    ))}
                </div>
            </div>
        </div>
    );
}
