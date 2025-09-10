import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logos/logo-interns.png';
import AppStore from '@/assets/shapes/app-store.png';
import GooglePlay from '@/assets/shapes/google-play.png';
import { Text } from '@/components/ui/Text';

export function Footer() {
    return (
        <footer className="bg-eclipseBlue text-white py-12">
            <div className="px-[25px] md:px-[75px] mx-auto px-4 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2">
                            <Image
                                src={Logo}
                                alt="Logo"
                                className="w-[175px] h-auto max-w-full md:w-[150px] sm:w-[120px] xs:w-[100px]"
                            />
                        </div>
                        <Text className="mt-4 text-sm text-gray-300">
                            Find motivated interns from around the globe ready to bring fresh
                            perspectives to your team. Post your requirements and connect with
                            talent that matches your needs in just a few clicks.
                        </Text>
                        <div className="flex space-x-4 mt-4">
                            <Image src={AppStore} alt="App Store" width={120} height={40} />
                            <Image src={GooglePlay} alt="Google Play" width={120} height={40} />
                        </div>
                    </div>

                    <div>
                        <Text as="h3" text="Company" weight="semibold" className="text-lg mb-4" />
                        <Text as="ul" className="space-y-2 text-sm">
                            <Text as="li">
                                <Link href="/about">About Us</Link>
                            </Text>
                            <Text as="li">
                                <Link href="/how-it-works">How It Works</Link>
                            </Text>
                            <Text as="li">
                                <Link href="/careers">Careers</Link>
                            </Text>
                            <Text as="li">
                                <Link href="/contact">Contact Us</Link>
                            </Text>
                        </Text>
                    </div>

                    <div>
                        <Text
                            as="h3"
                            text="For Recruiters"
                            weight="semibold"
                            className="text-lg mb-4"
                        />
                        <Text as="ul" className="space-y-2 text-sm">
                            <Text as="li">
                                <Link href="/post-internship">Post An Internship</Link>
                            </Text>
                            <Text as="li">
                                <Link href="/success-stories">Success Stories</Link>
                            </Text>
                            <Text as="li">
                                <Link href="/pricing">Pricing Plans</Link>
                            </Text>
                            <Text as="li">
                                <Link href="/faq-employer">Employer FAQs</Link>
                            </Text>
                        </Text>
                    </div>

                    <div>
                        <Text
                            as="h3"
                            text="For Interns"
                            weight="semibold"
                            className="text-lg mb-4"
                        />
                        <Text as="ul" className="space-y-2 text-sm">
                            <Text as="li">
                                <Link href="/browse-internships">Browse Internships</Link>
                            </Text>
                            <Text as="li">
                                <Link href="/build-profile">Build Your Profile</Link>
                            </Text>
                            <Text as="li">
                                <Link href="/faq-intern">Intern FAQs</Link>
                            </Text>
                            <Text as="li">
                                <Link href="/sign-in">Sign In / Register</Link>
                            </Text>
                        </Text>
                    </div>

                    <div>
                        <Text
                            as="h3"
                            text="Support & Legal"
                            weight="semibold"
                            className="text-lg mb-4"
                        />
                        <Text as="ul" className="space-y-2 text-sm">
                            <Text as="li">
                                <Link href="/help">Help Center</Link>
                            </Text>
                            <Text as="li">
                                <Link href="/privacy-policy">Privacy Policy</Link>
                            </Text>
                            <Text as="li">
                                <Link href="/terms">Terms & Conditions</Link>
                            </Text>
                            <Text as="li">
                                <Link href="/report">Report An Issue</Link>
                            </Text>
                        </Text>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
                    <Text>&copy; 2025 InternGlobal. All Rights Reserved.</Text>
                </div>
            </div>
        </footer>
    );
}
