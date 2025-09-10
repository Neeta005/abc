import React from 'react';
import CompetencyTable from './competency-table';
import { SkillProps } from '@/types/Profile';
import { Text } from '@/components/ui/Text';
export default function CompetencyTableHead({
    title,
    skills,
}: {
    skills: SkillProps[];
    title: string;
}) {
    return (
        <div>
            <Text size={'lg'}>{title}</Text>
            <div className="bg-steelBlue rounded-xl  p-6 mb-8 max-w-4xl mt-4">
                <table className=" text-left border-collapse w-full  overflow-hidden">
                    <colgroup>
                        <col className="w-[70%]" />
                        <col className="w-[30%]" />
                        <col className="w-[10%]" />
                    </colgroup>
                    <CompetencyTable skills={skills} />
                </table>
            </div>
        </div>
    );
}
