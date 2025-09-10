import React from 'react';
import { Text } from '@/components/ui/Text';
import Switch from '@mui/material/Switch';
import { OffersResponsibilities, JobPosting } from '@/stores/jobPostingStore';

interface OfferSectionProps {
    label: string;
    fieldKey: keyof OffersResponsibilities;
    checkedValue: boolean;
    handleBlur: (fieldName: keyof OffersResponsibilities, checked: boolean) => void;
    setRespoOffer: (state: OffersResponsibilities) => void;
    offerRespo: OffersResponsibilities;
}

export default function OfferSection({
    label,
    fieldKey,
    checkedValue,
    handleBlur,
    setRespoOffer,
    offerRespo,
}: OfferSectionProps) {
    return (
        <div className="flex items-center justify-between">
            <Text text={label} as="span" className="text-white text-base" />
            <Switch
                checked={checkedValue}
                onChange={(_, checked) => {
                    setRespoOffer({ ...offerRespo, [fieldKey]: checked });
                    handleBlur(fieldKey, checked);
                }}
                sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#000',
                        '& + .MuiSwitch-track': {
                            background: 'linear-gradient(90deg, #CE2E51 0%, #FF9F49 100%)',
                        },
                    },
                    '& .MuiSwitch-track': {
                        background: 'linear-gradient(90deg, #CE2E51 0%, #FF9F49 100%)',
                    },
                }}
            />
        </div>
    );
}
