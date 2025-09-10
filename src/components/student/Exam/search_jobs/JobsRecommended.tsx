'use client';
import { Bookmark, Share2 } from 'lucide-react';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { AppliedJob as JobProps } from '@/types/Jobs';

type JobsRecommendedProps = JobProps & {
    isBookmarked: boolean;
    onToggleBookmark: (id: number) => void;
    onShare: () => void;
};

export default function JobsRecommended({
    id,
    logo,
    company,
    title,
    location,
    workLocation,
    salary,
    deadline,
    isBookmarked,
    onToggleBookmark,
    onShare,
}: JobsRecommendedProps) {
    return (
        <div className="w-full p-2">
            <div className="flex items-center bg-midnightBlue rounded-2xl border border-transparent p-4 mt-0 hover:bg-black transition-all duration-200 ease-in-out hover:shadow-[0_19px_6px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-4 flex-shrink-0 basis-[30%]">
                    <Image
                        src={logo}
                        alt={company}
                        width={56}
                        height={56}
                        className="size-14 rounded-[12px] object-cover bg-white"
                    />
                    <div className="flex flex-col">
                        <Text text={title} weight="semibold" className="text-[13px] truncate" />
                        <Text className="text-xs text-periwinkleGray truncate">
                            {company}
                            {workLocation ? `, ${workLocation}` : ''}
                        </Text>
                        <Text
                            text={location}
                            weight="semibold"
                            className="text-xs text-gray-400 truncate"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center text-[13px] font-semibold text-center flex-shrink-0 basis-[20%]">
                    <Text>
                        {salary}
                        <br />
                        <Text
                            as="span"
                            text="Per Month"
                            size="xs"
                            weight="normal"
                            className="text-periwinkleGray"
                        />
                    </Text>
                </div>
                <div className="flex items-center justify-center text-[13px] font-semibold flex-shrink-0 basis-[20%]">
                    <Text text={deadline} />
                </div>
                <div className="flex items-center gap-5 justify-end flex-shrink-0 basis-[30%]">
                    <Link href="/student/dashboard/jobs-detail">
                        <Button
                            variant="outline"
                            className="h-[32.45px] w-[124px] text-xs border-2 border-green-400 text-green-400 rounded-full bg-white font-semibold hover:bg-green-50 transition"
                        >
                            View Job
                        </Button>
                    </Link>
                    <Bookmark
                        className={`cursor-pointer hover:text-blue-800 transition-colors ${
                            isBookmarked ? 'text-blue-800 fill-blue-800' : 'text-gray-400'
                        }`}
                        onClick={() => onToggleBookmark(id)}
                    />
                    <Share2 onClick={onShare} className="cursor-pointer text-white" />
                </div>
            </div>
        </div>
    );
}
