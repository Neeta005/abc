import React from 'react';
import useCompanyStore from '@/stores/companyRegistrationStore';
import { useCompanyProgressStore } from '@/stores/progressStepperStore';
import { useHandleValueChange } from '@/hooks/useHandleValueChange';
import useHandleBlur from '@/hooks/useHandleBlur';
import companyRegistration from '@/types/companyRegistration';
import studentRegistration from '@/types/studentRegistration';
import { JobPostingProgress } from '@/types/JobPostingProgress';
import CompanyTypeCard from './CompanyTypeCard';
import { MockedCompanyTypes } from '@/mocks/mockedData';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';

const RegisterCompanyForm = ({ registration = true }: { registration?: boolean }) => {
    const setCompanyDetail = useCompanyStore((state) => state.setCompanyData);
    const company = useCompanyStore((state) => state.company);

    const { incrementDone: increament, decrementDone: decreament } = useCompanyProgressStore();

    const handleValueChange = useHandleValueChange(
        setCompanyDetail,
        decreament as (
            field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );

    const handleBlur = useHandleBlur(
        increament as (
            field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );

    return (
        <div className="w-full p-6 bg-inherit rounded-lg">
            {registration && (
                <Text as="h1" text="Register" className="text-white text-5xl font-extrabold mb-2" />
            )}
            {registration && (
                <Text as="h2" text="Company Details" size="2xl" weight="bold" className="mb-6" />
            )}

            <div className="mb-6">
                <Text
                    as="label"
                    text="GST Details"
                    size="lg"
                    weight="semibold"
                    className="block text-white mb-2"
                />
                <div className="relative max-w-[688px]">
                    <Input
                        name="gstDetail"
                        className="bg-inherit text-white px-[10px] py-[2px] max-w-[688px] h-[49px] rounded-[8px] border border-red-500"
                        placeholder="GST"
                        value={company.gstDetail}
                        onChange={handleValueChange}
                        onBlur={handleBlur}
                    />
                </div>
            </div>

            <div className="mb-6">
                <Text
                    as="label"
                    text="Company Website"
                    size="lg"
                    weight="semibold"
                    className="block text-white mb-2"
                />
                <div className="relative max-w-[688px]">
                    <Input
                        name="website"
                        className="bg-inherit text-white py-[2px] pl-[10px] max-w-[688px] h-[49px] rounded-[8px] border border-red-500"
                        placeholder="Company Website"
                        value={company.website}
                        onChange={handleValueChange}
                        onBlur={handleBlur}
                    />
                </div>
            </div>

            <div className="mb-6">
                <Text
                    as="label"
                    text="LinkedIn Page"
                    size="lg"
                    weight="semibold"
                    className="block text-white mb-2"
                />
                <div className="relative max-w-[688px]">
                    <Input
                        name="linkedin"
                        className="bg-inherit text-white py-[2px] pl-[10px] max-w-[688px] h-[49px] rounded-[8px] border border-red-500"
                        placeholder="LinkedIn"
                        value={company.linkedin}
                        onChange={handleValueChange}
                        onBlur={handleBlur}
                    />
                </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8 text-white ">
                {MockedCompanyTypes.map((type) => (
                    <CompanyTypeCard key={type.label} type={type} />
                ))}
            </div>
        </div>
    );
};

export default RegisterCompanyForm;
