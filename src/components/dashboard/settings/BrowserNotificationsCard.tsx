import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/Text';

function BrowserNotificationsCard() {
    return (
        <Card className="mb-8 bg-steelBlue">
            <CardHeader className="border-none pb-0">
                <Text as="span" text="BROWSER NOTIFICATIONS" size="lg" weight="bold" />
            </CardHeader>
            <CardContent>
                <div className="mb-6">
                    <Text text="Browser Notifications" weight="semibold" className="mb-2" />
                    <Text
                        text="Get notifications to stay up to date with Jobs"
                        className="text-gray-300 mb-2"
                    />
                    <div className="flex gap-8 mb-4">
                        <Text as="label" className="flex items-center gap-2 text-white">
                            <Input type="radio" name="browser-notif" defaultChecked /> On
                        </Text>
                        <Text as="label" className="flex items-center gap-2 text-white">
                            <Input type="radio" name="browser-notif" /> Off
                        </Text>
                    </div>
                </div>
                <div className="mb-4">
                    <Text text="Creatives You Follow" weight="semibold" className="mb-2" />
                    <Text
                        text="When you turn on notifications from people you follow, you’ll get a notification directly from your browser when your favorite creators publish new work or Conversation"
                        className="text-gray-300 mb-2"
                    />
                    <Text as="label" className="flex items-center gap-2 text-white">
                        <Input type="checkbox" className="w-3 h-3" defaultChecked /> New Projects
                    </Text>
                </div>
            </CardContent>
        </Card>
    );
}

export default BrowserNotificationsCard;
