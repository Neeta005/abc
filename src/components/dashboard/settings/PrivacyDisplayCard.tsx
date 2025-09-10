import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/Text';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const timezones: string[] = [
    'UTC-12:00',
    'UTC-11:00',
    'UTC-10:00',
    'UTC-09:00',
    'UTC-08:00',
    'UTC-07:00',
    'UTC-06:00',
    'UTC-05:00',
    'UTC-04:00',
    'UTC-03:00',
    'UTC-02:00',
    'UTC-01:00',
    'UTC+00:00',
    'UTC+01:00',
    'UTC+02:00',
    'UTC+03:00',
    'UTC+04:00',
    'UTC+05:00',
    'UTC+06:00',
    'UTC+07:00',
    'UTC+08:00',
    'UTC+09:00',
    'UTC+10:00',
    'UTC+11:00',
    'UTC+12:00',
    'UTC+13:00',
    'UTC+14:00',
];

function PrivacyDisplayCard() {
    const [selectedTz, setSelectedTz] = useState('UTC+05:00');

    return (
        <Card className="mb-8 bg-steelBlue">
            <CardHeader className="border-none pb-0">
                <Text as="span" text="PRIVACY & DISPLAY" size="lg" weight="bold" />
            </CardHeader>
            <CardContent>
                <div className="mb-6">
                    <Text
                        text="Users who can message you directly"
                        weight="semibold"
                        className="mb-2"
                    />
                    <div className="flex gap-8 mb-4">
                        <Text as="label" className="flex items-center gap-2 text-white">
                            <Input type="radio" name="msg" defaultChecked className="w-3 h-3" />{' '}
                            Anyone
                        </Text>
                        <Text as="label" className="flex items-center gap-2 text-white">
                            <Input type="radio" name="msg" className="w-3 h-3" /> Only People You
                            Follow
                        </Text>
                    </div>
                    <Text
                        text="Users who can see your Profile"
                        weight="semibold"
                        className="mb-2"
                    />
                    <div className="flex gap-8 mb-4">
                        <Text as="label" className="flex items-center gap-2 text-white">
                            <Input type="radio" name="profile" defaultChecked className="w-3 h-3" />{' '}
                            Anyone
                        </Text>
                        <Text as="label" className="flex items-center gap-2 text-white">
                            <Input type="radio" name="profile" className="w-3 h-3" /> Only People
                            You Know
                        </Text>
                        <Text as="label" className="flex items-center gap-2 text-white">
                            <Input type="radio" name="profile" className="w-3 h-3" /> No One
                        </Text>
                    </div>

                    <div className="w-[20%]">
                        <Select value={selectedTz} onValueChange={setSelectedTz}>
                            <SelectTrigger className="bg-onyxBlue border border-gray-400 text-white min-w-[180px] flex justify-between items-center">
                                <SelectValue placeholder="Select Timezone" />
                            </SelectTrigger>
                            <SelectContent className="bg-boldSlateBlue border border-gray-600 text-white rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                                {timezones.map((tz) => (
                                    <SelectItem key={tz} value={tz}>
                                        {tz}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default PrivacyDisplayCard;
