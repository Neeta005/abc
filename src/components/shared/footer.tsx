import React from 'react';
import Link from 'next/link';
import { Text } from '@/components/ui/Text';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 py-4 px-6 flex justify-between items-center text-sm">
            <div className=" flex flex-1">
                <Text className="mb-0">
                    I agree to our{' '}
                    <Link href="#" className="text-blue-400 hover:underline">
                        Terms of use
                    </Link>
                    ,{' '}
                    <Link href="#" className="text-blue-400 hover:underline">
                        Privacy and policy
                    </Link>
                </Text>
                <div className="flex justify-end flex-1">
                    <Text className="mb-0">© 2025 - Copyright: World of Interns</Text>
                </div>
            </div>
        </footer>
    );
}
