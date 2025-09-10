import React from 'react';
import { Copy, Trash2 } from 'lucide-react';
import { EditSvg, DeleteSvg } from '../../shared/deleteEdit';
import JobPostedProps from '@/types/Jobs';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';
import Link from 'next/link';
const JobPosted = ({
    title,
    postedDate,
    openings,
    stipend,
    interviewMode,
    workHours,
    type,
    skills,
    onEdit,
    onDelete,
    onCopy,
}: JobPostedProps) => {
    return (
        <div className="bg-abyssBlue border-l-[10px] border-red-700 rounded-md px-6 py-3 mr-10 font-poppins">
            <div className="flex justify-between items-start mb-2">
                <Text text={title} size="2xl" weight="semibold" />
                <Text text={`Posted: ${postedDate}`} size="sm" className="text-neutralGray" />
                <div className="flex flex-col items-end text-sm text-softSlateGray">
                    <Text>
                        Work hours:{' '}
                        <Text
                            as="span"
                            text={workHours}
                            weight="medium"
                            className="text-warmOrange"
                        />
                    </Text>
                    <Text>
                        Type:{' '}
                        <Text as="span" text={type} weight="medium" className="text-warmOrange" />
                    </Text>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 w-[328px]">
                {skills?.map((skill) => (
                    <span
                        key={skill}
                        className="bg-pewterGray text-white px-3 py-1 rounded-md text-sm border border-white"
                    >
                        <Text text={skill} size="sm" />
                    </span>
                ))}
            </div>
            <div className="flex justify-between items-end text-neutralGray text-[16px]">
                <div className="flex gap-6">
                    <Text>
                        Interview mode{' '}
                        <Text
                            as="span"
                            text={interviewMode}
                            weight="semibold"
                            className="text-white"
                        />
                    </Text>
                    <Text>
                        Stipend{' '}
                        <Text as="span" text={stipend} weight="semibold" className="text-white" />
                    </Text>
                    <Text>
                        No. of Openings{' '}
                        <Text as="span" text={openings} weight="semibold" className="text-white" />
                    </Text>
                </div>

                <div className="flex justify-end items-center gap-4">
                    <Button variant="gradient" className="text-sm font-medium">
                        <Link href={'/applicants'}>View Applicants</Link>
                    </Button>

                    <EditSvg onClick={onEdit} />

                    <DeleteSvg btnClassname="border-2 rounded-full border-white" />
                </div>
            </div>
        </div>
    );
};

export default JobPosted;
