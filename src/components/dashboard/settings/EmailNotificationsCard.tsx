import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Divider } from '@/components/ui/divider';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';

function EmailNotificationsCard() {
    return (
        <Card className="mb-8 bg-steelBlue">
            <CardHeader className="border-none pb-0">
                <Text as="span" text="EMAIL NOTIFICATIONS" size="lg" weight="bold" />
            </CardHeader>
            <CardContent>
                <div className="mb-6 border border-gray-400 rounded-lg p-4">
                    <Text text="Notification Summary" weight="semibold" className="mb-2" />
                    <Text
                        text="Receive an email summary of notifications instead of individual emails"
                        className="text-gray-300 mb-2"
                    />
                    <div className="flex gap-8 mb-2">
                        <Text as="label" className="flex items-center gap-2 text-white">
                            <Input type="radio" name="notif-summary" /> On
                        </Text>
                        <Text as="label" className="flex items-center gap-2 text-white">
                            <Input type="radio" name="notif-summary" defaultChecked /> Off
                        </Text>
                    </div>
                </div>
                <div className="mb-4">
                    <Text weight="semibold" className="mb-2">
                        Network Activity{' '}
                        <Text as="span" weight="normal" className="text-gray-400 italic">
                            Email me a summary of:
                        </Text>
                    </Text>
                    <Text as="label" className="flex items-center gap-2 text-white">
                        <Input type="checkbox" className="w-3 h-3" /> New Activity on projects and
                        moodboards by my network
                    </Text>
                </div>
                <Divider className="my-4 bg-white" />
                <div className="mb-4">
                    <Text weight="semibold" className="mb-2">
                        Actionable Email Notifications{' '}
                        <Text as="span" weight="normal" className="text-gray-400 italic">
                            Email me immediately when someone:
                        </Text>
                    </Text>
                    <div className="flex flex-col gap-2">
                        <Text as="label" className="flex items-center gap-2 text-white">
                            <Input type="checkbox" className="w-3 h-3" /> Invites me to co-own a
                            project
                        </Text>
                        <Text as="label" className="flex items-center gap-2 text-white">
                            <Input type="checkbox" className="w-3 h-3" /> Invites me to co-own a
                            moodboard
                        </Text>
                        <Text as="label" className="flex items-center gap-2 text-white">
                            <Input type="checkbox" className="w-3 h-3" /> Sends me a direct message
                        </Text>
                        <Text as="label" className="flex items-center gap-2 text-white">
                            <Input type="checkbox" className="w-3 h-3" /> Requests to join one of my
                            teams
                        </Text>
                        <Text as="label" className="flex items-center gap-2 text-white">
                            <Input type="checkbox" className="w-3 h-3" /> Requests that I join their
                            team
                        </Text>
                        <Text as="label" className="flex items-center gap-2 text-white">
                            <Input type="checkbox" className="w-3 h-3" /> Requests that I add their
                            project to one of my teams
                        </Text>
                    </div>
                </div>
                <Divider className="my-4 bg-white" />
                <div className="mt-4">
                    <Text weight="semibold" className="mb-2">
                        Newsletters{' '}
                        <Text as="span" weight="normal" className="text-gray-400 italic">
                            I would like to receive:
                        </Text>
                    </Text>
                    <Text as="label" className="mb-4 flex items-center gap-2 text-white">
                        <Input type="checkbox" className="w-3 h-3" /> Announcements and special
                        offers{' '}
                        <Text as="span" size="xs" className="text-gray-400">
                            (Rarely)
                        </Text>
                    </Text>
                </div>
                <Divider className="my-5 bg-white" />
                <div className="mt-4">
                    <Text weight="semibold" className="mb-2">
                        Jobs{' '}
                        <Text as="span" weight="normal" className="text-gray-400 italic">
                            Email me immediately when someone:
                        </Text>
                    </Text>
                    <Text as="label" className="flex items-center gap-2 text-white">
                        <Input type="checkbox" className="w-3 h-3" /> Applies for a job
                    </Text>
                </div>
            </CardContent>
        </Card>
    );
}

export default EmailNotificationsCard;
