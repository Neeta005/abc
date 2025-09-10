import React from 'react';
import { Square } from 'lucide-react';
import ProfileHeaderProps from '@/types/Profile';
import { Text } from '@/components/ui/Text';
import RatingStar from '@/components/shared/RatingStars';
const ProfileHeader = ({
    name,
    location,
    gender,
    college,
    education,
    passOutYear,
    recommended,
    avgSkillRating,
    certificateCount,
}: ProfileHeaderProps) => (
    <div className="flex items-center gap-4 text-white">
        <div>
            <Text
                as="h2"
                size="2xl"
                weight="bold"
                className="flex items-center gap-2 mb-[16px]"
                text={
                    <>
                        <span>
                            <Square className="text-warmOrange" />
                        </span>
                        {name}
                    </>
                }
            />
            <div className="text-gray-300 mt-2 space-y-1 text-[14px] flex flex-col gap-4">
                <div className="relative">
                    <Text>
                        Location: <Text as="span" text={location} className="text-white ml-2" />
                    </Text>
                    <div className="inline right-0 absolute">
                        {recommended && (
                            <Text
                                as="span"
                                text="Recommended"
                                size="xs"
                                className="ml-2 px-3 py-1 bg-green-700 rounded-full"
                            />
                        )}
                    </div>
                </div>
                <Text>
                    Gender: <Text as="span" text={gender} className="text-white ml-2" />
                </Text>
                <Text>
                    College: <Text as="span" text={college} className="text-white ml-2" />
                </Text>
                <Text>
                    Education: <Text as="span" text={education} className="text-white ml-2" />
                </Text>
                <Text>
                    Pass Out Year: <Text as="span" text={passOutYear} className="text-white ml-2" />
                </Text>
                <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center gap-2">
                        <Text text="Avg. Skill Rating:" />
                        <RatingStar stars={avgSkillRating} />
                    </div>
                </div>
                <Text size="sm" className="text-gray-300">
                    No. of Certificates:{' '}
                    <Text as="span" text={certificateCount} className="text-white ml-2" />
                </Text>
            </div>
        </div>
    </div>
);

export default ProfileHeader;
