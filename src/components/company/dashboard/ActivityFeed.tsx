import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { mockedActivities as activities } from '@/mocks/mockedData';
import { Text } from '@/components/ui/Text';

const ActivitFeed = () => (
    <div className="text-white rounded-xl p-6 bg-steelBlue w-full px-4">
        <div className="flex items-center justify-between mb-2">
            <Text as="h2" text="Activity Feed" className="text-lg font-semibold" />
            <Select>
    <SelectTrigger className="w-[130px] h-9 rounded-md border border-white bg-transparent text-white text-sm">
        <SelectValue placeholder="All Activity" /> {/* <-- Shows when nothing is selected */}
    </SelectTrigger>
    <SelectContent>
        <SelectItem value="interview">Interview</SelectItem>
        <SelectItem value="organizational">Organizational</SelectItem>
        <SelectItem value="manager">With Manager</SelectItem>
    </SelectContent>
</Select>

        </div>

        <div className="flex flex-col gap-4">
            {activities?.map(({ avatarColor, name, action, job, time, tag, tagColor }, index) => (
                <div
                    key={index}
                    className="grid grid-cols-[1fr_auto] gap-4 justify-between items-center mb-1"
                >
                <div className="flex gap-2 items-center">
    {/* Avatar Circle */}
    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
        <img
            src="\icons\avtar.jpg" // Replace this with the avatar URL instead of a color
            alt={name}
            className="w-full h-full object-cover"
        />
    </div>

    {/* Text Content */}
    <div>
        <div className="flex flex-wrap gap-1 text-white text-[9px]">
            <Text as="span" text={name} className="font-semibold mr-1" />
            <Text as="span" className="text-gray-500" text={action} />
            <Text as="span" text={job} className="font-semibold" />
        </div>
        <Text as="p" text={time} className="text-gray-400 text-xs" />
    </div>
</div>

                <div
    className={`text-[8px] px-3 py-1 rounded-md text-white ${
        tag === 'Applying'
            ? 'bg-blue-500/20'   // stronger semi-transparent blue
            : tag === 'Sign Up'
            ? 'bg-green-500/20'  // stronger semi-transparent green
            : `${tagColor}/80`    // other tags with opacity
    }`}
>
    <Text as="p" text={tag} />
</div>

                </div>
            ))}
        </div>
    </div>
);

export default ActivitFeed;
