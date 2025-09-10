'use client';
import React, { useState } from 'react';
import ChatHeader from '@/components/chat/chat-header';
import ChatInput from '@/components/chat/chat-input';
import ChatMessages from '@/components/chat/chat-messages';
import ChatSidebar from '@/components/chat/chat-sidebar';
import EmojiPicker from 'emoji-picker-react';
import { Smile } from 'lucide-react';
import { mockedMessages } from '@/mocks/mockedChat';
import { Message as MessageProps } from '@/types/MessageTypes';
import CreateGroup from '@/components/chat/create-group';

const MessageClient = () => {
    const [messages, setMessages] = useState<MessageProps[]>(mockedMessages);
    const [inputValue, setInputValue] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const [showGroup, setShowGroup] = useState(false);
    const handleEmojiClick = (emojiData: any) => {
        setInputValue((prev) => prev + emojiData.emoji);
    };
    const handleAddMessage = (mssg: MessageProps) => {
        setMessages((prev) => [...prev, mssg]);
    };
    return (
        <div className="bg-twilightBlue flex gap-5  max-h-full">
            {showGroup && (
                <div className="fixed inset-0 flex justify-center items-center z-[999]">
                    <CreateGroup />
                </div>
            )}
            <div className="flex w-full">
                <ChatSidebar
                    contacts={[]}
                    onSelectContact={(contactId: string) => {}}
                    onCreateGroup={() => setShowGroup(!showGroup)}
                />

                <div className="flex flex-col w-full  overflow-y-auto">
                    <div className="h-full overflow-y-auto">
                        <div className="sticky top-0 z-10 w-full">
                            <ChatHeader className="border-b border shadow-sm bg-royalSlateBlue border-white" />
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            <ChatMessages messages={messages} />
                        </div>
                    </div>

                    <div className="relative w-full bg-stormySlate px-4 py-2 flex items-center gap-2">
                        <div
                            className="relative group"
                            onMouseEnter={() => setShowPicker(true)}
                            onMouseLeave={() => setShowPicker(false)}
                        >
                            <Smile className="text-white cursor-pointer" />

                            {showPicker && (
                                <div className="absolute bottom-[20px] left-0 z-50">
                                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                                </div>
                            )}
                        </div>

                        <ChatInput
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            onSendMessage={handleAddMessage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageClient;
