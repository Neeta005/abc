import React from 'react';
import { Text } from '@/components/ui/Text';

export default function StatCard({
    icon,
    count,
    label,
}: {
    icon: JSX.Element;
    count: string;
    label: string;
}) {
    return (
        <div className="flex flex-col items-center py-10 px-10 gap-4 rounded-xl w-full bg-gradient-to-b from-[rgba(22,19,27,0.8)] to-[rgba(22,19,27,0.6)] border border-warmOrange shadow-[0px_4px_20px_rgba(0,0,0,0.25)] min-w-[240px]">
            <div className="mb-3">{icon}</div>
            <Text as="h3" text={count} size="3xl" weight="bold" />
            <Text text={label} size="sm" className="text-gray-300" />
        </div>
    );
}
