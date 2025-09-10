import React from 'react';
import { mockedEmojis as emojis } from '@/mocks/mockedData';
import { Button } from '@/components/ui/button';

export default function EmojiPicker() {
    return (
        <div className="bg-shadowNavy">
            <div className="flex gap-2 bg-softSlateGray rounded-[44px] px-4 py-2 w-fit mb-1">
                {emojis?.map((emoji, idx) => (
                    <Button
                        key={idx}
                        variant="ghost"
                        className="text-2xl hover:scale-110 transition-transform p-1 h-auto"
                    >
                        {emoji}
                    </Button>
                ))}
            </div>
        </div>
    );
}
