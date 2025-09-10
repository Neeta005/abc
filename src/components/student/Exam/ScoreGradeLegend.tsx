import React from 'react';
import { mockedScoreData as scoreData } from '@/mocks/mockedExamData';
import ScoreGradeBody from './ScoreGradeBody';

export default function ScoreGradeLegend() {
    return (
        <div className="bg-midnightSlateBlue border border-mutedSlateGray p-4 rounded-[6px] flex justify-between items-center">
            {scoreData?.map((item) => (
                <ScoreGradeBody key={item.label} {...item} />
            ))}
        </div>
    );
}
