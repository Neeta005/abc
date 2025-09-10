import { Suspense } from 'react';
import StudentProfileClient from '../../../../components/sections/pages/company/dashboard/ProfileClient';

export default function StudentProfilePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <StudentProfileClient />
        </Suspense>
    );
}
