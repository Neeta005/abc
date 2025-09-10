import React, { ReactNode, JSX } from 'react';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import SessionWrapper from '@/components/SessionWrapper';
import 'leaflet/dist/leaflet.css'

import './globals.css';
import '@/styles/responsive.css';
import clsx from 'clsx';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'World of Interns',
    description: 'Intern Global',
};

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
    return (
        <html lang="en" className="relative">
            <body className={clsx(manrope.className, 'antialiased bg-abyssalBlue')}>
                <SessionWrapper>{children}</SessionWrapper>
            </body>
        </html>
    );
};

export default RootLayout;
