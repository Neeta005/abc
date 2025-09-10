import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { EllipsisVertical, Video, Phone } from 'lucide-react';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

export default function ChatHeader({ className }: { className?: string }) {
    return (
        <header className={cn('flex items-center justify-between px-6 w-full py-4 ', className)}>
            <div className="flex items-center gap-3">
                <Image
                    src="/assets/avatar-1.png"
                    alt="Taimur"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <Text text="Taimur" weight="semibold" size="lg" />
                </div>
            </div>
            <div className="flex items-center gap-6 text-gray-400">
                <Button variant="ghost" size="icon" title="Call">
                    <Phone />
                </Button>
                <Button variant="ghost" size="icon" title="Video">
                    <Video />
                </Button>
                <Button variant="ghost" size="icon" title="More">
                    <EllipsisVertical />
                </Button>
            </div>
        </header>
    );
}
