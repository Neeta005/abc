'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    FiHome,
    FiSearch,
    FiFileText,
    FiUser,
    FiGift,
    FiClock,
    FiMessageSquare,
    FiChevronLeft,
} from 'react-icons/fi';
import { Calendar, Building2, SquarePlus, Settings } from 'lucide-react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';

const studentNavItems = [
    {
        label: 'My Home',
        icon: <FiHome size={22} />,
        href: '/student/dashboard',
    },
    {
        label: 'Search Job',
        icon: <FiSearch size={22} />,
        href: '/student/dashboard/search-jobs',
    },
    {
        label: 'Competency Report',
        icon: <FiFileText size={22} />,
        href: '/competency-report',
    },
    {
        label: 'My Profile',
        icon: <FiUser size={22} />,
        href: '/student/profile',
    },
    {
        label: 'Jobs Applied',
        icon: <FiGift size={22} />,
        href: '/student/dashboard/applied-jobs',
    },
    // {
    //   label: "Schedule Assessment",
    //   icon: <FiClock size={22} />,
    //   href: "/schedule-assessment",
    // },
    {
        label: 'Messages',
        icon: <FiMessageSquare size={22} />,
        href: '/student/dashboard/messages',
    },
];

const companyNavItems = [
    {
        label: 'My Home',
        icon: <FiHome size={22} />,
        href: '/dashboard/1',
    },
    {
        label: 'My Job Posted',
        icon: <SquarePlus size={22} />,
        href: '/dashboard/posted-jobs',
    },
    {
        label: 'Company Profile',
        icon: <Building2 size={22} />,
        href: '/dashboard/profile ',
    },
    {
        label: 'Calendar',
        icon: <Calendar size={22} />,
        href: '/schedule',
    },
    {
        label: 'Messages',
        icon: <FiMessageSquare size={22} />,
        href: '/dashboard/messages',
    },
    {
        label: 'Settings',
        icon: <Settings size={22} />,
        href: '/dashboard/settings',
    },
];

export default function StudentSidebar({
    onClose,
    isOpen,
    className,
    company = false,
}: {
    onClose?: () => void;
    isOpen?: boolean;
    className?: string;
    company?: boolean;
}) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const navItems = company ? companyNavItems : studentNavItems;

    useEffect(() => {
        if (typeof isOpen === 'boolean') {
            setOpen(isOpen);
        }
    }, [isOpen]);

    return (
        <aside
            className={cn(
                `fixed top-0 left-0 h-full z-[9999]  bg-boldSlateBlue flex flex-col justify-between  shadow-lg md:relative md:shadow-none transition-all duration-300 ${open ? 'w-[294px] md:w-64 min-w-[80px]' : 'w-20 md:w-20 min-w-[20px]'}`,
                className
            )}
        >
            <div>
                <div className="flex items-center justify-between px-4 py-4">
                    <div className="flex justify-between w-full">
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn('text-white', open ? 'block' : 'hidden')}
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <HiOutlineMenuAlt2 size={32} />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-gray-400  border border-white/40 rounded-full p-1"
                            onClick={() => setOpen(!open)}
                            aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'}
                        >
                            <FiChevronLeft
                                size={28}
                                className={`transition-transform ${!open ? 'rotate-180' : ''}`}
                            />
                        </Button>
                    </div>
                </div>

                <nav className="flex flex-col gap-1 px-2">
                    {navItems?.map(({ label, href, icon }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={label}
                                href={href}
                                className={cn(
                                    `flex items-center border border-transparent gap-4 px-2 py-3 rounded-lg font-medium text-base transition-all duration-150 mb-[2px]`,
                                    isActive
                                        ? 'border border-crimsonBerry bg-gradient-to-r from-crimsonBerry/10 to-transparent text-crimsonBerry'
                                        : 'text-white/90 hover:bg-inkSlateBlue',
                                    open ? 'justify-start' : 'justify-center'
                                )}
                            >
                                {icon}
                                {open && <Text as="span" text={label} />}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}
