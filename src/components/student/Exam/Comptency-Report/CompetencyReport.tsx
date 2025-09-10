import React from 'react';
import CompetencyCircle from './competency-circle';
import CompetencyTableHead from './competency-tableHead';
import { communicationSkills, jobSpecificRoles, technicalSkills } from '@/mocks/mockedProfileData';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
export default function CompetencyReport({ onClick }: { onClick: () => void }) {
    return (
        <div className="p-8 bg-midnightAlloy rounded-2xl text-white font-sans max-w-2xl mx-auto">
            <div className="flex justify-between items-start mb-8">
                <Text
                    as="h2"
                    text="Competency Report"
                    size="2xl"
                    weight="semibold"
                    className="mb-2"
                />
                <Button
                    className="text-white text-xl bg-inherit"
                    variant={'secondary'}
                    onClick={onClick}
                >
                    <X />
                </Button>
            </div>

            <div className="flex flex-nowrap gap-3 mb-8 justify-between">
                <div className="bg-steelBlue rounded-xl p-3 h-full flex flex-col items-center ">
                    <Text text="Overall Activeness" className="mb-4" />
                    <div className="flex-1 flex items-center justify-center w-full"></div>
                </div>

                <div className="bg-steelBlue rounded-xl p-3 h-full flex flex-col items-center">
                    <Text text="Overall Communication score" size={'xs'} className="mb-4" />
                    <div className="flex-1 flex items-center justify-center w-full">
                        <CompetencyCircle score={4.0} />
                    </div>
                </div>

                <div className="bg-steelBlue rounded-xl p-3 h-full flex flex-col items-center ">
                    <Text text="Overall Technical Score" size={'xs'} className="mb-4" />
                    <div className="flex-1 flex items-center justify-center w-full">
                        <CompetencyCircle score={4.0} />
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <CompetencyTableHead title="Technical Score" skills={technicalSkills} />
                <CompetencyTableHead title="Communication Score" skills={communicationSkills} />
                <CompetencyTableHead title="Job Specific Roles" skills={jobSpecificRoles} />
            </div>
        </div>
    );
}
