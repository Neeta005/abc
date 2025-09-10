'use client';

import SettingsPage from '@/components/dashboard/settings/SettingsPage';

export default function SettingsClient() {
    return (
        <div className="flex flex-col min-w-full min-h-screen bg-onyxBlue">
            <div className="flex flex-1">
                <main className="flex-1 min-w-0">
                    <SettingsPage />
                </main>
            </div>
        </div>
    );
}
