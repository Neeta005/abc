import React from 'react';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';

const StatusButtons = ({
    all = 0,
    newResponse = 0,
    notViewed = 0,
    actionPending = 0,
}: {
    all?: number;
    newResponse?: number;
    notViewed?: number;
    actionPending?: number;
}) => {
    const statuses: { label: string; count: number }[] = [
        { label: 'All', count: all },
        { label: 'New Response', count: newResponse },
        { label: 'Not Viewed', count: notViewed },
        { label: 'Action Pending', count: actionPending },
    ];

    return (
        <div className="flex flex-wrap gap-3 text-white px-4 py-3 rounded-lg text-sm">
            {statuses.map(({ label, count }) => (
                <Button
                    key={label}
                    className="bg-deepSeaNavy px-4 py-2 rounded-full"
                    variant={'default'}
                >
                    {label} <Text as="span" text={count.toString()} className="ml-1" />
                </Button>
            ))}
        </div>
    );
};

export default StatusButtons;
