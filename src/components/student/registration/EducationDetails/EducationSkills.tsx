import React from 'react';
import { X } from 'lucide-react';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

interface EducationSkillsProps {
    onClick: (skill: string) => void;
    skill: string;
}

export default function EducationSkills({ onClick, skill }: EducationSkillsProps) {
    return (
        <div
            key={skill}
            className="bg-zinc-700 text-white px-3 py-1 rounded-[8px] border border-white flex items-center space-x-2"
        >
            <Text text={skill} size="sm" />
            <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => onClick(skill)}
                className="text-gray-300 hover:text-white w-auto h-auto p-0"
            >
                <div className="w-4 h-4 rounded-full border border-white flex bg-white justify-center items-center">
                    <X size={14} className="text-black" />
                </div>
            </Button>
        </div>
    );
}
