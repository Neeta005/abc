import React from 'react';
import { Text } from '@/components/ui/Text';
import { CompanyDetails } from '@/types/companyRegistration';
import { company } from '@/mocks/mockedCompany';
import formatLabel from '../../../../helpers/formatLabel';
export default function ProfileDetails() {
    const entries = Object.entries(company) as [keyof CompanyDetails, string][];
    return (
        <div className="grid grid-cols-3 gap-y-6 text-white bg-deepNavy p-8 ml-3 border-b border-white">
            {entries?.map(([label, value]) => (
                <div key={label}>
                    <Text text={formatLabel(label)} className="text-sm text-gray-400" />
                    <Text text={value} className="text-lg" />
                </div>
            ))}
        </div>
    );
}
