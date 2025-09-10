import React from 'react';
import { Menu, List } from 'lucide-react';

export interface ViewToggleProps {
    viewAll: boolean;
    isProfile?: boolean;
    setViewAll: (val: boolean) => void;
}

export default function ViewToggle({ viewAll, setViewAll }: ViewToggleProps) {
    return (
        <div className="flex items-center gap-3 cursor-pointer text-white">
            <div onClick={() => setViewAll(!viewAll)}>
                <Menu />
            </div>
            <div>
                <List />
            </div>
        </div>
    );
}
