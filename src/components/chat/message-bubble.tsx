import React from 'react';
import Image from 'next/image';
import MessageBubbleProps from '@/types/MessageBubble';
import { Text } from '@/components/ui/Text';

export default function MessageBubble({ avatar, name, time, message, isOwn }: MessageBubbleProps) {
    return (
        <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-2`}>
            {!isOwn && (
                <Image
                    src={avatar}
                    alt={name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full mr-3 self-end"
                />
            )}

            <div
                className={`max-w-lg ${
                    isOwn ? 'bg-blue-700 text-white' : 'bg-ironSlateBlue text-white'
                } rounded-lg px-4 py-3 relative`}
            >
                <Text text={message} size="base" />

                <Text
                    as="div"
                    className="text-xs text-gray-300 mt-1 flex items-center gap-1 justify-end"
                >
                    <Text as="span">•</Text>
                    <Text as="span">{time}</Text>
                </Text>
            </div>

            {isOwn && (
                <Image
                    src={avatar}
                    alt={name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full ml-3 self-end"
                />
            )}
        </div>
    );
}
