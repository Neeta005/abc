import React from 'react';

type Segment = {
    label: string;
    color: string;
    value: number;
    percent: number;
    start: number;
};

type Props = {
    CIRCLE_SIZE: number;
    RADIUS: number;
    STROKE_WIDTH: number;
    segments: Segment[];
};

export default function ExamScoreCircle({ CIRCLE_SIZE, segments, RADIUS, STROKE_WIDTH }: Props) {
    const CIRCUM = 2 * Math.PI * RADIUS;

    return (
        <svg width={CIRCLE_SIZE} height={CIRCLE_SIZE} className="absolute top-0 left-0">
            {segments.map((seg) => {
                const dash = seg.percent * CIRCUM - 25;
                const gap = CIRCUM - dash;
                const offset = -CIRCUM * seg.start;

                return (
                    <circle
                        key={seg.label}
                        cx={CIRCLE_SIZE / 2}
                        cy={CIRCLE_SIZE / 2}
                        r={RADIUS}
                        fill="none"
                        stroke={seg.color}
                        strokeWidth={STROKE_WIDTH}
                        strokeDasharray={`${dash} ${gap}`}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dasharray 0.5s' }}
                    />
                );
            })}
        </svg>
    );
}
