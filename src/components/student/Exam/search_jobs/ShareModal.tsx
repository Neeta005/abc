'use client';

import React, { useState, RefObject } from 'react';
import { X, Linkedin, Mail, Send } from 'lucide-react';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { shareOptions } from './ShareOptions';

export default function ShareModal({
    url = 'https://youtu.be/TGxKkBC6L2k',
    onClose,
    modalRef,
}: {
    url?: string;
    onClose: () => void;
    modalRef: RefObject<HTMLDivElement>;
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div
            className="bg-midnightNavy p-6 rounded-xl w-fit sm:w-[480px] relative text-white font-sans"
            ref={modalRef}
        >
            <header className="flex justify-between items-center mb-6">
                <Text as="h2" text="Share" size="lg" weight="semibold" />
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    aria-label="Close"
                    className="text-white hover:text-gray-300"
                >
                    <X size={20} />
                </Button>
            </header>

            <div className="flex gap-4 sm:gap-6 mb-6 justify-center">
                {shareOptions?.map((option) => (
                    <Button
                        key={option.name}
                        variant="secondary"
                        aria-label={`Share on ${option.name}`}
                        className="flex flex-col bg-inherit hover:translate-y-3 hover:transition-transform items-center justify-center gap-2 h-auto p-0"
                        onClick={() => option.onClick(url)}
                    >
                        <div className={`rounded-full p-3 ${option.bgColor}`}>{option.icon}</div>
                        <Text as="span" text={option.name} size="sm" />
                    </Button>
                ))}
            </div>

            <div className="flex items-center gap-4 bg-sapphireDeep rounded-lg px-4 py-3">
                <Input
                    type="text"
                    value={url}
                    readOnly
                    className="flex-1 bg-transparent text-white text-sm outline-none cursor-text select-all border-none h-auto p-0"
                    onClick={(e) => (e.target as HTMLInputElement).select()}
                />
                <Button
                    onClick={handleCopy}
                    className={`rounded-full px-5 py-2 text-sm font-semibold text-white ${
                        copied ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700'
                    } transition-colors`}
                >
                    {copied ? 'Copied' : 'Copy'}
                </Button>
            </div>
        </div>
    );
}
