import React from 'react';
import { mockedHeadline } from '@/mocks/mockedData';
import { Text } from '@/components/ui/Text';

export default function ProfileHeadline() {
    return (
        <Text
            text={mockedHeadline}
            className="w-full bg-twilightBlue text-white py-4 px-6 border-b border-gray-700"
            size="2xl"
            weight="semibold"
        />
    );
}
