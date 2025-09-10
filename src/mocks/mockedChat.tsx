import { Message } from '@/types/MessageTypes';
export const mockedMessages: Message[] = [
    {
        avatar: '/assets/avatar-1.png',
        name: 'Taimur',
        time: 'a month ago',
        message: "Hi Tai, How are you, Let's test the chat component",
        isOwn: false,
    },
    {
        avatar: '/assets/avatar-3.png',
        name: 'You',
        time: 'a month ago',
        message: 'Yes! Brodie told me that also :)',
        isOwn: true,
    },
    {
        avatar: '/assets/avatar-3.png',
        name: 'You',
        time: 'a month ago',
        message: "Thank you so much Tai, Thank you!! I'm feeling good that we able to do it.",
        isOwn: true,
    },
    {
        avatar: '/assets/avatar-1.png',
        name: 'Taimur',
        time: 'a month ago',
        message: 'If you need anything just me know.',
        isOwn: false,
    },
];
