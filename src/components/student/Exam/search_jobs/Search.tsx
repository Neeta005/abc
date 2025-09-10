'use client';
import React, { useState, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClear = () => {
        setSearchTerm('');
        inputRef.current?.focus();
    };

    return (
        <div className="flex items-center w-full max-w-[454px] p-1 pr-2 text-black bg-white border border-gray-700 rounded-full focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300">
            <Input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Jobs"
                className="flex-grow w-full pl-4 pr-2 py-2 text-lg bg-transparent border-none appearance-none focus:outline-none caret-blue-500 h-auto"
            />
            {searchTerm && (
                <Button
                    onClick={handleClear}
                    variant="ghost"
                    size="icon"
                    className="w-7 h-7 ml-2 rounded-full hover:bg-gray-700 hover:text-white transition-colors"
                    aria-label="Clear search"
                >
                    <X className="w-5 h-5" />
                </Button>
            )}
            <Button
                variant="ghost"
                size="icon"
                className="p-2 ml-1 text-gray-400 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
                aria-label="Search"
            >
                <Search className="w-6 h-6" />
            </Button>
        </div>
    );
}
