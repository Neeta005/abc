import React from 'react';
import ProfileBio from '@/components/shared/ProfileBio';
import profileBg from '@/assets/banners/companyProfile.png';
import ProfileDetails from '@/components/company/profile/CompanyProfile/ProfileDetail';
import ProfileSocials from '@/components/company/profile/CompanyProfile/ProfileSocials';
import ProfileSummary from '@/components/company/profile/CompanyProfile/CompanyProfileSummary';
export default function ProfilePage() {
    return (
        <div className="flex gap-3 bg-transparent">
            <ProfileSummary />
            <div
                className="absolute -top-8 right-0 bg-no-repeat bg-right opacity-10 h-[900px] w-[550px] bg-[length:103%_103%] z-0"
                style={{ backgroundImage: `url(${profileBg.src})` }}
            ></div>
            <div className="flex flex-col gap-4">
                <ProfileDetails />
                <ProfileBio />
                <ProfileSocials />
            </div>
        </div>
    );
}
