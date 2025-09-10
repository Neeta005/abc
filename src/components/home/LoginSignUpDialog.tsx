'use client';
import Image from 'next/image';
import React, {
    useEffect,
    useRef,
    useState,
    useTransition,
    ChangeEvent,
    KeyboardEvent,
    ClipboardEvent,
    MouseEventHandler,
    MouseEvent,
} from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import SignInButton from '@/components/SignInButton';
import LeftFrame from '@/assets/shapes/Left frame.png';
import Logo from '@/assets/logos/logo-interns.png';
import { resendOtp, sendOtp } from '@/lib/actions/request-otp';
import { loginWithOtp } from '@/lib/actions/auth';
import PersonSvg from '../svgs/personSvg';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
export default function PopUpDialog() {
    const router = useRouter();
    const { data, status } = useSession();
    const [otpSent, setOtpSent] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [isPending, startTransition] = useTransition();
    const [email, setEmail] = useState<string>('');
    const [isRegistering, setIsRegistering] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [activeTab, setActiveTab] = useState<'candidate' | 'recruiter'>('candidate');
    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const [formData, setFormData] = useState<FormData | null>(null);

    const onComplete = async (otp: string) => {
        try {
            const result = await loginWithOtp(formData?.get('email') as string, otp);
            if (result?.error) {
                setError('Invalid OTP');
            } else {
                window.location.href =
                    activeTab === 'recruiter' ? ' /public/company' : '/public/register';
            }
        } catch (error) {
            setError('Failed to login. Please try again.');
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);
        if (e.target.value && index < 6 - 1) {
            inputsRef.current[index + 1]?.focus();
        }
        if (newOtp.join('').length === 6) {
            onComplete(newOtp.join(''));
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>, index: number) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').trim();
        if (/^[0-9]{1,6}$/.test(pastedData)) {
            const pastedOtp = pastedData.split('').slice(0, 6);
            const newOtp = [...otp];
            for (let i = 0; i < pastedOtp.length && index + i < 6; i++) {
                newOtp[index + i] = pastedOtp[i];
            }
            setOtp(newOtp);
            setError('');
            const lastFilledIndex = Math.min(index + pastedOtp.length - 1, 5);
            inputsRef.current[lastFilledIndex]?.focus();
            if (newOtp.join('').length === 6) {
                onComplete(newOtp.join(''));
            }
        } else {
            setError('Please paste a valid 6-digit OTP');
        }
    };

    const handleSubmit = async (formData: FormData) => {
        setError('');
        const email = formData.get('email') as string | null;
        if (!email) {
            setError('Email is required');
            return;
        }
        startTransition(async () => {
            const result = await sendOtp(email);
            if (result.success) {
                setFormData(formData);
                setError('');
                setOtpSent(true);
            } else {
                setError(result.message);
            }
        });
    };

    const resendCode = async () => {
        if (!formData) return;
        const email = formData.get('email') as string | null;
        if (!email) return;
        setError('');
        setOtp(Array(6).fill(''));
        const result = await resendOtp(email);
        if (!result.success) {
            setError(result.message);
        }
    };

    if (status === 'loading') {
        return <Text as="p">Loading...</Text>;
    }

    const handleOtpSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const fullOtp = otp.join('');

        if (fullOtp.length === 6) {
            onComplete(fullOtp);
            router.push('/public/company');
        } else {
            setError('Please enter a valid 6-digit OTP');
        }
    };
    const handleResendOTP = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        resendCode();
    };
    const handleEmailSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!email) {
            setError('Please enter your email');
            return;
        }
        const fd = new FormData();
        fd.append('email', email);
        handleSubmit(fd);
        setOtpSent(true);
        setError('');
    };
    const handleLoginSignUp = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsLogin(!isLogin);
    };

    return (
        <Dialog open={isRegistering} onOpenChange={() => setIsRegistering(!isRegistering)}>
            <DialogTitle className="hidden">Login/Register Form</DialogTitle>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    className="inline-flex items-center gap-2 px-4 py-2 hover:bg-gray-800/10"
                >
                    <PersonSvg />
                    <Text
                        as="span"
                        text="Login/Register"
                        className="font-sans text-sm font-semibold bg-gradient-to-r from-wineRed to-warmOrange bg-clip-text text-transparent"
                        onClick={() => setIsRegistering(!isRegistering)}
                    />
                </Button>
            </DialogTrigger>
            <DialogContent
                showCloseIcon={false}
                className="w-[90%] max-w-[90vw] xs:max-w-[320px] sm:max-w-[480px] lg:max-w-[950px] p-0 m-0 bg-transparent border-none rounded-lg h-auto xs:max-h-[96vh] md:max-h-[525px] md:min-h-[525px] overflow-hidden"
            >
                <div className="flex flex-col lg:flex-row h-full">
                    <div className="hidden lg:block lg:w-1/2 relative bg-gray-900">
                        <Image
                            src={LeftFrame}
                            alt="Intern at desk"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                        <div className="absolute top-4 left-4 text-white font-bold text-lg">
                            <Image
                                src={Logo}
                                alt="Logo"
                                className="w-[125px] h-auto max-w-full md:w-[120px] sm:w-[80px] xs:w-[75px]"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-0 bg-charcoalBlue text-white flex flex-col justify-center items-center sm:p-8">
                        <div className="flex justify-center mb-[30px] mt:[10px] md:mt-[20px] lg:ml-auto">
                            <div className="font-inter flex bg-gray-200 rounded-full p-1 w-64">
                                <Button
                                    variant={'secondary'}
                                    disabled={otpSent}
                                    onClick={() => setActiveTab('candidate')}
                                    className={`flex-1 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === 'candidate' ? 'bg-deepOceanBlue text-white' : 'bg-transparent text-gray-600 hover:text-gray-800'}`}
                                >
                                    As Candidate
                                </Button>
                                <Button
                                    variant={'secondary'}
                                    disabled={otpSent}
                                    onClick={() => setActiveTab('recruiter')}
                                    className={`flex-1 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === 'recruiter' ? 'bg-deepOceanBlue text-white' : 'bg-transparent text-gray-600 hover:text-gray-800'}`}
                                >
                                    As Recruiter
                                </Button>
                            </div>
                        </div>

                        {otpSent ? (
                            <div className="flex flex-col items-center justify-center bg-dark-900 text-white rounded-lg shadow-lg w-full">
                                <div className="flex items-center text-white w-full mb-4">
                                    <hr className="flex-grow border-white" />
                                    <Text
                                        as="span"
                                        text={`Or,  ${isLogin ? 'Log in' : 'SignUp'} with email`}
                                        className="font-inter mx-2 text-xs"
                                    />
                                    <hr className="flex-grow border-white" />
                                </div>
                                <Text
                                    as="h2"
                                    text="OTP Verification"
                                    className="text-xl font-semibold mb-6"
                                />
                                <Text as="p" className="text-sm mb-4">
                                    Enter OTP code sent to {formData?.get('email') as string}
                                </Text>
                                <form action={async () => {}}>
                                    <div className="grid grid-cols-6 gap-2 sm:gap-3 md:gap-4 mb-[65px] w-full max-w-lg mx-auto">
                                        {Array.from({ length: 6 })?.map((_, index) => (
                                            <Input
                                                key={index}
                                                ref={(el: HTMLInputElement | null) => {
                                                    inputsRef.current[index] = el;
                                                }}
                                                type="text"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                autoComplete="one-time-code"
                                                placeholder="0"
                                                minLength={1}
                                                maxLength={1}
                                                value={otp[index]}
                                                onChange={(e) => handleChange(e, index)}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                                onPaste={(e) => handlePaste(e, index)}
                                                className="w-full h-10 sm:h-11 md:h-12 bg-charcoalBlue text-center text-lg sm:text-xl md:text-2xl font-semibold text-white border border-solid border-slate-500 focus:border-angelWing-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-colors"
                                            />
                                        ))}
                                    </div>
                                    <Text as="p" className="text-sm text-center">
                                        Don't receive OTP code?{' '}
                                        <Button
                                            variant="link"
                                            className="text-pink-500 hover:text-pink-600 p-0 h-auto"
                                            onClick={handleResendOTP}
                                        >
                                            Resend Code
                                        </Button>
                                    </Text>
                                    <div className="w-full flex justify-center items-center">
                                        <Button
                                            type="submit"
                                            disabled={activeTab === 'candidate'}
                                            onClick={handleOtpSubmit}
                                            className="font-inter flex w-1/2 justify-center items-center text-white text-base font-semibold px-4 py-2 md:mt-[20px] md:mb-[25px] transition-colors text-sm rounded-full bg-gradient-to-r from-wineRed to-warmOrange"
                                        >
                                            Verify
                                        </Button>
                                    </div>
                                </form>
                                <Text as="p" className="flex items-center font-inter text-xs mt-3">
                                    Don't have an account?&nbsp;
                                    <Link href="/public/register" className="inline">
                                        <Text
                                            as="span"
                                            onClick={() => {
                                                setOtpSent(false);
                                                setError('');
                                            }}
                                            className="text-blue-400 hover:underline cursor-pointer"
                                        >
                                            {' '}
                                            Sign up
                                        </Text>{' '}
                                    </Link>
                                </Text>
                            </div>
                        ) : (
                            <>
                                <Text
                                    as="h2"
                                    text={isLogin ? 'Log in' : 'Sign Up'}
                                    className="font-sans text-2xl font-bold mb-[45px] mr-auto"
                                />
                                <SignInButton
                                    className={`${activeTab === 'recruiter' ? 'cursor-not-allowed' : ''}`}
                                    disabled={activeTab === 'recruiter'}
                                />
                                <div className="flex items-center text-white w-full mb-4">
                                    <hr className="flex-grow border-white" />
                                    <Text
                                        as="span"
                                        text={`Or,${isLogin ? 'Log in' : 'Sign Up'} with email`}
                                        className="font-inter mx-2 text-xs"
                                    />
                                    <hr className="flex-grow border-white" />
                                </div>
                                <form
                                    action={async (formData: FormData) => {
                                        await handleSubmit(formData);
                                    }}
                                    className="w-full space-y-4"
                                >
                                    <div>
                                        <Text
                                            as="label"
                                            text="Email"
                                            className="font-inter block text-xs mb-1"
                                        />
                                        <Input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="you@company.com"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                            className={`w-full p-2 rounded-md bg-white border border-gray-600 focus:outline-none focus:ring-none text-sm text-black ${activeTab === 'candidate' ? 'cursor-not-allowed' : ''}`}
                                            disabled={activeTab === 'candidate'}
                                        />
                                        <Text
                                            as="p"
                                            text={` ${isLogin ? 'Log in' : 'Sign Up'} via OTP`}
                                            className="font-inter text-xs text-gray-400 mt-1"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center justify-center md:mb-[25px]">
                                        <Button
                                            type="submit"
                                            onClick={handleEmailSubmit}
                                            disabled={activeTab === 'candidate'}
                                            className="font-inter flex w-1/2 justify-center text-white text-base font-semibold px-4 py-2 md:mt-[20px] mb-1 transition-colors text-sm rounded-full bg-gradient-to-r from-wineRed to-warmOrange"
                                        >
                                            {isLogin ? 'Log in' : 'Sign Up'}
                                        </Button>
                                        {error && (
                                            <Text
                                                as="p"
                                                text={error}
                                                className="flex justify-center w-full mx-auto text-red-500 text-[12px] font-medium text-center mb-1"
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <Button
                                            onClick={handleLoginSignUp}
                                            variant={'link'}
                                            className="text-blue-500 hover:underline border-0 "
                                        >
                                            {!isLogin ? 'Log in' : 'Sign Up'}
                                        </Button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
