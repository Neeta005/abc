'use client';
import React from 'react';
import { ContactItemProps } from '@/types/ChatSidebar';
import Image from 'next/image';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

export default function ContactItem({ contact, onSelectContact }: ContactItemProps) {
    return (
        <Button
            variant="ghost"
            className="flex items-center gap-3 px-4 py-2 hover:bg-stormySlate rounded h-auto justify-start w-full"
            onClick={() => onSelectContact(contact?.id)}
        >
            <Image
                src={contact?.avatar}
                alt={contact?.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
            />
            <div>
                <Text
                    as="div"
                    className="text-white font-medium text-sm flex items-center gap-2 text-left"
                >
                    {contact?.name}
                    {contact?.isOnline && (
                        <span
                            className="w-2 h-2 bg-green-400 rounded-full inline-block"
                            title="Online"
                        />
                    )}
                </Text>
                <Text
                    text={contact?.lastMessage}
                    className="text-xs text-gray-400 truncate max-w-[160px] text-left"
                />
            </div>
        </Button>
    );
}
