import { Check, Search, User, X } from 'lucide-react';
import React, { useState } from 'react';
import AddMembersCard from './add-members-card';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const users: { name: string; avatar: string }[] = Array(6).fill({
    name: 'Boampong',
    avatar: '/assets/avatar-1.png',
});

export default function CreateGroup() {
    const [groupName, setGroupName] = useState<string>('');
    const [search, setSearch] = useState<string>('');
    const [addedIdx, setAddedIdx] = useState<number | null>(null);

    return (
        <div className="bg-midnightBlue rounded-2xl p-3 w-[714px] flex flex-col gap-1">
            <Text as="h2" text="Create Group" size="3xl" weight="bold" className="mb-2" />
            <div className="flex items-center gap-4 mb-2">
                <div className="size-16 rounded-full border-2 border-neutralGray flex items-center justify-center bg-ironSlateBlue relative">
                    <User />
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute bottom-0 right-0 w-7 h-7 bg-white rounded-full border-2 border-darkSlateBlue flex items-center justify-center text-sunsetRed text-2xl font-bold hover:bg-gray-200"
                    >
                        +
                    </Button>
                </div>
                <Input
                    className="flex-1 bg-transparent border-b-[0.5px] border-red-500 text-white text-xl px-2 py-1 outline-none placeholder-brand-a0a0a0 rounded-none"
                    placeholder="Name your Group"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                />
            </div>
            <div className="flex items-center bg-transparent border border-warmOrange rounded-lg px-4 py-2 mb-2">
                <Input
                    className="flex-1 bg-transparent text-white text-base outline-none placeholder-brand-a0a0a0 border-none h-auto p-0"
                    placeholder="Search for people to add..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="ghost" size="icon" className="text-neutralGray text-xl mr-2">
                    <X size={16} />
                </Button>
                <Button variant="ghost" size="icon" className="text-neutralGray text-xl">
                    <Search />
                </Button>
            </div>
            <AddMembersCard
                users={users?.filter((user) =>
                    user.name.toLowerCase().includes(search.toLowerCase())
                )}
                setAddedIdx={setAddedIdx}
                addedIdx={addedIdx}
            />
            <div className="flex justify-end gap-4 mt-6">
                <Button
                    variant="ghost"
                    className="text-neutralGray text-lg font-semibold px-6 py-2 rounded-lg hover:bg-darkSlateBlue"
                >
                    Cancel
                </Button>
                <Button className="bg-gradient-to-r from-red-500 to-red-400 text-white text-lg font-semibold px-8 py-2 rounded-lg">
                    Create
                </Button>
            </div>
        </div>
    );
}
