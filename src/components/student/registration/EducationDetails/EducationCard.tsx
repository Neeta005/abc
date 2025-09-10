import React from 'react';
import { EditSvg, DeleteSvg } from '@/components/shared/deleteEdit';
import { Expand } from 'lucide-react';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import { EducationCardProps } from '@/types/EducationTypes';

export default function EducationCard({
    edu,
    idx,
    handleEdit,
    handleDelete,
    collapse,
    setCollapse,
}: EducationCardProps) {
    return (
        <div
            className={`mt-12 mb-8 border border-white bg-onyxBlue rounded-xl h-[139px] ${
                collapse ? 'w-[439px]' : 'w-[650px]'
            }`}
        >
            <div className="py-3 p-6 rounded-lg shadow-lg relative">
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <Text
                            text={edu.college}
                            className="text-powderBlue font-[400] text-[16px] mb-2"
                        />
                        <Text as="div" className="text-white text-lg font-bold">
                            {edu.course}{' '}
                            <Text
                                as="span"
                                text={edu.cgpa}
                                className="ml-5 font-[400] text-[12px]"
                            />
                        </Text>
                        <Text text={edu.year} className="text-gray-400 text-xs font-semibold" />
                    </div>
                    {!collapse && (
                        <div className="flex gap-2">
                            <EditSvg
                                svgClassname="hover:border-red-500 hover:text-red-500"
                                onClick={() => handleEdit(idx)}
                            />

                            <DeleteSvg
                                onClick={() => handleDelete(idx)}
                                svgClassname="hover:border-red-500 hover:text-red-500"
                                btnClassname="border border-2 border-white rounded-full hover:border-red-500"
                            />
                        </div>
                    )}
                    {collapse && (
                        <div className="flex items-end gap-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setCollapse?.(!collapse)}
                            >
                                <Expand className="text-white" />
                            </Button>
                        </div>
                    )}
                </div>
                <Text text={`${edu.course} | ${edu.cgpa}`} className="text-gray-300 text-sm mb-1" />
                {/* <div className="flex flex-wrap gap-2">
                    {edu.skills?.map((skill: string, tIdx: number) => (
                        <Text as="span" key={tIdx} text={skill} className="bg-slate-800 text-orange-300 px-3 py-1 rounded-full text-xs font-semibold border border-orange-400" />
                    ))}
                </div> */}
            </div>
        </div>
    );
}
