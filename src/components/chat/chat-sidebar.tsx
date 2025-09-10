'use client';

import React, { useState } from 'react';
import { BasicTabs } from '@/components/ui/tabs';
import ContactsList from '@/components/chat/contacts-list';
import { ChatSidebarProps } from '@/types/ChatSidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ChatSidebar({
    contacts,
    onSelectContact,
    onCreateGroup,
}: ChatSidebarProps) {
    const [search, setSearch] = useState<string>('');

    const filteredContacts = contacts?.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <aside className="w-72 bg-steelBlue flex flex-col border-r border-stormySlate">
            <div className="flex items-center justify-end px-4 py-3 border-b border-stormySlate">
                <Button
                    className="bg-roseRed text-white w-[132px] h-[43px] rounded px-3 py-1 text-sm font-medium"
                    onClick={onCreateGroup}
                >
                    + Group
                </Button>
            </div>

            <div className="px-4 py-2">
                <BasicTabs
                    tabs={[
                        { label: 'Contacts', content: null },
                        { label: 'Groups', content: null },
                    ]}
                />
                <Input
                    className="w-full rounded bg-stormySlate text-white px-3 py-2 text-sm outline-none mt-2 border-0 h-auto"
                    placeholder="Search contacts"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <ContactsList contacts={filteredContacts} onSelectContact={onSelectContact} />
        </aside>
    );
}
