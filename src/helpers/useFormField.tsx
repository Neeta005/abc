import { useCallback } from 'react';

export function useFormField(setter: Function) {
    return useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            console.log('[useFormField] updating:', name, value);
            setter({ [name]: value });
        },
        [setter]
    );
}
