import ExamBoardRow from './exam-board-rows';
import { ExamRowProps } from '@/types/ExamTypes';
import { UpArrowIcon } from '@/components/svgs/UpArrow';
import { examColumn } from '@/data/ExamBoard';
interface ExamBoardTableProps {
    data: ExamRowProps[];
}

const ExamBoardTable = ({ data }: ExamBoardTableProps) => (
    <div className="w-full px-6">
        <table className="w-full text-left mt-2">
            <thead>
                <tr className="border-b border-ironSlateBlue">
                    {examColumn.map((header) => (
                        <th
                            key={header}
                            className="py-2 text-white font-poppins font-normal text-[13.4px]"
                        >
                            {header}
                            {header !== 'Time' && header !== '' && (
                                <span className="inline-block align-middle ml-2">
                                    <UpArrowIcon />
                                </span>
                            )}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data?.map((row: ExamRowProps, idx: number) => (
                    <ExamBoardRow key={row?.name} {...row} idx={idx} />
                ))}
            </tbody>
        </table>
    </div>
);

export default ExamBoardTable;
