import React, { JSX } from 'react';

import { GuestGuard } from '@/components/auth/GuestGuard';

import { Navbar } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';

interface HomeLayoutProps {
    children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps): JSX.Element => {
    return (
        <GuestGuard>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </GuestGuard>
    );
};

export default HomeLayout;
