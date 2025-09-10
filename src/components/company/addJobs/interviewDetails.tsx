import React from 'react';
import { Text } from '@/components/ui/Text';

const InterviewDetail = () => {
    return (
        <div className="mt-6 text-white">
            <Text text="Interview Details" as="div" className="text-2xl font-bold mb-6" />
            <Text
                text="Below sections will not seen by the canditates. We collect data to help your intervew process."
                as="p"
                className="text-base mb-6"
            />
            <div className="flex flex-col gap-1">
                <Text text="Explain your interview method" as="label" className="text-base" />
                <textarea className="min-h-[197px] bg-inherit p-2 w-full border border-red-500 rounded-[8px]" />
            </div>
        </div>
    );
};

export default InterviewDetail;
