export type Notification = {
    id: number;
    type: 'action' | 'view' | 'reply' | 'file';
    title: string;
    subtitle: string;
    isRead: boolean;
    message?: string;
    file?: {
        name: string;
        size: string;
    };
    avatar?: string;
    timestamp: string;
    actions?: {
        label: string;
        onClick: () => void;
        variant?: 'contained' | 'outlined';
    }[];
};

export type NotificationListProps = {
    notifications: Notification[];
    onMarkAllAsRead?: () => void;
};
