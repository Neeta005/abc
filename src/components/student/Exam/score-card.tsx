import React from 'react';
import {
    mockedExamInfo as examInfo,
    mockedSubjectScores as subjectScores,
    mockedStudentInfo as studentInfo,
} from '@/mocks/mockedExamData';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

export default function ScoreCard() {
    return (
        <div className="max-w-[1196px] text-white min-h-[900px] bg-charcoalBlue px-16 py-6 rounded-2xl relative">
            <div className="flex gap-3 items-center mb-2">
                <div className="flex-1">
                    <Button variant="ghost" className="text-[50px] font-bold p-0 h-auto">
                        ×
                    </Button>
                </div>
                <Text text={examInfo.declared} className="text-base text-vividBlue font-inter" />
            </div>

            <Text text="Score Card" className="text-[32px] font-poppins mt-2 font-semibold" />
            <div className="flex items-center gap-4 mt-6 mb-4">
                <div className="w-[102px] h-[102px] rounded-full overflow-hidden border-4 border-stormySlate">
                    <Image src={studentInfo.avatar} alt="avatar" width={102} height={102} />
                </div>
                <div className="px-6 py-4 w-[260px] h-[102px] flex flex-col justify-center">
                    <Text
                        text={studentInfo.name}
                        className="text-2xl font-inter font-semibold leading-tight"
                    />
                    <Text className="text-base font-inter mt-1">
                        Student ID : <Text as="span">{studentInfo.studentId}</Text>
                    </Text>
                    <Text className="text-base font-inter mt-1">
                        Field : <Text as="span">{studentInfo.field}</Text>
                    </Text>
                </div>
            </div>

            <div className="mt-2 mb-2">
                <Text
                    as="span"
                    text={examInfo.title}
                    className="text-[24px] font-poppins font-semibold"
                />
            </div>
            <div className="flex items-center gap-4 mb-2">
                <Text as="span" className="flex items-center gap-2 text-[15px] text-softSlateBlue">
                    <Clock className="w-4 h-4" />
                    {examInfo.time}
                </Text>
                <Text as="span" className="flex items-center gap-2 text-[15px] text-softSlateBlue">
                    <Calendar className="w-4 h-4" />
                    {examInfo.date}
                </Text>
                <Text
                    as="span"
                    className="ml-4 px-4 py-1 rounded bg-deepForest text-seafoamGreen text-[15px] font-poppins font-medium"
                >
                    Status : {examInfo.status}
                </Text>
            </div>

            <Text className="text-xl font-poppins text-softSlateBlue mb-1">
                Course{' '}
                <Text as="span" weight="semibold" className="ml-2">
                    {examInfo.course}
                </Text>
            </Text>
            <Text className="text-xl font-poppins text-softSlateBlue mb-1">
                Subject{' '}
                <Text as="span" weight="semibold" className="ml-2">
                    {examInfo.subject}
                </Text>
            </Text>
            <Text className="text-xl font-poppins text-softSlateBlue mb-5 mt-5">
                Total Marks :{' '}
                <Text as="span" weight="semibold">
                    {examInfo.totalMarks}
                </Text>
            </Text>
            <Text className="text-base font-inter text-softSlateBlue mb-1 flex justify-between w-[430px]">
                Passing Percentage{' '}
                <Text as="span" className="ml-2 font-semibold text-vividBlue align">
                    {examInfo.passingPercentage}%
                </Text>
            </Text>
            <div className="w-full max-w-[400px] h-2 bg-stormySlate rounded-full mt-2 mb-4">
                <div
                    className={`h-2 bg-vividBlue rounded-full w-[${examInfo.passingPercentage}%]`}
                ></div>
            </div>

            <div className="mt-4">
                <Text text="Result" className="text-[22px] font-poppins font-semibold mb-2" />
                <div className="flex flex-col gap-4">
                    <div className="rounded-lg py-2 flex flex-col ml-0">
                        <Text
                            as="span"
                            text="Total Score"
                            className="text-lg font-poppins font-semibold"
                        />
                        <div className="inline-block mt-2 ml-0">
                            <Text
                                as="span"
                                text={examInfo.totalScore}
                                className="inline mt-1 text-lg font-poppins font-semibold bg-silverStone text-stormySlate px-3 py-1 rounded"
                            />
                        </div>
                    </div>
                    <div className="rounded-lg py-4 flex flex-col">
                        <Text
                            as="span"
                            text="Student Grade"
                            className="text-lg font-poppins font-semibold mb-2"
                        />
                        <Text
                            text={examInfo.grade}
                            className="w-16 h-16 rounded-full border-4 border-vividBlue flex items-center justify-center text-[22px] font-poppins font-bold"
                        />
                    </div>
                </div>
            </div>

            <div className="absolute right-11 top-[390px] bg-steelBlue w-[494px] h-[369px] rounded-xl border border-stormySlate p-6">
                <Text text="Subject Score" className="text-xl font-poppins font-semibold mb-4" />
                <div className="flex flex-col gap-4">
                    {subjectScores?.map(({ subject, grade, color }) => (
                        <div className="flex items-center justify-between" key={subject}>
                            <Text as="span" text={subject} className="text-base font-poppins" />
                            <Text as="span" className="flex items-center gap-2">
                                <Text
                                    as="span"
                                    text={grade}
                                    className="w-[51px] h-[51px] rounded-full border-4 flex items-center justify-center text-[15px] font-poppins font-semibold"
                                    style={{ borderColor: color, color: color }}
                                />
                            </Text>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
