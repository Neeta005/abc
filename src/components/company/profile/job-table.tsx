'use client';
import React, { useState, useRef } from 'react';
import { JobTableProps } from '@/types/Jobs';
import JobRow from './job-rows';
import { useClickOutside } from '@/hooks/useClickOutside';
import { Text } from '@/components/ui/Text';

export default function JobTable({ columns, rows, applicant }: JobTableProps) {
    const [activeRow, setActiveRow] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(menuRef, () => setActiveRow(null), activeRow !== null);

    return (
        <div className="bg-inherit rounded-lg p-6 w-full text-white relative">
            <div className="flex justify-between text-center gap-2 text-sm font-semibold border-b border-gray-700 pb-3 mb-4">
                {columns?.map(({ label, width }, idx) => (
                    <div
                        key={idx}
                        className={`flex items-center justify-center`}
                        style={{ width: width || `${100 / columns?.length}%` }}
                    >
                        <Text text={label} size="sm" weight="semibold" />
                    </div>
                ))}
                <div className="flex items-center justify-center px-2 w-[48px]"></div>
            </div>
            {rows?.map((row, idx) => (
                <JobRow
                    applicant={applicant}
                    key={idx}
                    idx={idx}
                    row={row}
                    columns={columns}
                    activeRow={activeRow}
                    setActiveRow={setActiveRow}
                    menuRef={menuRef}
                />
            ))}
        </div>
    );
}
