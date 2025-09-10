import React from 'react';
import { Text } from '@/components/ui/Text';
import RatingStar from '@/components/shared/RatingStars';
import Image from 'next/image';
import avatar6 from '@/assets/avatars/avatar-6.png';
import { ProfileColumn } from '@/types/Jobs';

export default function Column({ keyName, width, row, columns, applicant = false }: ProfileColumn) {
    return (
        <div className="px-2 text-center" style={{ width: width || `${100 / columns?.length}%` }}>
            {keyName === 'rating' && row[keyName] && <RatingStar stars={Number(row[keyName])} />}

            {!applicant && keyName !== 'rating' && <Text text={row[keyName]} size="sm" />}

            {applicant && keyName !== 'name'
                ? keyName !== 'rating' && <Text text={row[keyName]} size="sm" />
                : applicant &&
                  keyName === 'name' && (
                      <div className="flex items-center gap-2">
                          <Image src={avatar6.src} alt="image" width={30} height={30} />
                          <Text text={row[keyName]} size="sm" />
                      </div>
                  )}
        </div>
    );
}
