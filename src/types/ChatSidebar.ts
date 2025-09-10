export type Contact = {
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
    isOnline?: boolean;
};

export interface ChatSidebarProps {
    contacts: Contact[];
    onSelectContact: (contactId: string) => void;
    onCreateGroup?: () => void;
}

export interface ContactItemProps {
    contact: Contact;
    onSelectContact: (contactId: string) => void;
}
