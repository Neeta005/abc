import { Check } from 'lucide-react';
import React from 'react';
import { Text } from '@/components/ui/Text';
import { mockedCompatibilityData as compatibilityData } from '@/mocks/mockedExamData';

export default function SystemCompatibility() {
    return (
        <div className="flex flex-col justify-between overflow-hidden text-white bg-richSlateBlue w-[907px] rounded-xl shadow-[0_2px_16px_0_rgba(0,0,0,0.10)]">
            <div className="flex-1 p-8">
                <table className="w-full text-left text-[14px]">
                    <tbody>
                        {compatibilityData?.map(({ label, value, status }, idx) => (
                            <tr
                                key={idx}
                                className="border-b border-coolSlate w-[893px] last:border-b-0"
                            >
                                <td className="py-3 px-2 text-mutedBlueGray">
                                    <Text text={label} />
                                </td>
                                <td className="py-3 px-2 font-semibold text-white w-[260px]">
                                    <Text text={value} />
                                </td>
                                <td className="py-3 px-2 w-[28px] h-[28px]">
                                    <span className="inline-flex items-center justify-center w-[28px] h-[28px] bg-kellyGreen">
                                        <Check className="w-5 h-6" />
                                    </span>
                                </td>
                                <td className="py-3 px-2 text-meadowGreen font-semibold">
                                    <Text text={status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Text
                text="Your system is fully compatible with our software, you can take exams anytime"
                className="bg-green-900/35 py-3 px-6 text-center text-[14px] font-semibold"
            />
            <div className="w-full flex justify-center items-center py-4 bg-inherit">
                <div className="w-[80%] h-8 bg-duskNavy rounded-full overflow-hidden relative">
                    <div>
                        <div className="h-full bg-[repeating-linear-gradient(135deg,#6ee7b7_0_10px,#4ECB71_10px_20px)] opacity-30"></div>
                    </div>
                    <Text
                        text="75%"
                        className="absolute w-full h-full flex items-center justify-center top-0 left-0 text-[18px] font-bold"
                    />
                </div>
            </div>
        </div>
    );
}
