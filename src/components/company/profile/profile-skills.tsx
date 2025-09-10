import React from 'react';
import { Text } from '@/components/ui/Text';

interface ProfileSkillsProps {
    skills: string[];
}

const ProfileSkills = ({ skills }: ProfileSkillsProps) => (
    <div className="text-center mt-4 text-[12px] w-[274px]">
        <Text as="h3" text="Skills" weight="semibold" className="mb-2" />
        <Text text={skills?.join(', ')} size="sm" className="text-gray-200" />
    </div>
);

export default ProfileSkills;
