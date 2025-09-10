'use client';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { mockedMeetings as meetings } from '@/mocks/mockedData';
import { Text } from '@/components/ui/Text';
import MeetingsCard from './meetingsCard';

export default function Meetings() {
  return (
    <div className="text-white rounded-xl p-6 bg-steelBlue w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Text as="h2" text="Meetings" className="text-lg font-semibold" />
        <Select>
          <SelectTrigger className="w-[130px] h-9 rounded-md border border-white bg-transparent text-white text-sm">
            <SelectValue placeholder="Create New" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="interview">Interview</SelectItem>
            <SelectItem value="organizational">Organizational</SelectItem>
            <SelectItem value="manager">With Manager</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Meetings list */}
      <div className="space-y-4">
        {meetings?.map(({ color, day, date, title, time }, idx) => (
          <MeetingsCard
            key={idx}
            day={day}
            date={date}
            title={title}
            time={time}
            color={color} // card background color
          />
        ))}
      </div>
    </div>
  );
}
