import React from 'react';
import { SearchIcon } from 'lucide-react';
import RichTextEditor from '@/components/shared/RichTextEditor';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import useCompanyStore from '@/stores/companyRegistrationStore';
import { useCompanyProgressStore } from '@/stores/progressHooks/companyStore';
import { useHandleValueChange } from '@/hooks/useHandleValueChange';
import useHandleBlur from '@/hooks/useHandleBlur';
import companyRegistration from '@/types/companyRegistration';
import studentRegistration from '@/types/studentRegistration';
import { JobPostingProgress } from '@/types/JobPostingProgress';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';

const RegisterCompanyDetailsForm = ({ registration = true }: { registration?: boolean }) => {
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

    const handleChange = (e: string) => {
        setCompanyDetail({ ...company, aboutCompany: e });
        if (e === '') {
            decreament('aboutCompany');
        } else {
            increament('aboutCompany');
        }
    };

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
                    text="Company Name"
                    size="lg"
                    weight="semibold"
                    className="block text-white mb-2"
                />
                <div className="relative max-w-[688px]">
                    <Input
                        className="bg-inherit px-2 text-white max-w-[688px] h-[49px] rounded-[8px] border border-red-500"
                        placeholder="Software company"
                        value={company.name}
                        name="name"
                        onChange={handleValueChange}
                        onBlur={handleBlur}
                    />
                    <span className="absolute right-4 top-3">
                        <SearchIcon />
                    </span>
                </div>
            </div>

            <div className="mb-6 text-white">
                <Text
                    as="label"
                    text="Company Size"
                    size="lg"
                    weight="semibold"
                    className="block text-white mb-2"
                />
                <div className="relative">
                    <Select
                        value={`>${company.size}`}
                        name="size"
                        onValueChange={(e) => {
                            const num = Number(e.substring(1));
                            setCompanyDetail({ ...company, size: num });
                            increament('size');
                        }}
                    >
                        <SelectTrigger className="max-w-[688px] h-[48px] text-white border rounded-[8px] border-red-600">
                            <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent className="bg-steelBlue text-white">
                            <SelectItem value=">10">{`>`}10</SelectItem>
                            <SelectItem value=">50">{`>`}50</SelectItem>
                            <SelectItem value=">100">{`>`}100</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="mb-6 max-w-[682px]">
                <Text
                    as="label"
                    text="About Us"
                    size="lg"
                    weight="semibold"
                    className="block text-white mb-2"
                />
                <RichTextEditor
                    className="h-[231px]"
                    value={company.aboutCompany}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default RegisterCompanyDetailsForm;
