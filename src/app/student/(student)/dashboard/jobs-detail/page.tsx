import JobsDetailClient from '@/components/sections/pages/company/dashboard/JobsDetailClient';
import { Suspense } from 'react';

export default function JobsDetailPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <JobsDetailClient />
        </Suspense>
    );
}
