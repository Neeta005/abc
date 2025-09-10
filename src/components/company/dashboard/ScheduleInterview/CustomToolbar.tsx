'use client';

import React from 'react';
import { ToolbarProps } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Button } from '@/components/ui/button';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/components/ui/select';
import { CustomEvent } from '@/types/Schedule';

export default function CustomToolbar({ date, onNavigate, label }: ToolbarProps<CustomEvent>) {
    const currentMonth = moment(date).month();
    const currentYear = moment(date).year();

    const months = moment.months();
    const years = Array.from({ length: 10 }, (_, i) => currentYear - 5 + i);

    const handleMonthChange = (value: string) => {
        const newDate = moment(date).month(parseInt(value)).toDate();
        onNavigate('DATE', newDate);
    };

    const handleYearChange = (value: string) => {
        const newDate = moment(date).year(parseInt(value)).toDate();
        onNavigate('DATE', newDate);
    };

    return (
        <div className="rbc-toolbar-custom flex justify-between items-center px-4 py-2">
            <div className="flex gap-2">
                <Button
                    variant="outline"
                    className="px-2 py-1   bg-gray-700 border-gray-600"
                    onClick={() => onNavigate('TODAY')}
                >
                    Today
                </Button>
                <Button
                    variant="outline"
                    className="px-2 py-1   bg-gray-700 border-gray-600"
                    onClick={() => onNavigate('PREV')}
                >
                    &lt;
                </Button>
                <Button
                    variant="outline"
                    className="px-2 py-1  bg-gray-700 border-gray-600"
                    onClick={() => onNavigate('NEXT')}
                >
                    &gt;
                </Button>
            </div>
            <div className="flex gap-2 items-center">
                <Select value={currentMonth.toString()} onValueChange={handleMonthChange}>
                    <SelectTrigger className="w-[120px] bg-gray-700 border-gray-600 text-white">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {months?.map((month, idx) => (
                            <SelectItem value={idx.toString()} key={month}>
                                {month}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select value={currentYear.toString()} onValueChange={handleYearChange}>
                    <SelectTrigger className="w-[100px] bg-gray-700 border-gray-600 text-white">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {years?.map((year) => (
                            <SelectItem value={year.toString()} key={year}>
                                {year}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
