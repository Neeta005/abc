import React, { ReactNode } from 'react';
import Header from '@/components/shared/Header';
import Sidebar from '@/components/shared/Sidebar';

export default function StudentLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-twilightBlue">
            <header className="fixed top-0 left-0 w-full z-50">
                <Header />
            </header>

            <div className="flex w-full min-h-screen pt-16">
                <aside className="bg-midnightBlue sticky top-[78px] self-start h-[calc(100vh-78px)]">
                    <Sidebar company={true} />
                </aside>
                <main className="flex-1 p-6 text-white overflow-x-auto">{children}</main>
            </div>
        </div>
    );
}
