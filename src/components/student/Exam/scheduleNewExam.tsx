import React from 'react';
import {
    mockedExamTerms as examTerms,
    mockedSubjectTopics as subjectTopics,
} from '@/mocks/mockedExamData';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export default function ScheduleNewExam() {
    return (
        <div className="flex gap-10 bg-midnightAlloy rounded-2xl p-10 text-white font-sans">
            <div className="flex-1">
                <Text
                    as="h2"
                    text="Schedule New Exam"
                    size="2xl"
                    weight="semibold"
                    className="mb-6"
                />
                <div className="mb-6">
                    <Text as="label" text="Category" className="block mb-2 text-gray-300" />
                    <Select>
                        <SelectTrigger className="w-full p-3 rounded border border-blushRed bg-transparent text-white">
                            <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={'a'}></SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="mb-6">
                    <Text
                        as="label"
                        text="Agree to these terms"
                        className="block mb-2 text-gray-300"
                    />
                    <div className="flex flex-col gap-2">
                        {examTerms?.map((term, idx) => (
                            <Text as="label" key={idx} className="flex items-center gap-2">
                                <Input type="checkbox" checked readOnly className="accent-white" />
                                {term}
                            </Text>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
