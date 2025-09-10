'use client';

import React, { ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';
import { CalendarProps } from '@/types/CalenderTypes';
export default function AddEventModal({
    newEvent,
    setNewEvent,
    handleAddEvent,
    setShowModal,
    modalRef,
}: CalendarProps) {
    const handleNewEvent = ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
        if (name === 'title') {
            setNewEvent((prev) => ({ ...prev, title: value }));
        } else if (name === 'backgroundColor') {
            setNewEvent((prev) => ({ ...prev, style: { backgroundColor: value } }));
        }
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-gray-500 rounded-lg shadow-lg p-6 w-full max-w-md" ref={modalRef}>
                <Text as="h2" text="Add Event" className="text-lg font-bold mb-4" />
                <Input
                    type="text"
                    name="title"
                    placeholder="Event Title"
                    className="border w-full p-2 mb-3 rounded"
                    value={newEvent.title}
                    onChange={handleNewEvent}
                />
                <Input
                    type="color"
                    name="backgroundColor"
                    className="mb-4 w-[20%]"
                    value={newEvent.style?.backgroundColor}
                    onChange={handleNewEvent}
                />
                <div className="flex justify-end gap-2">
                    <Button
                        variant="ghost"
                        className="bg-gray-300 px-4 py-2 rounded text-black"
                        onClick={() => setShowModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                        onClick={handleAddEvent}
                    >
                        Add
                    </Button>
                </div>
            </div>
        </div>
    );
}
