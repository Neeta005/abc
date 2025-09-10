'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';
import AccountInfoCard from './AccountInfoCard';
import PrivacyDisplayCard from './PrivacyDisplayCard';
import EmailNotificationsCard from './EmailNotificationsCard';
import BrowserNotificationsCard from './BrowserNotificationsCard';
import BlockedUsersCard from './BlockedUsersCard';
import DeleteAccountCard from './DeleteAccountCard';
import { tabs } from '@/mocks/mockedSettings';
import { TabsBar } from '@/components/shared/TabsBar';
export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<string>('accountInfo');

    return (
        <div className="min-h-screen bg-onyxBlue p-6">
            <div className="flex items-center justify-between mb-8">
                <Text as="h1" text="Settings" size="3xl" weight="bold" />
                <div className="flex gap-4">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-2 rounded-full">
                        Save Changes
                    </Button>
                    <Button
                        variant="outline"
                        className="border-white text-black px-8 py-2 rounded-full"
                    >
                        Cancel
                    </Button>
                </div>
            </div>

            <div className="bg-midnightBlue rounded-xl p-0 mb-8">
                <div className="flex border-b gap-4 px-4 justify-between border-gray-700">
                    <TabsBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
            </div>

            <div>
                <div className="p-6">
                    {activeTab === 'accountInfo' && <AccountInfoCard />}
                    {activeTab === 'privacy' && <PrivacyDisplayCard />}
                    {activeTab === 'email' && <EmailNotificationsCard />}
                    {activeTab === 'browser' && <BrowserNotificationsCard />}
                    {activeTab === 'blockedUsers' && <BlockedUsersCard />}
                    {activeTab === 'deleteAccount' && <DeleteAccountCard />}
                </div>
            </div>
        </div>
    );
}
