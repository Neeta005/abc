import React from 'react';
import { Pencil, Trash2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JobsTableMenu({ menuRef }: { menuRef: React.RefObject<HTMLDivElement> }) {
    return (
        <div
            ref={menuRef}
            className="absolute top-full right-4 mt-2 w-48 bg-obsidianBlue border border-gray-700 rounded-md shadow-md z-10 overflow-hidden"
        >
            <Button
                variant="ghost"
                className="w-full justify-start gap-2 px-4 py-3 text-sm rounded-none text-white hover:bg-midnightBlue"
            >
                <Pencil size={16} /> Edit
            </Button>
            <Button
                variant="ghost"
                className="w-full justify-start gap-2 px-4 py-3 text-sm rounded-none text-softBlushRed hover:bg-midnightBlue"
            >
                <Trash2 size={16} /> Delete
            </Button>
            <Button
                variant="ghost"
                className="w-full justify-start gap-2 px-4 py-3 text-sm rounded-none text-neutralGray hover:bg-midnightBlue"
            >
                <Eye size={16} /> View Applicants
            </Button>
        </div>
    );
}
