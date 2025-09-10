import { Star } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
export default function RatingStar({ stars, className }: { stars: number; className?: string }) {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) =>
                i < stars ? (
                    <Star
                        key={i}
                        className={cn('w-[20px] h-[21px] text-yellow-300', className)}
                        stroke="yellow"
                        fill="yellow"
                    />
                ) : (
                    <Star key={i} className="w-[20px] h-[21px] text-yellow-300" stroke="yellow" />
                )
            )}
        </div>
    );
}
