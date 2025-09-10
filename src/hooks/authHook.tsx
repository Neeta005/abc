'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export function useRedirectIfAuthenticated(redirectTo: string = '/student/dashboard') {
    const { data, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated' && data?.user) {
            router.push(redirectTo);
        }
    }, [data?.user, status, redirectTo]);

    return { status, data };
}
