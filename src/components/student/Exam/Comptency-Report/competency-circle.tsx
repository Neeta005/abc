import React from 'react';
import { Text } from '@/components/ui/Text';

export default function CompetencyCircle({ score }: { score: number }) {
    return (
        <div className="relative">
            <svg width="100" height="100" viewBox="0 0 196 196">
                <circle cx="98" cy="98" r="88" stroke="#233B6C" strokeWidth="20" fill="none" />
                <circle
                    cx="98"
                    cy="98"
                    r="88"
                    stroke="#2563EB"
                    strokeWidth="20"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 88}
                    strokeDashoffset={2 * Math.PI * 88 * (1 - 0.8)}
                    strokeLinecap="round"
                    className="-rotate-90 origin-center"
                />
            </svg>
            <Text
                text={score}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold"
            />
        </div>
    );
}
