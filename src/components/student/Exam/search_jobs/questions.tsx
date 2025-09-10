'use client';
import React, { useState } from 'react';
import useJobPosting from '@/stores/jobPostingStore';
import { Text } from '@/components/ui/Text';

export default function Questions() {
    const questions = useJobPosting((state) => state.questions);
    const [selected, setSelected] = useState<{ [key: number]: number | null }>({});
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <div className="p-8 space-y-4 max-w-5xl bg-shadowBlue shadow-[0_4px_24px_0_rgba(0,0,0,0.15)]">
            <div className="mb-6">
                <Text
                    as="h2"
                    text="Key Questions to Identify the Right Fit for Your Team"
                    className="text-base text-gray-400 font-semibold mb-2"
                />
            </div>

            <div>
                {questions?.map(({ type, question, options }, id) => (
                    <div key={id}>
                        {type === 'multiple' && (
                            <div className="mt-3 p-4 border border-red-500 rounded-[8px] text-white max-w-[790px]">
                                <Text as="p" className="mb-2 text-[24px] font-bold">
                                    {id + 1 + '. '}
                                    {question}
                                </Text>
                                {options && (
                                    <Text
                                        as="ul"
                                        className="list-disc text-[20px] font-semibold list-inside grid grid-cols-2 gap-3"
                                    >
                                        {options?.map((opt, idx) => (
                                            <Text as="li" key={idx}>
                                                {opt}
                                            </Text>
                                        ))}
                                    </Text>
                                )}
                            </div>
                        )}
                        {type === 'trueFalse' && (
                            <div className="border border-red-500 rounded-[8px] mt-3 p-4">
                                <Text as="p" className="mb-2 text-[24px] font-bold">
                                    {id + 1 + '. '}
                                    {question}
                                </Text>
                            </div>
                        )}
                        {type === 'shortAnswer' && (
                            <div className="border border-red-500 rounded-[8px] mt-3 p-4">
                                <Text as="p" className="mb-2 text-[24px] font-bold">
                                    {id + 1 + '. '}
                                    {question}
                                </Text>
                            </div>
                        )}
                        {type === 'long' && (
                            <div className="border border-red-500 rounded-[8px] mt-3 p-4">
                                <Text as="p" className="mb-2 text-[24px] font-bold">
                                    {id + 1 + '. '}
                                    {question}
                                </Text>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
