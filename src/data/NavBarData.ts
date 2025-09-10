import { Bell, User, Wallet, Settings, LogOut, Menu } from 'lucide-react';
export const navBarDate: { label: string; href: string }[] = [
    { label: 'Why internGlobal?', href: '#' },
    { label: 'How it works', href: '#' },
    { label: 'Pricing', href: '#' },
];

export const links = [
    { href: '/student/profile', icon: User, label: 'Your Profile' },
    { href: '/wallet', icon: Wallet, label: 'Wallet' },
    { href: '/student/dashboard/settings', icon: Settings, label: 'Settings' },
    { href: '/home', icon: LogOut, label: 'Log Out' },
];
