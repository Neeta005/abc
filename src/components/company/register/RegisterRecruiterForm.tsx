import React, { useRef, useState } from 'react';
import { MessageCircleMore } from 'lucide-react';
import useCompanyStore from '@/stores/companyRegistrationStore';
import { useCompanyProgressStore } from '@/stores/progressStepperStore';
import { useFormField } from '@/helpers/useFormField';
import useHandleBlur from '@/hooks/useHandleBlur';
import { useHandleValueChange } from '@/hooks/useHandleValueChange';
import companyRegistration from '@/types/companyRegistration';
import studentRegistration from '@/types/studentRegistration';
import { JobPostingProgress } from '@/types/JobPostingProgress';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const RegisterRecruiterForm = ({ registration = true }: { registration?: boolean }) => {
    const recruiter = useCompanyStore((state) => state.recruiter);
    const setRecruiter = useCompanyStore((state) => state.setRecruiter);

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [otpSent, setOtpSent] = useState(false);
    const [otpError, setOtpError] = useState(false);
    const [mobileValid, setMobileValid] = useState(false);
    const otpRefs = useRef<HTMLInputElement[]>([]);
    const handleFieldChange = useFormField(setRecruiter);

    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        handleFieldChange(e);
        setMobileValid(/^\d{10}$/.test(value));
    };
    const handleOtpChange = (idx: number, val: string) => {
        if (!/^\d?$/.test(val)) return;
        const newOtp = [...otp];
        newOtp[idx] = val;
        setOtp(newOtp);
        if (val && idx < otp.length - 1) {
            otpRefs.current[idx + 1]?.focus();
        }
    };

    const handleOtpKeyDown = (idx: number, { key }: React.KeyboardEvent<HTMLInputElement>) => {
        if (key === 'Backspace' && otp[idx] === '' && idx > 0) {
            otpRefs.current[idx - 1]?.focus();
        }
    };
    const { incrementDone: increament, decrementDone: decreament } = useCompanyProgressStore();

    const handleValueChange = useHandleValueChange(
        setRecruiter,
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
                <Text as="h2" text="Recruiter Details" size="2xl" weight="bold" className="mb-6" />
            )}

            <div className="grid grid-cols-2 w-[691px]">
                <div className="mb-6">
                    <Text
                        as="label"
                        text="Full Name"
                        size="lg"
                        weight="semibold"
                        className="block text-white mb-2"
                    />
                    <div className="relative w-[688px]">
                        <Input
                            className="bg-inherit text-white px-2 w-[339px] h-[49px] rounded-lg border border-red-500"
                            placeholder="Software company"
                            value={recruiter.fullName}
                            name="fullName"
                            onChange={handleValueChange}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <Text
                        as="label"
                        text="Email Id"
                        size="lg"
                        weight="semibold"
                        className="block text-white mb-2"
                    />
                    <div className="relative w-[688px]">
                        <Input
                            className="bg-inherit text-white px-2 w-[322px] h-[49px] rounded-lg border border-gray-400"
                            placeholder="example@intern.com"
                            name="email"
                            value={recruiter.email}
                            onChange={handleValueChange}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <Text
                        as="label"
                        text="Mobile Number"
                        size="lg"
                        weight="semibold"
                        className="block text-white mb-2"
                    />
                    <div className="relative flex items-center ">
                        <Input
                            className="bg-inherit text-white px-2 pr-10 w-full h-[49px] rounded-lg border border-red-500 max-w-[688px]"
                            placeholder="Mobile number"
                            name="mobileNumber"
                            maxLength={10}
                            value={recruiter.mobileNumber}
                            onChange={handleMobileChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {registration && (
                        <div className="mb-6 mt-6">
                            <Button
                                className="w-[200px] py-3 rounded-lg font-bold text-white text-lg hover:opacity-70 "
                                onClick={() => setOtpSent(true)}
                                type="button"
                            >
                                Request OTP
                            </Button>
                        </div>
                    )}
                </div>

                {registration && (
                    <div className="mb-6 col-span-2">
                        <Text
                            as="label"
                            text="OTP received"
                            size="lg"
                            weight="semibold"
                            className="block text-white mb-2"
                        />
                        <div className="flex items-center mb-2">
                            <MessageCircleMore className="mr-2" />
                            <Text
                                as="span"
                                text="Enter the 6-digit code sent to your mobile"
                                size="base"
                                className="opacity-80"
                            />
                        </div>
                        <div className="flex gap-3 text-white justify-between w-[655px] mb-2">
                            {otp?.map((digit, idx) => (
                                <Input
                                    key={idx}
                                    type="text"
                                    maxLength={1}
                                    ref={(el) => {
                                        otpRefs.current[idx] = el!;
                                    }}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                                    onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                                    className="w-[40px] h-[48px] text-center text-2xl text-white border border-red-700 bg-transparent rounded-lg"
                                />
                            ))}
                            <Button
                                className="ml-4 w-[120px] py-3 rounded-lg font-bold text-white text-lg hover:opacity-70 "
                                type="button"
                                onClick={() => setOtpError(!otp.every((d) => d))}
                            >
                                Verify
                            </Button>
                        </div>
                        {otpError && (
                            <Text
                                text="Invalid OTP"
                                className="text-crimsonBerry text-base font-semibold mb-2"
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegisterRecruiterForm;
