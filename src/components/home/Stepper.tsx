import React, { ReactNode } from 'react';
import Image from 'next/image';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
interface Step {
    icon: ReactNode;
    title: string;
    description: string;
}
const steps: Step[] = [
    {
        icon: (
            <Image
                src="/icons/f9ff4a59-5876-4e77-a670-21962688461c.png"
                alt="Create Company Profile"
                width={40}
                height={40}
                className="w-10 h-10"
            />
        ),
        title: 'Create Company Profile',
        description: 'Showcase Your Brand And Culture To Attract The Right Talent',
    },
    {
        icon: (
            <Image
                src="/icons/37a5dc0c-4c8f-461f-9957-c4eb859e5172.png"
                alt="Post Your Internship"
                width={40}
                height={40}
                className="w-10 h-10"
            />
        ),
        title: 'Post Your Internship',
        description: 'Define Skills, Duration, Location, And Stipend Details',
    },
    {
        icon: (
            <Image
                src="/icons/116f8c0e-5a3e-4aa3-8570-62ef9265e1d1.png"
                alt="Review Applicants"
                width={40}
                height={40}
                className="w-10 h-10"
            />
        ),
        title: 'Review Applicants',
        description: 'Browse Through Matching Candidates Or Get Our AI-Powered Recommendations',
    },
    {
        icon: (
            <Image
                src="/icons/1b547fdd-27fe-40c4-89ef-cd14cefd4cae.png"
                alt="Select & Onboard"
                width={40}
                height={40}
                className="w-10 h-10"
            />
        ),
        title: 'Select & Onboard',
        description: 'Connect With Your Chosen Interns And Start Collaborating',
    },
];

const getStepColor = (index: number) => {
    const colors: string[] = ['#FFAB43', '#DA481E', '#AF3189', '#3E3360'];
    return colors[index];
};
const getColor = (index: number) => {
    const colors: string[] = [
        'linear-gradient(180deg, #FFAB43 0%, #BB9B74 100%)',
        'linear-gradient(180deg, #DA481E 0%, #9F7A6F 100%)',
        'linear-gradient(180deg, #AF3189 0%, #B47FA4 100%)',
        'linear-gradient(180deg, #3E3360 0%, #A79CC7 100%)',
    ];
    return colors[index];
};

export function InternshipFlow() {
    return (
        <div className="flex flex-col justify-center py-12 relative overflow-hidden bg-gradient-to-r from-onyxGray to-graphiteBlue">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute left-[-6.52%] right-[83.92%] top-[12.91%] bottom-[31.32%] bg-gradient-to-b from-[rgba(255,171,67,0.62)] to-[rgba(255,255,255,0.58)] blur-[200px]"></div>
                <div className="absolute left-[60%] right-[10%] top-[60%] bottom-[10%] bg-gradient-to-b  from-[rgba(255,171,67,0.62)] to-[rgba(255,255,255,0.58)] blur-[200px]"></div>
            </div>
            <div className="flex items-center justify-center w-auto mt-12">
                <div className="inline-block px-4 py-2 rounded-full bg-white/10">
                    <Text className="font-sans font-bold text-base leading-none tracking-normal capitalize bg-gradient-to-r from-wineRed to-warmOrange bg-clip-text text-transparent">
                        <Text as="span" className="text-white">
                            🔥
                        </Text>{' '}
                        How It Works
                    </Text>
                </div>
            </div>

            <Text
                text="Hire Top Interns in Just a Few Steps"
                className="font-sans text-center text-white font-bold xs:text-[20px] md:text-[25px] lg:text-[35px] xl:text-[40px] leading-loose tracking-wide mb-4 mt-4"
            />
            <Text
                text="Simple Steps to find your perfect intern"
                className="text-center text-base text-white mb-[50px] capitalize"
            />

            <div className="hidden md:flex justify-center items-center px-12 mb-[50px] mt-8 relative">
                <div className="absolute w-[80%] h-[1px] bg-gray-600 z-0 hidden md:block"></div>
                {Array.from({ length: 4 })?.map((_, index) => (
                    <div
                        key={index}
                        className="flex-1 flex justify-center items-center relative z-10"
                    >
                        <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: getStepColor(index) }}
                        />
                    </div>
                ))}
            </div>

            <div className="max-w-7xl hidden md:flex mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
                    {steps?.map(({ icon, title, description }, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center relative z-10"
                        >
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-[0px_4px_15px_rgba(0,0,0,0.25)]"
                                style={{ background: getColor(index) }}
                            >
                                {icon}
                            </div>
                            <Text
                                className="text-lg font-semibold mb-2 bg-clip-text text-transparent"
                                style={{ backgroundImage: getColor(index) }}
                            >
                                {title}
                            </Text>
                            <Text
                                text={description}
                                className="text-[14px] md:text-[16px] leading-[150%] tracking-normal text-white/80 text-center capitalize"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="md:hidden mx-auto px-4 sm:px-6 mt-6">
                <div className="flex flex-col space-y-12">
                    {steps?.map(({ icon, title, description }, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center relative"
                        >
                            {index < steps.length - 1 && (
                                <div className="absolute h-12 w-0.5 bg-gray-600 top-full left-1/2 -translate-x-1/2"></div>
                            )}
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-[0px_4px_15px_rgba(0,0,0,0.25)] z-[2]"
                                style={{ background: getColor(index) }}
                            >
                                {icon}
                            </div>
                            <div
                                className="absolute top-0 right-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold translate-x-1/4 -translate-y-1/4"
                                style={{ background: getStepColor(index) }}
                            >
                                {index + 1}
                            </div>
                            <Text
                                className="text-lg font-semibold mb-2 bg-clip-text text-transparent"
                                style={{ backgroundImage: getColor(index) }}
                            >
                                {title}
                            </Text>
                            <Text
                                text={description}
                                className="text-[14px] md:text-[16px] leading-[150%] tracking-normal text-white/80 text-center capitalize"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
