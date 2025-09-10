'use client';

import Image from 'next/image';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Notification, NotificationListProps } from '@/types/NotificationTypes';
import avatar from '@/assets/avatars/avatar-4.png';
export default function NotificationList({
    notifications,
    onMarkAllAsRead,
}: NotificationListProps) {
    return (
        <div className="w-[380px] max-h-[600px] overflow-y-auto bg-midnightBlue p-4 rounded-xl shadow-lg text-white">
            <div className="flex justify-between items-center mb-4">
                <Text text="Notifications" size="lg" weight="bold" />
                <button
                    className="text-sm text-white/80 hover:text-white flex items-center gap-1"
                    onClick={onMarkAllAsRead}
                >
                    Mark all as read
                </button>
            </div>

            {notifications.map((n) => (
                <div
                    key={n.id}
                    className="border-t border-white/10 py-4 first:border-none flex flex-col gap-2"
                >
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image
                                src={`${avatar.src}`}
                                alt={n.title}
                                width={40}
                                height={40}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className="flex-1">
                            <Text
                                text={
                                    <>
                                        <span className="font-bold">{n.title}</span>{' '}
                                        <span className="text-white/90">{n.subtitle}</span>
                                    </>
                                }
                                as="div"
                                size="sm"
                            />

                            {n.type === 'action' && (
                                <div className="flex gap-2 mt-2">
                                    {n.actions?.map((action, idx) => (
                                        <Button
                                            key={idx}
                                            variant={'secondary'}
                                            size="sm"
                                            onClick={action.onClick}
                                        >
                                            {action.label}
                                        </Button>
                                    ))}
                                </div>
                            )}

                            {n.type === 'reply' && n.message && (
                                <blockquote className="mt-2 text-sm text-white/70 border-l-4 pl-3 border-white/20 italic">
                                    {n.message}
                                </blockquote>
                            )}

                            {n.type === 'file' && n.file && (
                                <div className="mt-2 flex items-center gap-2  rounded-md text-sm">
                                    <Download className="w-4 h-4 text-white" />
                                    <span className="font-medium">{n.file.name}</span>
                                    <span className="text-white/50 text-xs ml-auto">
                                        {n.file.size}
                                    </span>
                                </div>
                            )}

                            {n.type === 'reply' && (
                                <Button
                                    className="mt-2"
                                    variant={'secondary'}
                                    size="sm"
                                    onClick={() => alert('Reply clicked')}
                                >
                                    Reply
                                </Button>
                            )}

                            <Text
                                text={n.timestamp}
                                size="xs"
                                className="text-white/50 mt-2 block"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
