import React from 'react';
import { Text } from '@/components/ui/Text';
export default function DashboardCard({
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
        <div className="bg-steelBlue rounded-lg  text-white p-3 flex flex-col max-w-[209px] max-h-[43px]">
            <div className="flex justify-between">
                <Text as="span" text={user} className="text-[7.22px]" />
                <Text as="span" text={status} className={`${statusColor} text-[7.22px]`} />
            </div>
            <Text as="span" text={detail} className="text-gray-500 text-[7.22px]" />
        </div>
    );
}
