import React from 'react';
import { ExamRowProps } from '@/types/ExamTypes';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

export default function ExamBoardRow({
    name,
    marks,
    section,
    time,
    difficulty,
    status,
    idx,
}: ExamRowProps & { idx: number }) {
    const isCorrect = status === 'Correct';

    return (
        <tr
            className={`w-full h-[43px] border-b border-stormySlate last:border-b-0 ${
                idx % 2 === 0 ? 'bg-steelBlue' : 'bg-inherit'
            }`}
        >
            <td className="text-white font-poppins font-normal text-[13.4px] align-middle">
                <Text text={name} />
            </td>
            <td className="text-white font-poppins font-normal text-[13.4px] align-middle">
                <Text text={marks} />
            </td>
            <td className="text-white font-poppins font-normal text-[13.4px] align-middle">
                <Text text={section} />
            </td>
            <td className="text-white font-poppins font-normal text-[13.4px] align-middle">
                <Text text={time} />
            </td>
            <td className="text-white font-poppins font-normal text-[13.4px] align-middle">
                <Text text={difficulty} />
            </td>
            <td className="align-middle">
                <Text
                    as="span"
                    text={status}
                    className={`px-2 py-1 rounded-[4px] font-poppins font-normal text-[13.4px] w-[70px] h[20px] align-middle ${
                        isCorrect ? 'bg-mintGreen text-forestGreen' : 'bg-deepMaroonRed text-rosewater'
                    }`}
                />
            </td>
            <td className="align-middle">
                <Button
                    variant="link"
                    className="text-electricBlue font-poppins font-normal text-[13.4px] p-0 h-auto"
                >
                    Review
                </Button>
            </td>
        </tr>
    );
}
