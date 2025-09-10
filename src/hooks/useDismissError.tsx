'use client';

import { useEffect } from 'react';
import useRegister from '@/stores/registrationStore';
export function useDismissError() {
    const error = useRegister((state) => state.error);
    const setError = useRegister((state) => state.setError);

    useEffect(() => {
        const timer = setTimeout(() => {
            setError('');
        }, 10000);

        return () => clearTimeout(timer);
    }, [error]);
}
