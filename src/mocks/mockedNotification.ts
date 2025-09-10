import { Notification } from '@/types/NotificationTypes';
export const mockNotifications: Notification[] = [
    {
        id: 1,
        type: 'action',
        title: 'New Feature Available',
        subtitle: 'Check out the latest update',
        isRead: false,
        message: 'We just released a new feature that you will love!',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        timestamp: '2025-08-07T10:00:00Z',
        actions: [
            {
                label: 'Update Now',
                onClick: () => console.log('Update clicked'),
                variant: 'contained',
            },
            {
                label: 'Remind Me Later',
                onClick: () => console.log('Remind clicked'),
                variant: 'outlined',
            },
        ],
    },
    {
        id: 2,
        type: 'view',
        title: 'Weekly Report',
        subtitle: 'Your weekly summary is ready',
        isRead: true,
        message: 'Review your productivity and tasks from last week.',
        avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
        timestamp: '2025-08-06T08:30:00Z',
    },
    {
        id: 3,
        type: 'reply',
        title: 'New Comment',
        subtitle: 'John replied to your post',
        isRead: false,
        message: 'Great post! I really enjoyed reading it.',
        avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
        timestamp: '2025-08-07T09:45:00Z',
    },
    {
        id: 4,
        type: 'file',
        title: 'Invoice Received',
        subtitle: 'You have a new invoice',
        isRead: true,
        file: {
            name: 'invoice_August.pdf',
            size: '250 KB',
        },
        timestamp: '2025-08-05T15:00:00Z',
    },
];
