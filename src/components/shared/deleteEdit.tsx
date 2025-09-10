import React from 'react';
import { Trash2, Pencil } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SvgIconProps {
    onClick?: () => void;
    svgClassname?: string;
    btnClassname?: string;
}

export function DeleteSvg({ svgClassname, btnClassname, onClick }: SvgIconProps) {
    return (
        <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={onClick}
            className={cn('w-[40px] h-[40px]', btnClassname)}
        >
            <Trash2 className={cn('text-white', svgClassname)} />
        </Button>
    );
}

export function EditSvg({ svgClassname, btnClassname, onClick }: SvgIconProps) {
    return (
        <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={onClick}
            className={cn('border-2 w-[40px] h-[40px] rounded-full border-red-500', btnClassname)}
        >
            <Pencil className={cn('text-red-400', svgClassname)} />
        </Button>
    );
}
