'use client';
import { Bell, User, Wallet, Settings, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';
import Logo from '@/assets/logos/logo-interns.png';
import avatar6 from '@/assets/avatars/avatar-6.png';
import Image from 'next/image';
import Link from 'next/link';
import { links } from '@/data/NavBarData';
import { useState } from 'react';
import NotificationList from './Notifications';
import { mockNotifications } from '@/mocks/mockedNotification';
import { NavbarData } from '@/data/Header';
const Header = ({ unReadNotification = 0 }: { unReadNotification?: number }) => {
    const [showNotifications, setShowNotifications] = useState<boolean>(false);
    const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

    return (
        <header className="bg-slate-900 fixed z-[9999] top-0 py-2 max-h-[78px] w-full text-white px-2 border-b border-white/20">
            <div className="flex items-center justify-between w-full mx-auto">
                <div className="flex items-center space-x-8">
                    <Image src={Logo} alt="Logo" className="max-h-[50px] max-w-[90px]" />
                    <nav className="hidden md:flex w-full gap-10">
                        {NavbarData.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="hover:text-orange-400 px-1 font-bold"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center py-0 space-x-4 md:hidden">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-slate-800">
                        <Menu className="w-9 h-9" />
                    </Button>
                </div>

                <div className="hidden md:flex items-center space-x-6 relative">
                    <div
                        className="relative"
                        onMouseEnter={() => setShowNotifications(true)}
                        onMouseLeave={() => setShowNotifications(false)}
                    >
                        <div className="relative">
                            <Bell className="w-6 h-6 text-white cursor-pointer" />

                            <div className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-1.5 py-0.5">
                                {unReadNotification}
                            </div>
                        </div>

                        {showNotifications && (
                            <div className="absolute right-0 top-6 z-50 bg-midnightBlue rounded-2xl shadow-lg min-w-[240px] p-6 flex flex-col gap-6 border border-black">
                                <div className="absolute -top-3 right-6 size-6 bg-midnightBlue rotate-45 border-t border-l border-black rounded-sm"></div>

                                <NotificationList notifications={mockNotifications} />
                            </div>
                        )}
                    </div>

                    <div
                        className="relative"
                        onMouseEnter={() => setShowProfileMenu(true)}
                        onMouseLeave={() => setShowProfileMenu(false)}
                    >
                        <div className="flex flex-col items-center cursor-pointer">
                            <div className="w-10 h-10 bg-slate-600 rounded-full overflow-hidden">
                                <Image
                                    src={avatar6}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <Text text="Profile" size="sm" weight="bold" />
                        </div>

                        {showProfileMenu && (
                            <div className="absolute right-0 top-14 z-50 bg-midnightBlue rounded-2xl shadow-lg min-w-[240px] p-6 flex flex-col gap-6 border border-black">
                                <div className="absolute -top-3 right-6 size-6 bg-midnightBlue rotate-45 border-t border-l border-black rounded-sm"></div>

                                {links?.map(({ href, icon: Icon, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="flex items-center gap-4"
                                    >
                                        <Icon className="w-6 h-6 text-orange-500" />
                                        <Text as="span" text={label} size="lg" weight="bold" />
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
