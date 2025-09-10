import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/Text';

const ProfileComment = () => (
    <div className="mt-8 border-t border-gray-700 pt-4 flex items-center gap-3 mx-2">
        <Text text="Add Comment" weight="medium" className="text-gray-300" />
        <Input
            type="text"
            className="flex-1 bg-twilightBlue border border-gray-600 rounded-lg px-3 py-2 text-white"
            placeholder="Type your comment..."
        />
        <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">Send</Button>
    </div>
);

export default ProfileComment;
