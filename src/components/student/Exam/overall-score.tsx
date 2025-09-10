import React from 'react';
import ExamScoreCircle from './overall-score-circle';
import { Text } from '@/components/ui/Text';

const CIRCLE_COLORS: { correct: string; incorrect: string; partially: string; unanswered: string } =
    {
        correct: '#00FF08',
        incorrect: '#FD7400',
        partially: '#FACC15',
        unanswered: '#BEDB39',
    };

const STATUS: { label: string; color: string; value: number }[] = [
    { label: 'Correct', color: CIRCLE_COLORS.correct, value: 4 },
    { label: 'Partially Correct', color: CIRCLE_COLORS.partially, value: 4 },
    { label: 'Incorrect', color: CIRCLE_COLORS.incorrect, value: 2 },
    { label: 'Unanswered', color: CIRCLE_COLORS.unanswered, value: 4 },
];

const getSegments = (data: typeof STATUS) => {
    const total = data.reduce((sum, s) => sum + s.value, 0);
    let prev = 0;
    return data.map((s) => {
        const percent = s.value / total;
        const start = prev;
        prev += percent;
        return {
            ...s,
            percent,
            start,
        };
    });
};

const CIRCLE_SIZE = 200;
const STROKE_WIDTH = 18;
const RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;
const CIRCUM = 2 * Math.PI * RADIUS;

const segments = getSegments(STATUS);

export default function OverallScoreCardTailwind() {
    return (
        <div className="w-[299px] h-[441px] bg-steelBlue rounded-[16px] flex flex-col items-center box-border">
            <Text
                text="Overall Score"
                className="font-poppins font-normal text-[18px] leading-[28px] text-white mt-8 mb-4"
            />
            <div className="relative flex items-center justify-center w-[200px] h-[200px]">
                <ExamScoreCircle
                    CIRCLE_SIZE={CIRCLE_SIZE}
                    RADIUS={RADIUS}
                    STROKE_WIDTH={STROKE_WIDTH}
                    segments={segments}
                />
                <div className="absolute top-0 left-0 flex flex-col items-center justify-center text-white font-poppins font-bold text-[30px] leading-[56px] w-[200px] h-[200px]">
                    <Text text="0%" />
                </div>
            </div>
            <div className="mt-8 w-full px-6">
                <div className="grid grid-cols-2 gap-6 text-white">
                    {STATUS?.map(({ label, value, color }) => (
                        <div key={label} className="flex items-center mb-4">
                            <span
                                className="inline-block mr-3 w-4 h-2 rounded-sm"
                                style={{ background: color }}
                            />
                            <Text
                                as="span"
                                text={label}
                                className="font-poppins font-normal text-[14px] leading-[22px] mr-2"
                            />
                            <Text
                                as="span"
                                text={value.toString()}
                                className="font-poppins font-normal text-[14px] leading-[22px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
