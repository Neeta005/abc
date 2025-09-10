import React from 'react';
import { EditSvg, DeleteSvg } from '@/components/shared/deleteEdit';
import dayjs from 'dayjs';
import { Text } from '@/components/ui/Text';
import { ProjectAchivmentProps } from '@/types/EducationTypes';
export default function AchievmentCard({
    achievementTitle,
    achievementDescription,
    achievmentFromDate,
    achievementToDate,
    projectTitle,
    projectDescription,
    projFromDate,
    projToDate,
    idx,
    handleEdit,
    handleDelete,
}: ProjectAchivmentProps) {
    const title = achievementTitle || projectTitle;
    const description = achievementDescription || projectDescription;
    const from = achievmentFromDate || projFromDate;
    const to = achievementToDate || projToDate;

    return (
        <div
            key={idx}
            className="bg-onyxBlue/30 border w-[650px] border-white rounded-xl p-3 mb-4 flex flex-col gap-2 shadow-lg"
        >
            <div className="flex flex-row justify-between items-center mb-2">
                <Text text={title} className="text-white text-lg font-bold" />
                <div className="flex gap-2">
                    <EditSvg
                        svgClassname="hover:border-red-500 hover:text-red-500"
                        onClick={() => handleEdit(idx)}
                    />
                    <DeleteSvg
                        svgClassname="hover:border-red-500 hover:text-red-500"
                        btnClassname="border border-2 border-white rounded-full hover:border-red-500"
                    />
                </div>
            </div>
            <div>
                <Text
                    text={description?.substring(0, 100) ?? ''}
                    className="text-gray-400 text-sm"
                />
                <Text
                    text={
                        from && to
                            ? `${dayjs(from).format('MMM YYYY')} - ${dayjs(to).format('MMM YYYY')}`
                            : ''
                    }
                    className="text-gray-400 text-xs font-semibold"
                />
            </div>
            <div
                className="text-orange-300 text-sm mb-1"
                dangerouslySetInnerHTML={{ __html: description ?? '' }}
            />
        </div>
    );
}
