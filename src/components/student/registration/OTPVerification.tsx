'use client';
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import useRegister from '@/stores/registrationStore';
import { CustomCountrySelector } from './Countries';
const OTP_LENGTH = parseInt(process.env.NEXT_PUBLIC_OTP_LENGTH || '6');
const RESEND_TIME = parseInt(process.env.NEXT_PUBLIC_OTP_RESEND_TIME || '60');
const VALID_TIME = parseInt(process.env.NEXT_PUBLIC_OTP_VALID_TIME || '180');

export default function OTPVerification({
    phone = '+914321234',
    onChangeNumber,
    isRegistration = true,
}: {
    phone?: string;
    onChangeNumber?: () => void;
    isRegistration?: boolean;
}) {
    const step = useRegister((state) => state.step);
    const setStep = useRegister((state) => state.setStep);
    const otp = useRegister((state) => state.otp);
    const otpRequested = useRegister((state) => state.otpRequested);
    const setOtpError = useRegister((state) => state.setOtpError);
    const setOtpRequested = useRegister((state) => state.setOtpRequested);
    const setOtp = useRegister((state) => state.setOtp);
    const error = useRegister((state) => state.error);
    const setError = useRegister((state) => state.setError);
    const resendTimer = useRegister((state) => state.resendTimer);
    const setResendTimer = useRegister((state) => state.setResendTimer);
    const validTimer = useRegister((state) => state.validTimer);
    const setValidTimer = useRegister((state) => state.setValidTimer);
    const message = useRegister((state) => state.otpMessage);
    const setMessage = useRegister((state) => state.setOtpMessage);
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (resendTimer > 0) {
            const interval = setInterval(() => setResendTimer(resendTimer - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [resendTimer, setResendTimer]);

    useEffect(() => {
        if (validTimer > 0) {
            const interval = setInterval(() => setValidTimer(validTimer - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [validTimer, setValidTimer]);

    const handleChange = (idx: number, value: string) => {
        if (!/^\d?$/.test(value)) return;
        setError('');
        const newOtp = [...otp];
        newOtp[idx] = value;
        setOtp(newOtp);
        if (value && idx < OTP_LENGTH - 1) {
            inputsRef.current[idx + 1]?.focus();
        }
    };

    const handleKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
        if (key === 'Backspace' && !otp[idx] && idx > 0) {
            inputsRef.current[idx - 1]?.focus();
        }
    };

    const handlePaste = ({ clipboardData }: React.ClipboardEvent<HTMLInputElement>) => {
        const pasted = clipboardData.getData('Text').replace(/\D/g, '').slice(0, OTP_LENGTH);
        if (pasted.length === OTP_LENGTH) {
            setOtp(pasted.split(''));
            setError('');
            inputsRef.current[OTP_LENGTH - 1]?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (otp.some((d) => d === '')) {
            setOtpError('Please enter the complete 6-digit OTP.');
            return;
        }
        setMessage('OTP verified successfully!');
        setOtpError('');
    };

    const handleResend = () => {
        if (resendTimer === 0) {
            setOtp(Array(OTP_LENGTH).fill(''));
            setResendTimer(RESEND_TIME);
            setValidTimer(VALID_TIME);
            setMessage('A new OTP has been sent.');
            setError('');
        }
    };
    const handleChangeNumber = () => {
        setStep(step - 1);
    };

    return (
        <form className="w-full max-w-xl " onSubmit={handleSubmit}>
            <Text text="OTP Verification" className="text-white mb-6 block font-bold text-[30px]" />

            <Text className="text-white mb-[96px] font-[Poppins] font-normal text-[17px] leading-[120%]">
                We&apos;ve sent a 6-digit code to {phone}. Please enter it below to verify your
                identity
                <Button
                    type="button"
                    variant="link"
                    onClick={handleChangeNumber}
                    className="ml-2 text-[16px] font-[Poppins] font-normal leading-[120%] text-vividPink underline p-0 h-auto"
                >
                    Change Number
                </Button>
            </Text>

            <div className="flex items-center justify-between mb-2">
                <Text as="label" text="OTP" className="block text-white font-semibold mb-2" />
                <Text as="span" className="text-gray-300 text-sm mr-20 py-1">
                    Valid for{' '}
                    {`${String(Math.floor(validTimer / 60)).padStart(2, '0')}:${String(
                        validTimer % 60
                    ).padStart(2, '0')}`}
                </Text>
            </div>

            <div className="flex md:space-x-12 space-x-4 mb-2">
                {otp?.map((digit, idx) => (
                    <Input
                        key={idx}
                        id={`otp-${idx}`}
                        ref={(el) => {
                            inputsRef.current[idx] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        onPaste={handlePaste}
                        className={`max-w-[40px] h-[48px] text-center text-2xl font-bold rounded-md border-2 focus:outline-none transition-colors bg-transparent text-white ${
                            error ? 'border-red-400' : 'border-warmOrange'
                        } focus:border-orange-400`}
                        autoComplete="one-time-code"
                    />
                ))}
            </div>

            {error && <Text as="p" text={error} className="text-xs text-red-400 mb-2" />}

            <div className="flex items-center justify-end mr-20 mb-6">
                <Text as="span" text="Didn't Recieve?" className="text-gray-300 text-sm" />
                <Button
                    type="button"
                    variant="link"
                    className={`text-vividPink text-sm font-semibold ${
                        resendTimer > 0 ? 'opacity-60 cursor-not-allowed' : 'hover:underline'
                    }`}
                    onClick={handleResend}
                    disabled={resendTimer > 0}
                >
                    Resend Code In{' '}
                    {resendTimer > 0
                        ? `0${Math.floor(resendTimer / 60)}:${String(resendTimer % 60).padStart(2, '0')}`
                        : 'Now'}
                </Button>
            </div>
            <div className="w-full flex justify-center">
                <Button
                    variant={'search'}
                    type="submit"
                    className="md:w-[392px] max-h-[43px] mt-6  text-white font-bold py-3 rounded-md text-lg shadow transition-colors"
                >
                    Verify OTP
                </Button>
            </div>
        </form>
    );
}
