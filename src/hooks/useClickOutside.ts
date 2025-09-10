import { useEffect } from 'react';

export function useClickOutside<T extends HTMLElement>(
    ref: React.RefObject<T>,
    callback: () => void,
    active: boolean = true
) {
    useEffect(() => {   
        if (!active) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('click', handleClickOutside);
        console.log('here .....');
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ref, callback, active]);
}
