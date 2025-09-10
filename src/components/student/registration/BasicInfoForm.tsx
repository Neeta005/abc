'use client';
import { use, useRef, useState } from 'react';
import useRegister from '@/stores/registrationStore';
import validateForm from './Validation/BasicInfoValidation';
import { HelpCircle } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import dayjs, { Dayjs } from 'dayjs';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import { useStudentProgressStore } from '@/stores/progressHooks/useStudentProgressStore';
import { useHandleValueChange } from '@/hooks/useHandleValueChange';
import studentRegistration from '@/types/studentRegistration';
import useHandleBlur from '@/hooks/useHandleBlur';
import companyRegistration from '@/types/companyRegistration';
import { JobPostingProgress } from '@/types/JobPostingProgress';
import { CalendarPopup } from '@/components/shared/CalendarPopup';

const BasicInfoForm = ({ isRegistration = true }: { isRegistration?: boolean }) => {
    const setBasicInfoForm = useRegister((state) => state.setBasicInfoForm);
    const form = useRegister((state) => state.basicInfoForm);
    const setError = useRegister((state) => state.setError);
    const error = useRegister((state) => state.error);
    const { incrementDone: increament, decrementDone: decreament } = useStudentProgressStore();
    const [showCalendar, setShowCalendar] = useState(false);
    const useCalendarRef = useRef<HTMLButtonElement>(null);
    const handleValueChange = useHandleValueChange(
        setBasicInfoForm,
        decreament as (
            field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );

    const handleSubmit = (e: React.FormEvent) => {
        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();

            setError('');
        };
    };
    const handleDate = (date: Dayjs | null) => {
        setBasicInfoForm({
            dob: dayjs(date).format('YYYY-MM-DD'),
        });
        setShowCalendar(false);
    };
    const handleOnBlur = useHandleBlur(
        increament as (
            field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );
    return (
        <form onSubmit={handleSubmit} className="w-full px-2 sm:px-0 relative">
            {isRegistration && (
                <Text
                    as="h2"
                    text="Complete Basic Info"
                    size="3xl"
                    tColor="darkWhite"
                    weight="bold"
                    className="mb-6 mt-2"
                />
            )}
            <div className="flex gap-2">
                <div className="flex flex-col justify-end">
                    <span className="text-[32px]" style={{ color: '#FF003B' }}>
                        *
                    </span>
                    <div className="h-2"></div>
                </div>
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                        <div>
                            <Text
                                as="label"
                                text="Full Name"
                                tColor="darkWhite"
                                className="mb-2 block"
                            />
                            <Input
                                name="fullName"
                                value={form.fullName}
                                onBlur={handleOnBlur}
                                onChange={handleValueChange}
                                placeholder="John Doe"
                                className="w-full max-h-[48px] border border-red-400 bg-transparent text-white placeholder:text-gray-400"
                            />
                        </div>
                        <div>
                            <Text
                                as="label"
                                text="Gender"
                                tColor="darkWhite"
                                className="mb-2 block"
                            />
                            <Select onValueChange={(value) => setBasicInfoForm({ gender: value })}>
                                <SelectTrigger
                                    onBlur={(e) => {
                                        increament('gender');
                                    }}
                                    className="text-white w-full max-h-[48px] rounded-[8px] border border-red-400 bg-transparent px-4 py-2 placeholder:text-gray-400 focus:outline-none"
                                >
                                    <SelectValue placeholder="Gender" />
                                </SelectTrigger>
                                <SelectContent className="text-white bg-inherit">
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Text
                                as="label"
                                text="Government ID Proof"
                                tColor="darkWhite"
                                className="mb-2 block"
                            />
                            <Input
                                name="idProof"
                                value={form.idProof}
                                onBlur={handleOnBlur}
                                onChange={handleValueChange}
                                placeholder="Text field"
                                className="w-full max-h-[48px] border border-red-400 bg-transparent text-white"
                            />
                        </div>

                        <div className="relative">
                            <Button
                                ref={useCalendarRef}
                                type="button"
                                variant="outline"
                                className="w-full  rounded-[8px] border-red-400 bg-transparent px-4 py-2 text-white mt-7 placeholder:text-gray-400 focus:outline-none text-left flex justify-between items-center"
                                onClick={() => {
                                    setShowCalendar((prev) => !prev);
                                }}
                            >
                                {form.dob ? dayjs(form.dob).format('MMM D, YYYY') : 'Select date'}
                                <CalendarIcon />
                            </Button>
                            <CalendarPopup
                                value={form.dob ? dayjs(form.dob) : null}
                                open={showCalendar}
                                onChange={handleDate}
                                onClose={() => setShowCalendar(false)}
                                anchorRect={useCalendarRef}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <Text
                                as="label"
                                text="Mail ID"
                                tColor="darkWhite"
                                className="mb-2 block"
                            />
                            <Input
                                name="mail"
                                value={form.mail}
                                onBlur={handleOnBlur}
                                onChange={handleValueChange}
                                placeholder="Aishatapiwa@gmail.com"
                                className="w-full max-h-[48px] border border-red-400 bg-transparent text-white"
                            />
                        </div>
                        <div className="sm:col-span-2 relative">
                            <Text
                                as="label"
                                text="LinkedIn Profile"
                                tColor="darkWhite"
                                className="mb-2 block"
                            />
                            <Input
                                name="linkedIn"
                                value={form.linkedIn}
                                onBlur={handleOnBlur}
                                onChange={handleValueChange}
                                placeholder="https://www.linkedin.com/in/john"
                                className="w-full max-h-[48px] border border-red-400 bg-transparent text-white"
                            />
                            <HelpCircle
                                size={18}
                                className="text-white absolute right-4 top-[60%]"
                            />
                        </div>
                        <div className="sm:col-span-2 relative">
                            <Text
                                as="label"
                                text="GitHub Profile"
                                tColor="darkWhite"
                                className="mb-2 block"
                            />
                            <Input
                                name="github"
                                value={form.github}
                                onBlur={handleOnBlur}
                                onChange={handleValueChange}
                                placeholder="github.com/johnDoe"
                                className="w-full max-h-[48px] border border-red-400 bg-[linear-gradient(90deg,rgba(206,45,82,0.2)_0%,rgba(206,45,82,0.4)_100%)] text-white"
                            />
                            <HelpCircle
                                size={18}
                                className="text-white absolute right-4 top-[60%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default BasicInfoForm;
