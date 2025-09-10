import React from 'react';
import { CustomIcon } from './exam-board';
import { ChevronRight } from 'lucide-react';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

export default function ExamBoardHeader() {
    return (
        <div className="flex items-center px-6 pt-4 pb-2">
            <Text
                as="span"
                className="text-white font-poppins font-semibold text-[20px] flex items-center"
            >
                <div className="mr-2">
                    <CustomIcon />
                </div>
                Exam Board
            </Text>
            <Button
                variant="link"
                className="ml-auto text-softSlateBlue text-[15px] font-poppins flex items-center"
            >
                View all <ChevronRight />
            </Button>
        </div>
    );
}
