import ProfileHeader from '@/components/company/profile/profile-header';
import ProfileSkills from '@/components/company/profile/profile-skills';
import ProfileActions from '@/components/company/profile/profile-actions';
import { MessageCircle } from 'lucide-react';
import ProfileSocialLinks from '@/components/company/profile/profile-socialLinks';
import ProfileActionButtons from '@/components/company/profile/profile-actionButtons';

import Image from 'next/image';

import avatar from '@/assets/avatars/avatar-1.png';
import Link from 'next/link';

export default function ApplicantProfile({
    onEventClick,
    onAddComment,
    onViewCompetency,
}: {
    onEventClick: () => void;
    onAddComment: () => void;
    onViewCompetency: () => void;
}) {
    return (
        <div className="flex flex-col w-full justify-between">
            <div className="flex gap-3 bg-richSlateBlue  max-h-[368px] p-5 justify-between ">
                <div className=" flex justify-center items-center flex-col">
                    <div className="relative">
                        <Image src={avatar} alt={'avatar'} width={100} height={100} />
                        <Link href={'/dashboard/messages'}>
                            <div className="absolute -right-3 -bottom-2 border w-11 h-11 flex  justify-center items-center bg-blue-600 rounded-full border-transparent cursor-pointer">
                                <MessageCircle />
                            </div>
                        </Link>
                    </div>
                    <ProfileSkills
                        skills={[
                            'UX design',
                            'UI Design',
                            'Interaction Design',
                            'Information architecture',
                            'User Journey',
                        ]}
                    />
                    <ProfileActions onViewProfile={() => {}} onViewCompetency={onViewCompetency} />
                </div>
                <div className=" flex flex-start w-full">
                    <ProfileHeader
                        name="Radhika Marimuthu"
                        location="Bengaluru, India"
                        gender="Female"
                        college="Massachusetts Institute Of Technology"
                        education="BSC. Computer Science, MA. Information Technology"
                        passOutYear="2023/2024"
                        avgSkillRating={4.0}
                        certificateCount={5}
                        recommended
                    />
                </div>

                <div className="flex justify-end  w-[5%]">
                    {' '}
                    <ProfileSocialLinks
                        links={{
                            email: 'd',
                            linkedin: 'd',
                            behance: 'dd',
                            github: 'd',
                            dribbble: 'd',
                        }}
                    />
                </div>
            </div>
            <div className="bg-richSlateBlue">
                <ProfileActionButtons
                    onShortlist={() => {}}
                    onNotEligible={() => {}}
                    onScheduleInterview={onEventClick}
                    onHide={() => {}}
                    onAddComment={onAddComment}
                />
            </div>
        </div>
    );
}
