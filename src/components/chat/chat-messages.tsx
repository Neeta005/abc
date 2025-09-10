import React, { useState } from 'react';
import MessageBubble from '@/components/chat/message-bubble';
import { Message } from '@/types/MessageTypes';
export default function ChatMessages({ messages }: { messages: Message[] }) {
    return (
        <div className="flex-1 h-full overflow-y-auto px-8 py-6 flex flex-col gap-6 bg-shadowNavy ">
            {messages?.map(({ avatar, name, time, message, isOwn }, idx) => (
                <MessageBubble
                    key={idx}
                    avatar={avatar}
                    name={name}
                    time={time}
                    message={message}
                    isOwn={isOwn}
                />
            ))}
        </div>
    );
}
