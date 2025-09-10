import Image from 'next/image';
import Banner from '@/assets/banners/why-intern-banner.png';
import { Text } from '../ui/Text';
import { Button } from '../ui/button';
import { WhyDataArr } from './Data/whyIntern';
export function WhyIntern() {
    return (
        <>
            <div className="w-full lg:container antialiased bg-eclipseBlue mx-auto xs:mt-[50px] md:mt-[100px] flex flex-col md:flex-row items-center justify-between xs:p-4 lg:p-8 relative overflow-hidden">
                <div className="absolute w-[651.61px] h-[86.44px] left-[calc(50%-651.61px/2-17.82px)] top-[calc(50%-86.44px/2-10.72px)] bg-gradient-to-b from-wineRed to-warmOrange blur-[150px] z-0"></div>
                <div className="xs:w-full md:w-1/2 relative z-10">
                    <div className="inline-block px-4 py-2 rounded-full bg-white/10">
                        <Text className="font-sans font-bold text-base leading-none tracking-normal capitalize bg-gradient-to-r from-wineRed to-warmOrange bg-clip-text text-transparent">
                            <Text as="span" className="text-white">
                                🔥
                            </Text>{' '}
                            Unlock Top Talent With Ease
                        </Text>
                    </div>
                    <Text
                        as="h1"
                        text="Why Companies Choose InternGlobal"
                        className="font-sans text-white font-bold text-[22px] xs:text-[24px] lg:text-[30px] xl:text-[40px] leading-tight tracking-wide mt-4"
                    />
                    <Text
                        text="InternGlobal Simplifies Hiring by Connecting You with Verified, Skilled Interns Worldwide—Quickly, Affordably, and Hassle-Free"
                        className="font-bold text-white/80 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 tracking-normal capitalize mt-2"
                    />
                    <Text as="ul" className="mt-8 space-y-6">
                        {WhyDataArr?.map(({ avt, tle, cnt }, idx) => (
                            <Text as="li" className="flex items-start" key={idx + avt}>
                                <div className="xs:p-2 p-0 lg:w-10 lg:h-10 bg-red-500 rounded-full flex items-center justify-center mr-4">
                                    <Image
                                        src={avt}
                                        alt="Icon"
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 xs:w-4 xs:h-4"
                                    />
                                </div>
                                <div>
                                    <Text
                                        as="h3"
                                        text={tle}
                                        className="font-bold xs:text-[20px] md:text-2xl leading-none tracking-normal capitalize bg-gradient-to-r from-wineRed to-warmOrange bg-clip-text text-transparent"
                                    />
                                    <Text
                                        as="p"
                                        text={cnt}
                                        className="font-bold text-white xs:text-[13px] md:text-[15px] leading-7 tracking-normal capitalize mt-1 md:mt-2"
                                    />
                                </div>
                            </Text>
                        ))}
                    </Text>
                </div>
                <div className="xs:w-full md:w-1/2 mt-8 md:mt-8">
                    <div className="flex items-center justify-center rounded-lg">
                        <Image
                            src={Banner}
                            alt="Why Intern Banner"
                            className="w-full h-full xl:w-672.4473266601562 xl:h-585.5 object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full relative overflow-hidden free-postings-parent bg-gradient-to-r from-[#1D1A1F] to-[#0F0D14]">
                <div className="absolute w-[651.61px] h-[150px] left-[calc(50%-651.61px/2-17.82px)] bottom-[-50px] bg-gradient-to-b from-wineRed to-warmOrange blur-[150px] z-0"></div>
                <section className="free-postings-banner py-8 container mx-auto relative z-10">
                    <div className="px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div>
                                <Text
                                    as="h2"
                                    text="First 2 Postings Are Absolutely FREE!"
                                    className="text-3xl md:text-4xl font-bold text-warmOrange mb-2"
                                />
                                <Text
                                    text="Start Hiring Without Risk"
                                    className="text-white text-lg"
                                />
                            </div>
                            <Button className="mt-4 md:mt-0 bg-wineRed hover:bg-crimsonRed text-white font-bold py-3 px-6 rounded-lg flex items-center">
                                <Image
                                    src="/icons/unnamed (5).png"
                                    alt="Post Icon"
                                    width={20}
                                    height={20}
                                    className="h-5 w-5 mr-2"
                                />
                                Post An Internship Now!
                            </Button>
                        </div>
                    </div>
                </section>
                <div className="w-full h-[50px] bg-gradient-to-b from-voidBlue to-[#060609] relative z-[5]"></div>
            </div>
        </>
    );
}
