import React from 'react';

import { githubSvg } from './SocialSvgs/github';
import { dribbbleSvg } from './SocialSvgs/dribbleSvg';
import { emailSvg } from './SocialSvgs/email';
import { behanceSvg } from './SocialSvgs/behance';
import { linkedInSVG } from './SocialSvgs/linkedin';
import Link from 'next/link';
interface ProfileSocialLinksProps {
    links: {
        email?: string;
        linkedin?: string;
        behance?: string;
        github?: string;
        dribbble?: string;
    };
}

const icons = {
    email: emailSvg(),
    behance: behanceSvg(),
    github: githubSvg(),
    dribbble: dribbbleSvg(),
    linkedin: linkedInSVG(),
};

const ProfileSocialLinks = ({ links }: ProfileSocialLinksProps) => (
    <div className="flex flex-col gap-4 items-center h-[340px] justify-between">
        {Object.entries(links).map(([key, url]) =>
            url ? (
                <Link
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    {icons[key as keyof typeof icons]}
                </Link>
            ) : null
        )}
    </div>
);

export default ProfileSocialLinks;
