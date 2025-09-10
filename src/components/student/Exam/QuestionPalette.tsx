import React from 'react';
import './scroll-bar.css';
import {
    mockedStatusColors as statusColors,
    mockedStatusLabels as statusLabels,
    mockedQuestionsStatus as questionsStatus,
} from '@/mocks/mockedExamData';
import { Text } from '@/components/ui/Text';

export default function QuestionPalette() {
    return (
        <div>
            <Text as="p" className="text-white text-[18px] font-semibold mb-2">
                Questions <Text as="span" text="1/30" weight="normal" />
            </Text>
            <div className="scrollable bg-steelBlue w-[325px] h-[202px] rounded-[16px] p-4 overflow-y-auto">
                <div className="grid grid-cols-6 gap-4 mb-10 h-[120px] bg-steelBlue">
                    {questionsStatus?.map(({ number, status }) => (
                        <Text
                            key={number}
                            text={number}
                            className={`w-[40px] h-[40px] flex items-center mt-2 justify-center rounded-full text-[18px] font-semibold ${statusColors[status]}`}
                        />
                    ))}
                </div>
            </div>
            <div className="flex gap-4 mt-2">
                {statusLabels?.map(({ label, color }, i) => (
                    <div key={i} className="flex justify-between w gap-1 text-[10px]">
                        <div className="flex items-center gap-1">
                            <span
                                className="inline-block w-[9px] h-[9px] rounded-full"
                                style={{ backgroundColor: color }}
                            ></span>
                            <Text as="span" text={label} className="text-white" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
