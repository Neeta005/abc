'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import useRegister from '@/stores/registrationStore';
import { useProgressStore } from '@/stores/progressStepperStore';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import { CustomCountrySelector } from './Countries';

const labelStyle = 'block text-white font-[Poppins] font-semibold mb-2';
const successTextStyle = 'text-xs font-[Poppins] text-white mt-4';

export default function PhoneNumberInput({ isRegistration = true }: { isRegistration?: boolean }) {
    const selectedCode = useRegister((state) => state.selectedCode);
    const setSelectedCode = useRegister((state) => state.setSelectedCode);
    const phone = useRegister((state) => state.phone);
    const setOtpRequested = useRegister((state) => state.setOtpRequested);
    const setPhone = useRegister((state) => state.setPhone);
    const message = useRegister((state) => state.phoneMessage);
    const setMessage = useRegister((state) => state.setPhoneMessage);
    const error = useRegister((state) => state.phoneError);
    const setError = useRegister((state) => state.setPhoneError);
    const validatePhone = (value: string) => /^\d{10}$/.test(value);
    const increament = useProgressStore((state) => state.incrementDone);
    const decreament = useProgressStore((state) => state.decreamentDone);

    const handleRequestOTP = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');
        if (!phone) {
            setError('Phone number is required.');
            return;
        }
        if (!validatePhone(phone)) {
            setError('Enter a valid phone number (7-15 digits).');
            return;
        }
        setMessage('Message has been successfully sent to your given number.');
    };

    return (
        <form className="w-full max-w-md" onSubmit={handleRequestOTP}>
            <div>
                <Text text="Register" className="text-white mb-6 block font-bold text-[30px]" />
                <Text
                    text="Verify Phone Number"
                    className="text-white mb-[13px] block font-bold text-[20px]"
                />
                <Text
                    text="Enter your phone to receive a one-time verification code"
                    className="text-white mb-[54px] text-[16px] mt-2"
                />
            </div>

            <Text as="label" text="Phone No." className={labelStyle} />

            <div className="flex gap-1 items-center">
                <CustomCountrySelector
                    selectedCode={selectedCode}
                    setSelectedCode={setSelectedCode}
                />
                <Input
                    id="phone"
                    type="text"
                    className={`flex-1 py-2 px-3 w-[273px] h-[48px] text-white bg-transparent border border-grapefruitRed focus:outline-none rounded-[8px] ${error ? 'border-red-500' : ''}`}
                    placeholder="123456789"
                    onBlur={(e) => {
                        if (e.target.value) increament('otpNumber');
                    }}
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                        if (!e.target.value) decreament('otpNumber');
                    }}
                />
            </div>

            {error && <Text as="p" text={error} className="text-xs text-red-400 mt-4" />}
            {message && <Text as="p" text={message} className={successTextStyle} />}

            <Button
                type="submit"
                variant={'search'}
                onClick={() => {
                    setOtpRequested(true);
                    setError('');
                    setMessage('');
                }}
                className="w-[392px] h-[56px] mt-14 text-white font-bold py-3 rounded-md text-lg shadow transition-colors"
            >
                Request OTP
            </Button>
        </form>
    );
}
