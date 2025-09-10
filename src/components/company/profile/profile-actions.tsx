import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ProfileActionsProps {
    onViewProfile: () => void;
    onViewCompetency: () => void;
}

const ProfileActions = ({ onViewProfile, onViewCompetency }: ProfileActionsProps) => (
    <div className="flex flex-col gap-3 mt-6">
        <Link href={'/student/1/profile'}>
            <Button
                variant={'search'}
                className=" text-white w-full text-xs py-2 font-semibold shadow  mx-auto rounded-[10px]"
                onClick={onViewProfile}
            >
                View Profile
            </Button>
        </Link>
        <Button
            className="bg-gradient-to-r w-full inline-flex mx-auto text-white text-xs py-2 font-semibold shadow  rounded-[10px]"
            onClick={onViewCompetency}
            variant={'search'}
        >
            Competency Report
        </Button>
    </div>
);

export default ProfileActions;
