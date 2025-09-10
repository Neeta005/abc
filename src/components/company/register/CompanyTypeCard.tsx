import React from 'react';
import useCompanyStore from '@/stores/companyRegistrationStore';
import { useCompanyProgressStore } from '@/stores/progressStepperStore';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/Text';

type CompanyType = {
    label: string;
    description: string;
};

const CompanyTypeCard = ({ type }: { type: CompanyType }) => {
    const company = useCompanyStore((state) => state.company);
    const setCompanyDetail = useCompanyStore((state) => state.setCompanyData);
    const { incrementDone: increament } = useCompanyProgressStore();
    const handleChange = () => {
        setCompanyDetail({ ...company, aboutCompany: type?.label });
        increament('aboutCompany');
    };
    return (
        <div className="max-w-[222px] min-h-[200px] flex">
            <label
                className={`flex-1 cursor-pointer border rounded-xl border-terracottaOrange p-6 flex flex-wrap gap-4 items-start relative ${
                    company.aboutCompany === type.label ? 'ring-2 ring-[#E05A2B]' : ''
                }`}
            >
                <Input
                    type="radio"
                    name="workmode"
                    className="accent-white w-5 h-5 mb-2 mt-1 cursor-pointer"
                    onChange={handleChange}
                />
                <Text text={type?.label} size="lg" weight="bold" />
                <Text text={type?.description} size="base" />
            </label>
        </div>
    );
};

export default CompanyTypeCard;
