import React from 'react';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';

export function ErrorMessage({
    error,
    setError,
}: {
    error: string;
    setError: (msg: string) => void;
}) {
    if (!error) return null;
    return (
        <div className="relative w-full bg-red-900/80 text-red-300 flex items-center justify-center px-4 py-2 rounded mb-6">
            <Text
                as="span"
                text={`\u26A0 ${error}`}
                weight="semibold"
                className="text-center mx-auto"
            />
            <Button
                type="button"
                variant="ghost"
                className="absolute border rounded-full w-4 h-4 right-4 text-xl font-bold p-0 hover:bg-transparent text-red-300"
                onClick={() => setError('')}
            >
                ×
            </Button>
        </div>
    );
}
