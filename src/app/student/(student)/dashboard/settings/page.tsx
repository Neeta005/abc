import { Suspense } from 'react';
import SettingsClient from '../../../../../components/sections/pages/student/dashboard/SettingsClient';
export default function SettingsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SettingsClient />
        </Suspense>
    );
}
