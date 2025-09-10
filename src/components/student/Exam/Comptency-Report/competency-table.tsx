import React from 'react';
import { SkillProps } from '@/types/Profile';
import { Text } from '@/components/ui/Text';
import RatingStar from '@/components/shared/RatingStars';
export default function CompetencyTable({ skills }: { skills: SkillProps[] }) {
    return (
        <tbody>
            {skills?.map(({ label, score }, idx) => (
                <tr className={`border-b border-gray-400/35`} key={idx}>
                    <td>
                        <Text text={label} className="text-xs" />
                    </td>
                    <td>
                        <RatingStar stars={score} />
                    </td>
                    <td>
                        <Text as="span" text={score} className="ml-2 text-xs" />
                    </td>
                </tr>
            ))}
        </tbody>
    );
}
