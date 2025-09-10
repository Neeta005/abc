import MessageClient from '../../../../components/sections/pages/student/dashboard/MessagesClient';
import { Suspense } from 'react';
export default function MessagesPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MessageClient />
        </Suspense>
    );
}
