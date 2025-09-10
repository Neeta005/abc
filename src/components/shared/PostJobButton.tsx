import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
const PostJobButton = () => {
    return (
        <Button
            asChild
            className=" text-white justify-between mr-5 px-4 py-2 rounded-lg hover:opacity-70"
            variant={'search'}
        >
            <Plus className="border rounded-sm" />
            <Link href="/post-job">Post Job</Link>
        </Button>
    );
};

export default PostJobButton;
