import React from 'react';
import { Text } from '@/components/ui/Text';
import { MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Meeting } from '@/mocks/mockedData';

export default function MeetingsCard({ color, day, date, title, time }: Meeting) {
  return (
    <div
      className="flex items-start justify-between p-4 rounded-lg shadow-md"
      style={{ backgroundColor: color || '#1F2937' }}
    >
      {/* Day/Date box with light opacity */}
      <div className="flex flex-col items-center justify-center size-12 bg-white bg-opacity-20 rounded-md shadow-sm text-center">
        <Text as="span" text={day} className="text-xs font-semibold text-yellow-400" />
        <Text as="span" text={date} className="text-lg font-bold text-gray-100" />
      </div>

      {/* Title & Time */}
      <div className="flex-1 ml-4">
        <Text as="h3" text={title} className="font-medium text-white" />
        <Text as="p" text={time} className="text-gray-200 " />
      </div>

      {/* More options button with background box */}
      <div className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-20 rounded-md shadow-sm">
        <Button
          className="p-2 hover:bg-white/30 rounded-md bg-transparent"
          variant="default"
          aria-label="More options"
        >
          <MoreVertical size={16} className="text-white" />
        </Button>
      </div>
    </div>
  );
}
