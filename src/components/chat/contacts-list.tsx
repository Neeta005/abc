'use client';
import React from 'react';
import { ChatSidebarProps } from '@/types/ChatSidebar';
import ContactItem from './contact-item';
import { Text } from '@/components/ui/Text';

export default function ContactsList({ contacts, onSelectContact }: ChatSidebarProps) {
    return (
        <div className="flex-1 overflow-y-auto">
            {contacts?.length === 0 ? (
                <Text text="No contacts found" className="text-gray-400 text-center mt-8" />
            ) : (
                contacts?.map((contact) => (
                    <ContactItem
                        key={contact?.id}
                        contact={contact}
                        onSelectContact={onSelectContact}
                    />
                ))
            )}
        </div>
    );
}
