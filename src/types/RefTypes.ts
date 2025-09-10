import { RefObject } from 'react';
export interface RefClicKProps {
    onClick: () => void;
    ref?: RefObject<HTMLDivElement>;
    setTime: (value: string) => void;
}
