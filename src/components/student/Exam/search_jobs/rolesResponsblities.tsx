import React from 'react';
import useJobPosting from '@/stores/jobPostingStore';
import { Text } from '@/components/ui/Text';

const RolesResponsibilities = () => {
    const data = useJobPosting((state) => state.offersResponsibilities).rolesResp;

    return (
        <div className="bg-shadowBlue rounded-xl p-4 max-w-5xl text-white shadow-lg">
            {/* Section title */}
            <Text
                as="h2"
                text="Roles & Responsibilities"
                className="text-terracottaOrange text-xl font-semibold mb-4"
            />

            {/* Rich text content */}
            <div
                className="prose prose-invert max-w-none text-white"
                dangerouslySetInnerHTML={{ __html: data }}
            />
        </div>
    );
};

export default RolesResponsibilities;
