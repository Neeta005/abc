import { Check } from 'lucide-react';
import React from 'react';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AddMembersCard({
    users,
    setAddedIdx,
    addedIdx,
}: {
    users: { name: string; avatar: string }[];
    setAddedIdx: (val: number | null) => void;
    addedIdx: number | null;
}) {
    return (
        <div className="flex flex-col gap-2">
            {users?.map(({ name, avatar }, idx) => (
                <div
                    key={idx}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg ${
                        addedIdx === idx && 'bg-shadowSlate'
                    }`}
                >
                    <div className="flex items-center gap-4">
                        <Image
                            src={avatar}
                            alt={name}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <Text text={name} size="lg" />
                    </div>
                    {addedIdx === idx ? (
                        <Button
                            variant="ghost"
                            className="bg-shadowSlate text-white px-6 py-2 rounded-lg border border-transparent flex items-center gap-2"
                        >
                            <Check className="w-4 h-4" />
                        </Button>
                    ) : (
                        <Button
                            className="bg-leafGreen text-white px-6 py-2 rounded-lg font-semibold"
                            onClick={() => setAddedIdx(idx)}
                        >
                            + Add
                        </Button>
                    )}
                </div>
            ))}
        </div>
    );
}
