import Image from 'next/image';
import Avatar_Arr from './assets/index';
import StudentsImage from '@/assets/shapes/students-hero.png';
import Avatar2 from '@/assets/avatars/avatar-2.png';
import Avatar3 from '@/assets/avatars/avatar-3.png';
import Avatar5 from '@/assets/avatars/avatar-5.png';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

export function Hero() {
    return (
        <section className="relative w-full h-auto flex flex-col items-center justify-start overflow-hidden">
            <>
                <div
                    className="absolute inset-0 w-full h-full object-cover bg-cover bg-center z-0 hidden sm-md:block "
                    style={{ backgroundImage: "url('/assets/hero-world-img.png')" }}
                ></div>
                <div className="absolute inset-0 w-full h-full z-[5]">
                    <div
                        id="left-silhouette"
                        className="absolute left-[7%] bottom-[39%] h-[43%] w-[43%] z-10"
                        style={{
                            transform: 'scaleX(-1) rotate(-5deg)',
                            maskImage:
                                'linear-gradient(to bottom, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)',
                            WebkitMaskImage:
                                'linear-gradient(to bottom, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)',
                        }}
                    >
                        <Image
                            src="/screenshots/graduation_silhouette.png"
                            alt="Left Graduation Silhouette"
                            width={300}
                            height={300}
                            className="h-full w-full object-contain opacity-80"
                            priority
                        />
                    </div>
                    <div
                        id="right-silhouette"
                        className="absolute right-[6%] bottom-[38%] h-[43%] w-[43%] z-10"
                        style={{
                            transform: 'scaleX(1) rotate(-3deg)',
                            maskImage:
                                'linear-gradient(to bottom, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)',
                            WebkitMaskImage:
                                'linear-gradient(to bottom, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)',
                        }}
                    >
                        <Image
                            src="/screenshots/graduation_silhouette.png"
                            alt="Right Graduation Silhouette"
                            width={300}
                            height={300}
                            className="h-full w-full object-contain opacity-80"
                            priority
                        />
                    </div>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-0">
                    <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[600px] h-[300px]">
                        <div className="w-full h-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35)_0%,rgba(59,130,246,0.20)_40%,rgba(59,130,246,0.1)_70%,transparent_100%)] blur-lg"></div>
                    </div>
                </div>
                <div className="relative container mx-auto text-center text-white z-[5]">
                    <div className="flex justify-center md:mt-[-5px] xs:mt-[5px] md:mb-[18px] lg:mb-[38px] xl:mb-[48px] relative">
                        <div className="relative z-20">
                            <Image
                                src={StudentsImage}
                                alt="Students"
                                className="w-[463.5px] h-auto md:h-auto max-w-full xs:w-[300px] sm:w-[320px] md:w-[463.5px] xl:w-[563.5px]"
                                priority
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center mb-4">
                            <div className="inline-block px-6 py-1 rounded-xl bg-white/60">
                                <Text
                                    as="h1"
                                    text="HIRE PASSIONATE INTERNS"
                                    className="font-sans hidden md:block font-bold text-center tracking-[1%] leading-[150%] text-[10px] sm:text-[10px] md:text-3xl lg:text-[1.8rem] xl:text-[2.4rem] uppercase bg-gradient-to-r from-wineRed to-warmOrange bg-clip-text text-transparent"
                                />
                            </div>
                            <Text
                                as="h1"
                                text="ACROSS"
                                className="font-sans hidden md:block font-bold text-center tracking-[1%] leading-[150%] text-white text-[10px] sm:text-[10px] md:text-3xl lg:text-[1.8rem] xl:text-[2.4rem] ml-2 uppercase"
                            />
                        </div>
                        <Text
                            as="h1"
                            text="BORDERS. BUILD YOUR FUTURE WORKFORCE"
                            className="font-sans hidden md:block font-bold text-center uppercase tracking-[1%] leading-[150%] text-white text-[10px] sm:text-[10px] md:text-3xl lg:text-[1.8rem] xl:text-[2.4rem]"
                        />
                    </div>
                </div>
                {Avatar_Arr?.map(({ clN, animationDelay, avt }, idx) => (
                    <div key={idx} className={clN} style={{ animationDelay: animationDelay }}>
                        <Image
                            src={avt}
                            alt="Avatar"
                            width={48}
                            height={48}
                            className="rounded-full xs:w-8 xs:h-8 md:w-10 xl:w-12 md:h-10 xl:h-12 mx-auto"
                        />
                    </div>
                ))}
            </>

            <div className="mobile-hero-container relative w-full overflow-hidden  sm-md:hidden">
                <Image
                    src="/screenshots/iPhone 16 - 1.png"
                    alt="Combined Mobile Image"
                    width={500}
                    height={600}
                    className="w-screen h-auto object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="mobile-text-overlay absolute top-[380px] left-0 w-full px-4 z-[200]">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center mb-2">
                            <div className="inline-block px-3 py-0.5 rounded-xl bg-white/60">
                                <Text
                                    as="h1"
                                    text="HIRE PASSIONATE INTERNS"
                                    className="font-sans font-bold text-center uppercase text-base leading-[120%] bg-gradient-to-r from-wineRed to-warmOrange bg-clip-text text-transparent"
                                />
                            </div>
                            <Text
                                as="h1"
                                text="ACROSS"
                                className="font-sans font-bold text-center uppercase text-white ml-2 text-base leading-[120%]"
                            />
                        </div>
                        <Text
                            as="h1"
                            text="BORDERS. BUILD YOUR FUTURE WORKFORCE"
                            className="font-sans font-bold text-center uppercase text-white text-base leading-[120%] whitespace-nowrap"
                        />
                        <Text
                            as="p"
                            className="mt-4 text-center text-xs leading-[18px] text-white/80"
                        >
                            Find Motivated Interns From Around The Globe Ready To Bring Fresh
                            Perspectives To Your Team. Post Your Requirements And Connect With
                            Talent That Matches Your Needs In Just A Few Clicks
                        </Text>
                        <Button className="flex flex-row justify-center items-center gap-5 w-[160px] h-[50px] text-white font-bold rounded-[10px] shadow-md mt-6 bg-gradient-to-r from-wineRed to-warmOrange">
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className="avatarcard absolute bottom-[22%] left-[8%] z-50">
                    <Image src={Avatar2} alt="Avatar" className="rounded-full w-8 h-8" />
                </div>
                <div className="avatarcard absolute bottom-[15%] left-[78%] z-50">
                    <Image src={Avatar3} alt="Avatar" className="rounded-full w-8 h-8" />
                </div>
                <div className="avatarcard absolute bottom-[12%] left-[22%] z-50">
                    <Image src={Avatar5} alt="Avatar" className="rounded-full w-8 h-8" />
                </div>
            </div>

            <div
                className={`desktop-subheading w-full text-center mt-6 relative z-[999] sm-md:block hidden`}
            >
                <Text
                    as="p"
                    className="subheading-text mx-auto font-bold text-base leading-7 tracking-normal text-center text-white/80"
                >
                    Find Motivated Interns From Around The Globe Ready To Bring Fresh Perspectives
                    To
                    <br />
                    Your Team. Post Your Requirements And Connect With Talent That Matches Your
                    Needs
                    <br />
                    In Just A Few Clicks
                </Text>
            </div>
            <div
                className={`desktop-cta-container w-full justify-center mt-8 mb-8 relative z-[999] sm-md:flex hiddedn`}
            >
                <Button className="get-started-btn flex-row justify-center items-center gap-5 w-[190px] h-[60px] text-white font-bold rounded-[10px] shadow-md bg-gradient-to-r from-wineRed to-warmOrange">
                    Get Started
                </Button>
            </div>
        </section>
    );
}
