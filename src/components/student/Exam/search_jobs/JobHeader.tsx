import { Bookmark } from 'lucide-react';
import React from 'react';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useBookmarks } from '@/hooks/useBookmarks';
export default function JobHeader({
    id,
    logo,
    titile,
    skills,
    appliedjob = false,
    onRevoke,
    revoked = false,
}: {
    id: number;
    logo: string;
    titile: string;
    skills: string;
    appliedjob?: boolean;
    onRevoke?: () => void;
    revoked: boolean;
}) {
    const { bookmarkedJobs, toggleBookmark, snackbarOpen, setSnackbarOpen, message } =
        useBookmarks();
    return (
        <div className="flex items-center justify-between w-full bg-stormySlate rounded-t-xl px-4 md:px-6 lg:px-8 py-4 md:py-6 min-h-[90px]">
            <div className="flex items-center gap-4">
                <Image src={logo} alt={'logo'} width={50} height={50} />
                <div className="min-w-0">
                    <Text
                        text={titile}
                        className="text-white text-lg md:text-2xl font-bold leading-tight truncate"
                    />
                    <Text
                        text={skills}
                        className="text-periwinkleGray text-sm md:text-base mt-1 text-wrap"
                    />
                </div>
            </div>

            {!appliedjob && (
                <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                    <Button className="bg-gradient-to-r from-brand-ff3b47 to-brand-ff6a1a text-white font-semibold px-4 md:px-8 py-2 rounded-lg text-sm md:text-lg shadow hover:opacity-90 transition">
                        Apply now
                    </Button>

                    <Bookmark
                        className={`cursor-pointer w-10 h-10 hover:text-blue-800 transition-colors ${
                            bookmarkedJobs.includes(id)
                                ? 'text-blue-800 fill-blue-800'
                                : 'text-gray-400'
                        }`}
                        onClick={() => toggleBookmark(id)}
                    />
                </div>
            )}
            {appliedjob && (
                <Button
                    className={`" text-white font-semibold px-4 md:px-8 py-2 rounded-lg text-sm md:text-lg shadow hover:opacity-90 transition ${revoked && 'pointer-events-none'}`}
                    onClick={onRevoke}
                >
                    {revoked ? 'Revoked' : 'Revoke Application'}
                </Button>
            )}
        </div>
    );
}
