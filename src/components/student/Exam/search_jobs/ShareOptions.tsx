import { ReactNode } from 'react';
import { X, Linkedin, Mail, Send } from 'lucide-react';
import XIcon from '@/components/company/profile/SocialSvgs/x-twitter';
import { ShareOption } from '@/types/Jobs';
export const shareOptions: ShareOption[] = [
    {
        name: 'LinkedIn',
        icon: <Linkedin size={32} color="white" />,
        bgColor: 'bg-primaryBlue',
        onClick: (url: string) =>
            window.open(
                `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
                '_blank'
            ),
    },
    {
        name: 'X',
        icon: <XIcon />,
        bgColor: 'bg-black border border-gray-600',
        onClick: (url: string) =>
            window.open(
                `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
                '_blank'
            ),
    },
    {
        name: 'Telegram',
        icon: <Send size={32} color="white" />,
        bgColor: 'bg-cyanSky',
        onClick: (url: string) =>
            window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}`, '_blank'),
    },
    {
        name: 'Email',
        icon: <Mail size={32} color="#ea4335" />,
        bgColor: 'bg-white',
        onClick: (url: string) =>
            (window.location.href = `mailto:?subject=Check this out&body=${encodeURIComponent(url)}`),
    },
];
