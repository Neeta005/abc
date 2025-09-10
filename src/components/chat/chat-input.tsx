import React, { ChangeEvent, useRef } from 'react';
import { Image, Paperclip, Smile } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Message as MessageProps } from '@/types/MessageTypes';
export default function ChatInput({
    inputValue,
    setInputValue,
    onSendMessage,
}: {
    inputValue: string;
    setInputValue: (value: string) => void;
    onSendMessage: (mssg: MessageProps) => void;
}) {
    const handleInput = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setInputValue(value);
    };
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
        if (files && files.length > 0) {
            console.log('Selected file:', files[0]);
        }
    };
    const handleClick = () => {
        if (!inputValue.trim()) return;

        const newMessage: MessageProps = {
            avatar: '/images/user-avatar.png',
            name: 'You',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            message: inputValue,
            isOwn: true,
        };

        onSendMessage(newMessage);
        setInputValue('');
    };

    return (
        <div className="flex flex-col gap-2 bg-stormySlate w-full border-t border-darkSlateBlue py-4">
            <div className="flex items-center gap-3">
                <div>
                    <Paperclip
                        className="size-6 text-white cursor-pointer"
                        onClick={handleButtonClick}
                    />

                    <Input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>
                <Input
                    className="flex-1 rounded bg-steelSlate text-white px-4 py-3 text-sm outline-none border-0 h-auto"
                    type="text"
                    value={inputValue}
                    onChange={handleInput}
                    placeholder="Type a message..."
                />
                <Image className="size-6 text-white cursor-pointer" />
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-2xl text-vividSkyBlue"
                    onClick={handleClick}
                >
                    ➤
                </Button>
            </div>
        </div>
    );
}
