import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { mockedSkills } from '@/mocks/mockedData';
import { DeleteSvg, EditSvg } from '@/components/shared/deleteEdit';
import { Star } from 'lucide-react';
import { Text } from '@/components/ui/Text';
import RatingStar from '@/components/shared/RatingStars';
export default function ProfileSkills({ view = false }: { view?: boolean }) {
    return (
        <div className="bg-twilightBlue rounded-2xl p-8 mt-8">
            <div className="flex items-center gap-2 mb-6">
                <FaLightbulb className="text-orange-400 text-2xl" />
                <Text text="Skills" size="3xl" weight="bold" />
                {!view && (
                    <Button className="ml-auto bg-gradient-to-r max-w-[178px] from-orange-400 to-pink-400 text-white font-semibold px-8 py-4 rounded-lg shadow hover:opacity-90 transition max-h-[19px]">
                        Add Skill
                    </Button>
                )}
            </div>

            {mockedSkills?.map(({ name, stars, percent, assessed }, idx) => (
                <div
                    key={idx}
                    className="grid grid-cols-[1.7fr_1.3fr_2fr_1.5fr] gap-4 py-3 border-b border-gray-700 last:border-b-0"
                >
                    <Text text={name} size="base" />

                    <div className="flex gap-1">
                        <RatingStar stars={stars} className={undefined} />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                            <div
                                className={`h-3 rounded-full ${
                                    percent > 50 ? 'bg-green-500' : 'bg-red-500'
                                } w-[${percent}%]`}
                            />
                        </div>
                        <Text
                            as="span"
                            text={percent > 0 ? `${percent}%` : '0%'}
                            className={`text-xs font-bold ${
                                percent > 0 ? 'text-green-400' : 'text-red-400'
                            }`}
                        />
                    </div>
                    <div className="flex justify-end">
                        {assessed ? (
                            <Text
                                as="span"
                                text="Assessed"
                                className="px-4 py-1 w-[116px] rounded-full border border-green-400 text-green-400 text-[12px] text-center"
                            />
                        ) : (
                            <Text
                                as="span"
                                text="Not Assessed"
                                className="px-4 py-1 w-[116px] rounded-full border border-red-400 text-red-400 text-[12px] text-center"
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
