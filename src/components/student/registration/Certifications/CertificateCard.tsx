import React from 'react';
import { EditSvg, DeleteSvg } from '@/components/shared/deleteEdit';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import { CertificateCardProps } from '@/types/EducationTypes';

export default function CertificateCard({
    handleEdit,
    handleDelete,
    certificationTitle: title,
    certIssuedBy: issuedBy,
    certDate: issuedDate,
    idx,
}: CertificateCardProps & { idx: number }) {
    return (
        <div
            key={idx}
            className="bg-graphiteGray border w-[650px] max-h-[94px] border-white rounded-lg p-3 py-2 mb-4 flex flex-col h-[139px]"
        >
            <div className="flex justify-between">
                <Text text={title} className="text-white font-semibold text-lg" />
                <div className="flex">
                    <EditSvg
                        svgClassname="hover:border-red-500 hover:text-red-500"
                        onClick={() => handleEdit(idx)}
                    />
                    <DeleteSvg
                        svgClassname="hover:border-red-500 hover:text-red-500"
                        btnClassname="boder border-2 border-white rounded-full hover:border-red-500"
                        onClick={() => handleDelete(idx)}
                    />
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <Text text={issuedBy} className="text-white text-sm" />
                <Text
                    text={new Date(issuedDate).toLocaleDateString()}
                    className="text-gray-400 text-xs"
                />
            </div>
        </div>
    );
}
