import React from 'react';
import { ScoreTableSectionProps } from '@/types/ExamTypes';
import { Text } from '@/components/ui/Text';

export default function ScoreTableSection({ sectionTitle, icon, rows }: ScoreTableSectionProps) {
    return (
        <div className="mb-8">
            <Text as="div" className="flex items-center gap-2 text-white text-xl font-bold mb-2">
                {icon}
                {sectionTitle}
            </Text>
            <hr className="border-neutralGray mb-2" />
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-neutralGray text-base">
                            <th className="py-2 px-4">
                                <Text text="Topic Name" />
                            </th>
                            <th className="py-2 px-4">
                                <Text text="no. of Questions" />
                            </th>
                            <th className="py-2 px-4">
                                <Text text="Correct Answers" />
                            </th>
                            <th className="py-2 px-4">
                                <Text text="incorrect" />
                            </th>
                            <th className="py-2 px-4">
                                <Text text="skipped" />
                            </th>
                            <th className="py-2 px-4">
                                <Text text="Grade" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows?.map(
                            ({ questions, correct, incorrect, skipped, grade, topic }, idx) => (
                                <tr
                                    key={topic + idx}
                                    className="bg-onyxBlue text-white border-b border-darkSlateBlue"
                                >
                                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                                        <Text text={topic} />
                                    </td>
                                    <td className="py-3 px-4">
                                        <Text text={questions} />
                                    </td>
                                    <td className="py-3 px-4">
                                        <Text text={correct} />
                                    </td>
                                    <td className="py-3 px-4">
                                        <Text text={incorrect} />
                                    </td>
                                    <td className="py-3 px-4">
                                        <Text text={skipped} />
                                    </td>
                                    <td className="py-3 px-4">
                                        <Text
                                            as="span"
                                            text={grade.label}
                                            className="px-5 py-2 rounded-md font-bold"
                                            style={{ background: grade.bg, color: grade.color }}
                                        />
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
