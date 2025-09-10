import { linkedInSVG } from '../SocialSvgs/linkedin';
import { ProfileSocials as ProfileProps } from '@/types/companyRegistration';
export const socials: ProfileProps[] = [
    { name: 'linkedin', link: 'https://www.linkedin.com/company/softsuittech' },
];

export const socialIcons: Record<string, JSX.Element> = {
    linkedin: linkedInSVG(),

    // twitter: <TwitterSvg />,
    // facebook: <FacebookSvg />,
};
