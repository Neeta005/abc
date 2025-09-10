import React from 'react';
import Image from 'next/image';
import { ChevronDown, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';

const CommentBox = ({ onClick }: { onClick: () => void }) => {
    return (
        <div className="bg-midnightBlue md:w-[500px] lg:max-w-3xl p-8   flex flex-col gap-6 relative">
            <Button
                variant="ghost"
                className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center rounded-xl border hover:bg-slateBlue text-neutralGray text-xl p-0"
                onClick={onClick}
            >
                X
            </Button>
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-vibrantSky overflow-hidden">
                    <Image
                        src="/assets/avatar-1.png"
                        alt="User avatar"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                    />
                </div>
                <Text as="span" text="John Doe" size="2xl" weight="bold" />
            </div>
            <textarea
                className="w-full min-h-[180px] bg-admiralBlue text-neutralGray text-lg rounded-xl p-5 border border-neutralGray outline-none resize-none"
                placeholder="Write your comment or question here"
            />
            <div className="flex gap-4 mt-2">
                <Button variant="secondary">
                    <ImageIcon />
                    Add media
                </Button>
                <div className="relative">
                    <Button variant="secondary">
                        Add Category
                        <ChevronDown />
                    </Button>
                </div>
            </div>
            <hr className="border-t border-neutralGray mt-4" />
            <div className="flex justify-end mt-4">
                <Button variant="gradient" className=" font-semibold" onClick={onClick}>
                    Leave Comment
                </Button>
            </div>
        </div>
    );
};

export default CommentBox;
