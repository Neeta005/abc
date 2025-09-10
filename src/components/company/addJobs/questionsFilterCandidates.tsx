import React from 'react';
import illustration from '@/assets/banners/illustration.png';
import { CirclePlus } from 'lucide-react';
import QuestionTypeSelector from './questionTypeSelector';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

const QuestionsFilter = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div className="text-white h-full max-w-2xl w-full  ">
            <div>
                <Text text="Questions to Filter Candidates" className="text-2xl" />
            </div>
            <div className="opacity-[.13]  sm:h-[60%] lg:h-[80%] w-full">
                <div
                    className="w-full h-full bg-no-repeat bg-[length:50%_50%] bg-center mt-10"
                    style={{
                        backgroundImage: `url(${illustration.src})`,
                    }}
                ></div>
            </div>
            <div className="flex items-center flex-col text-neutralGray">
                <Text text="No Question" className="text-[26px] font-bold" />
                <Text text="You have no question added yet" className="text-[21px]" />
                <Button
                    className="border rounded-lg  p-3 flex justify-between gap-3"
                    onClick={onClick}
                    variant={'success'}
                >
                    <CirclePlus /> Add Questions
                </Button>
            </div>
        </div>
    );
};

export default QuestionsFilter;
