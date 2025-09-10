import React from 'react';
import {
    SingleWordIcon,
    TrueFalseIcon,
    MultipleChoiceIcon,
    LongQuestionIcon,
} from './questionsIcon';
import { Text } from '@/components/ui/Text';

const QuestionTypeSelector = () => {
    return (
        <div className="bg-twilightBlue max-h-[335px] max-w-[534px] py-12 rounded-[20px] p-6 text-white w-full mx-auto">
            <Text as="h2" className="text-[24px] font-semibold mb-6" text="Select Question Type" />
            <div className="grid grid-cols-2 gap-12 p-6 text-cadetGray text-base">
                <div className="flex items-center gap-3 cursor-pointer hover:text-white transition">
                    <div className="relative">
                        <TrueFalseIcon />
                    </div>
                    <Text
                        as="span"
                        text="True/False"
                        className="text-cadetGray hover:text-white transition"
                    />
                </div>
                <div className="flex items-center gap-3  cursor-pointer ">
                    <SingleWordIcon />
                    <Text
                        as="span"
                        text="Single Word "
                        className="text-cadetGray hover:text-white transition"
                    />
                </div>
                <div className="flex items-center gap-3 cursor-pointer hover:text-white transition">
                    <LongQuestionIcon />
                    <Text
                        as="span"
                        text="Long Question"
                        className="text-cadetGray hover:text-white transition"
                    />
                </div>
                <div className="flex items-center gap-3 cursor-pointer hover:text-white transition">
                    <MultipleChoiceIcon />
                    <Text
                        as="span"
                        text="Multiple Choice"
                        className="text-cadetGray hover:text-white transition"
                    />
                </div>
            </div>
        </div>
    );
};

export default QuestionTypeSelector;
