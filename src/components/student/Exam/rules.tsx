import React, { useState } from 'react';
import examRulesImg from '@/assets/shapes/exam-rules.png';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { RuleData as data } from '@/mocks/mockedExamRules';

export default function ExamRules() {
    const [agreed, setAgreed] = useState<boolean>(false);

    return (
        <div className="bg-steelBlue rounded-[20px] p-10 text-white max-w-[1200px] mx-auto relative min-h-[700px] flex flex-col justify-between">
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Text
                        as="h1"
                        text={`Exam: ${data.exam.name}`}
                        className="text-[32px] font-bold mb-2"
                    />
                    <Text as="div" className="text-mutedBlueGray mb-1">
                        <Text as="span">Subject : </Text>
                        <Text as="span" className="text-white">
                            {data.exam.subject}
                        </Text>
                    </Text>
                    <Text as="div" className="text-mutedBlueGray mb-6">
                        <Text as="span">No of questions : </Text>
                        <Text as="span" className="text-white">
                            {data.exam.questions}
                        </Text>
                    </Text>
                    <Text
                        as="h2"
                        text="Secure Exam Advice"
                        className="text-[22px] font-semibold mb-2"
                    />
                    <Text as="p" className="mb-4 text-mistGray">
                        This exam is video recorded and live streamed to the administrator. Kindly
                        follow these instructions for a smooth experience and avoid any hitches
                    </Text>
                    <ul className="mb-6 space-y-2">
                        {data.advice?.map((rule, i) => (
                            <Text as="li" key={i} className="flex items-start gap-2">
                                <span className="mt-1 w-3 h-3 bg-mistGray rounded-full inline-block"></span>
                                <Text as="span">{rule}</Text>
                            </Text>
                        ))}
                    </ul>
                    <Text as="div" weight="semibold" className="mb-2 text-white">
                        The following actions are also not supported during your exam.
                    </Text>
                    <ul className="mb-6 space-y-2">
                        {data.notSupported?.map((rule, i) => (
                            <Text as="li" key={i} className="flex items-start gap-2">
                                <span className="mt-1 w-3 h-3 bg-mistGray rounded-full inline-block"></span>
                                <Text as="span">{rule}</Text>
                            </Text>
                        ))}
                    </ul>
                    <Text className="text-mistGray">
                        We are monitoring your activity during the exam, and any unusual behaviour
                        is being tracked. Your admin has set the exam to terminate if a certain
                        number of unusual activities are detected, which could be as low as one. To
                        avoid your exam from being terminated, please refrain from any behaviour
                        that may be considered unusual. All the best!
                    </Text>
                </div>
                <div className="flex items-center justify-center">
                    <Image
                        src={examRulesImg.src}
                        alt="Exam rules illustration"
                        width={350}
                        height={350}
                        className="w-[350px] h-auto min-w-[300px]"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between mt-8 bg-duskNavy px-6 py-4 rounded-b-[20px] border-t border-boldSlateBlue">
                <div className="flex items-center gap-2">
                    <Input
                        type="checkbox"
                        checked={agreed}
                        onChange={() => setAgreed((v) => !v)}
                        className="accent-brand-4ecb71 w-5 h-5"
                        id="agree-checkbox"
                    />
                    <Text
                        as="label"
                        className="text-[18px] text-meadowGreen font-medium select-none"
                    >
                        <Text as="span" className="text-blazeRed text-[16px]">
                            {data.agreement.split('.')[0]}.
                        </Text>
                        <Text as="span" className="text-blazeRed text-[16px]">
                            {data.agreement.split('.').slice(1).join('.')}
                        </Text>
                    </Text>
                </div>
            </div>
            <div>
                <div className="flex gap-4 justify-end mt-2 bg-inherit">
                    <Button
                        variant="outline"
                        className="bg-boldSlateBlue border w-[125px] h-[41px] border-mistGray text-mistGray rounded-[8px] text-[16px] font-semibold hover:bg-duskNavy transition"
                    >
                        Cancel
                    </Button>
                    <Button
                        className="bg-blazeRed w-[125px] h-[41px] text-white rounded-[8px] text-[16px] font-semibold hover:bg-fireRed transition disabled:opacity-60"
                        disabled={!agreed}
                    >
                        Start Exam
                    </Button>
                </div>
            </div>
        </div>
    );
}
