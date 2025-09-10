import Image from 'next/image';
import LogoGoogle from '@/assets/shapes/logos.png';
import LogoFacebook from '@/assets/shapes/logos (1).png';
import LogoMicrosoft from '@/assets/shapes/logos (2).png';
import LogoLenovo from '@/assets/shapes/logos (3).png';
import LogoSkoda from '@/assets/shapes/logos (4).png';
import Banner from '@/assets/banners/cta-banner.png';

import { Text } from '../ui/Text';
import { Button } from '../ui/button';

const companyLogos = [
    { src: LogoGoogle, alt: 'Google' },
    { src: LogoFacebook, alt: 'Facebook' },
    { src: LogoMicrosoft, alt: 'Microsoft' },
    { src: LogoLenovo, alt: 'Lenovo' },
    { src: LogoSkoda, alt: 'Skoda' },
];

export function CallToAction() {
    return (
        <div className="w-full antialiased bg-eclipseBlue px-[25px] md:px-[75px]">
            <Text className="font-sans mx-auto xs:pt-[25px] md:pt-[50px] align-left text-white font-bold xs:text-[20px] md:text-[25px] lg:text-[35px] xl:text-[40px] leading-loose tracking-wide mb-4 mt-2">
                Ready to Find Your Next{' '}
                <Text
                    as={'span'}
                    text={'Star Intern?'}
                    className="bg-gradient-to-r lg:text-[35px] xl:text-[40px] font-sans from-wineRed to-warmOrange bg-clip-text text-transparent"
                />
            </Text>

            <div className="mx-auto pb-12 gap:4 md:gap-8 flex flex-col md:flex-row items-center md:space-between">
                <div className="md:w-3/5 space-y-6">
                    <Text
                        text="Join Hundreds Of Forward-Thinking Companies Building Their Talent Pipeline With InternGlobal."
                        className="text-[14px] md:text-[16px] leading-[150%] tracking-normal text-white/80 text-left capitalize"
                    />
                    <Button className="mt-8 text-white font-bold text-base py-3 px-6 rounded-lg">
                        Post Your Free Listing!
                    </Button>
                    <div className="p-4 rounded-lg mt-4 bg-charcoalGray bg-[linear-gradient(86.19deg,rgba(255,171,67,0.04)_1.6%,rgba(255,105,106,0.04)_50.46%,rgba(218,72,30,0.04)_99.32%)]">
                        <Text
                            text="Every Internship Posted Includes Our Internship Success Guarantee: Completion Certificates, Structured Feedback Templates, And Compliance Guidance."
                            className="text-[14px] md:text-[16px] leading-[150%] tracking-normal text-white/80 text-left capitalize font-bold"
                        />
                    </div>
                    <div className="mt-4">
                        <Text
                            text="Trusted by Top Companies Worldwide"
                            className="text-[14px] md:text-[16px] leading-[150%] tracking-normal text-white/80 text-left capitalize"
                        />
                        <div className="flex overflow-hidden flex-wrap space-x-6 mt-4">
                            {companyLogos?.map(({ src, alt }, index) => (
                                <Image
                                    key={index}
                                    src={src}
                                    alt={alt}
                                    width={80}
                                    height={40}
                                    className="object-contain"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="md:w-2/5 relative mt-12 md:mt-0">
                    <div className="flex items-center justify-center rounded-lg">
                        <Image
                            src={Banner}
                            alt="Why Intern Banner"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
