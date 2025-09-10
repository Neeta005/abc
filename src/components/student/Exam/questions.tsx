import { Bookmark } from 'lucide-react';
import React, { useState } from 'react';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

type QuestionData = {
    subject: string;
    topic: string;
    question: string;
    options: string[];
    selected: number;
};

const questionData: QuestionData = {
    subject: 'Designing',
    topic: 'Technology',
    question: 'What is the purpose of HDR technology?',
    options: [
        'To reduce the file size of images and videos.',
        'To speed up 3D rendering performance.',
        'To support higher video resolutions.',
        'To display more colors in images and videos',
    ],
    selected: 1,
};

type ExamQuestionProps = {
    questions?: QuestionData;
};

export default function ExamQuestion({ questions = questionData }: ExamQuestionProps) {
    const { subject, topic, question, options } = questions;
    const [selected, setSelected] = useState<number | null>(questions.selected);

    return (
        <div className="w-[912px] text-white overflow-hidden flex flex-col justify-between p-0 shadow-[0_2px_16px_0-rgba(0,0,0,0.10)]">
            <div className="flex justify-between bg-inherit items-center px-8 pt-6 pb-2">
                <Text as="div" size="base">
                    <Text as="span" className="text-mistGray font-medium mr-8">
                        <Text as="span" weight="semibold" className="text-white">
                            Subject:
                        </Text>{' '}
                        {subject}
                    </Text>
                    <Text as="span" className="text-mistGray font-medium">
                        <Text as="span" weight="semibold" size="base" className="text-white">
                            Topic:
                        </Text>{' '}
                        {topic}
                    </Text>
                </Text>
                <div className="flex gap-4">
                    <Button className="bg-mistGray text-boldSlateBlue w-[125px] h-[41px] rounded-[4px] text-base font-bold hover:bg-coolGray transition">
                        Previous
                    </Button>
                    <Button className="bg-gradient-to-r from-brand-ff2e00 to-brand-ff6b00 text-white w-[125px] h-[41px] rounded-[4px] text-base font-bold hover:opacity-90 transition">
                        Next
                    </Button>
                </div>
            </div>
            <div className="flex-1 px-12 pb-4 flex flex-col justify-center bg-steelBlue rounded-[15px]">
                <Button
                    variant="link"
                    className="self-end text-electricRed text-[20px] hover:underline"
                >
                    Skip
                </Button>
                <div className="mb-6">
                    <Text as="span" text="1." size="lg" weight="semibold" className="mr-2" />
                    <Text as="span" text={question} className="italic text-lg" />
                </div>
                <div className="flex flex-col gap-4">
                    {options?.map((option, idx) => (
                        <Text
                            as="label"
                            key={idx}
                            className={`flex items-center gap-4 text-base cursor-pointer rounded transition-all py-2 pl-3 ${selected === idx ? 'bg-inkSlateBlue' : ''}`}
                        >
                            <Button
                                variant="ghost"
                                className={`w-7 h-7 rounded-full border-2 flex items-center justify-center min-w-6 p-0 hover:bg-boldSlateBlue ${selected === idx ? 'border-mistGray bg-boldSlateBlue' : 'border-mistGray bg-boldSlateBlue'}`}
                                onClick={() => setSelected(idx)}
                            >
                                {selected === idx && (
                                    <span className="w-4 h-4 rounded-full bg-mistGray block"></span>
                                )}
                            </Button>
                            <Text as="span" text={option} className="italic" />
                        </Text>
                    ))}
                </div>
                <Button variant="ghost" size="icon" className="self-end">
                    <Bookmark />
                </Button>
            </div>
        </div>
    );
}
