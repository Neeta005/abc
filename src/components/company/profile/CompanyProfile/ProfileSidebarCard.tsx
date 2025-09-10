import React from 'react';
import { Text } from '@/components/ui/Text';
export default function ProfileSidebarCard({
    user,
    status,
    statusColor,
    detail,
}: {
    user: string;
    status: string;
    statusColor: string;
    detail: string;
}) {
    return (
        <div className="bg-steelBlue rounded-lg p-3 text-white text-sm gap-3 flex flex-col">
            <div className="flex justify-between">
                <Text as="span" text={user} weight="medium" />
                <Text as="span" text={status} size="xs" className={statusColor} />
            </div>
            <Text as="span" text={detail} size="xs" className="text-gray-500" />
        </div>
    );
}
