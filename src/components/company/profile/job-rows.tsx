import React, { MouseEvent } from 'react';
import { EllipsisVertical } from 'lucide-react';
import JobsTableMenu from './jobs-menu';
import { Button } from '@/components/ui/button';
import { JobRowProps } from '@/types/Jobs';
import { Input } from '@/components/ui/input';
import ColumnEntry from './column';
export default function JobRow({
    idx,
    applicant = false,
    row,
    columns,
    activeRow,
    setActiveRow,
    menuRef,
}: JobRowProps) {
    const handleClick = (e: MouseEvent) => {
        e.stopPropagation();
        setActiveRow(activeRow === idx ? null : idx);
    };

    return (
        <div key={idx} className="relative">
            <div className="flex justify-between gap-2 bg-steelBlue w-full text-sm rounded-lg px-2 py-2 hover:bg-shadowNavy transition">
                <div className="flex justify-center items-center">
                    <Input type="checkbox" className="cursor-pointer w-3 h-3" />
                </div>
                {columns?.map(({ key, width }, indx) => (
                    <ColumnEntry
                        key={indx}
                        keyName={key}
                        row={row}
                        columns={columns}
                        width={width}
                        applicant={applicant}
                    />
                ))}

                {!applicant && (
                    <div className="px-2 flex items-center justify-center w-12">
                        <Button
                            variant="ghost"
                            className="cursor-pointer p-1 h-auto"
                            onClick={handleClick}
                        >
                            <EllipsisVertical className="text-white" />
                        </Button>
                    </div>
                )}
            </div>

            {activeRow === idx && <JobsTableMenu menuRef={menuRef} />}
        </div>
    );
}
