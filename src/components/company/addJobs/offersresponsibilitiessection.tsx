import React, { useState } from 'react';
import RichTextEditor from '@/components/shared/RichTextEditor';
import Switch from '@mui/material/Switch';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import useJobPosting from '@/stores/jobPostingStore';
import { useJobProgressStore } from '@/stores/progressStepperStore';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/Text';
import OfferSection from './offerSections';
const switchOptions = [
    { label: 'Training will be provided', key: 'training' },
    { label: 'Offer Letter will be provided', key: 'offer' },
    { label: 'Experience certificate will be provided', key: 'expCertificate' },
];

const OffersResponsibilitiesSection: React.FC = () => {
    const offerRespo = useJobPosting((state) => state.offersResponsibilities);
    const setRespoOffer = useJobPosting((state) => state.setOffersResponsibilities);
    const increment = useJobProgressStore((state) => state.incrementDone);
    const decrement = useJobProgressStore((state) => state.decrementDone);
    const jobProgress = useJobProgressStore((state) => state.progress);

    const handleBlur = (field: keyof typeof jobProgress, value: string | number | boolean) => {
        if (value !== '' && value !== false && value !== 0) {
            increment(field as any);
        } else {
            decrement(field as any);
        }
    };

    return (
        <div className="max-w-3xl py-6 bg-inherit rounded-lg">
            <Text
                text="Offers & Responsibilities"
                as="h2"
                className="text-white text-2xl font-bold mb-12"
            />
            <Text
                text="Roles & Responsibilities"
                as="label"
                className="block text-white text-lg font-semibold"
            />
            <div className="mb-6 mt-0">
                <RichTextEditor
                    className="lg:max-w-[679px] px-0"
                    value={offerRespo.rolesResp}
                    onChange={(value) => {
                        setRespoOffer({ ...offerRespo, rolesResp: value });
                    }}
                />
            </div>
            <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center justify-between">
                    <Text
                        text="Training will be provided"
                        as="span"
                        className="text-white text-base"
                    />
                    <Switch
                        checked={offerRespo.training}
                        onChange={(_, checked) => {
                            setRespoOffer({ ...offerRespo, training: checked });
                            handleBlur('training', checked);
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
                {/* <OfferSection
                    label="Experience certificate will be provided"
                    fieldKey="expCertificate"
                    checkedValue={offerRespo.expCertificate}
                    // handleBlur={handleBlur}
                    setRespoOffer={setRespoOffer}
                    offerRespo={offerRespo}
                /> */}

                <div className="flex items-center justify-between">
                    <Text
                        text="Offer Letter will be provided"
                        as="span"
                        className="text-white text-base"
                    />
                    <Switch
                        checked={offerRespo.offer}
                        onChange={(_, checked) => {
                            setRespoOffer({ ...offerRespo, offer: checked });
                            handleBlur('offer', checked);
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
                <div className="flex items-center justify-between">
                    <Text
                        text="Experience certificate will be provided"
                        as="span"
                        className="text-white text-base"
                    />
                    <Switch
                        checked={offerRespo.expCertificate}
                        onChange={(_, checked) => {
                            setRespoOffer({ ...offerRespo, expCertificate: checked });
                            handleBlur('expCertificate', checked);
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
            </div>
            <div className="flex gap-6 mb-4">
                <div className="flex-1">
                    <Text
                        text="Stipend/month"
                        as="label"
                        className="block text-white text-base mb-1"
                    />
                    <div className="flex gap-2 w-[352px]">
                        <Input
                            className="flex-1 h-[48px] bg-transparent w-[223px] border border-terracottaOrange rounded-lg px-5 py-3 text-white text-base focus:outline-none focus:border-terracottaOrange"
                            placeholder="Textfield"
                            value={offerRespo.stipend}
                            onChange={(e) =>
                                setRespoOffer({ ...offerRespo, stipend: Number(e.target.value) })
                            }
                            onBlur={(e) => handleBlur('stipend', offerRespo.stipend)}
                        />
                        <div className="w-[121px]">
                            <Select
                                value={offerRespo.stipendCurreny}
                                onValueChange={(value) => {
                                    setRespoOffer({ ...offerRespo, stipendCurreny: value });
                                    handleBlur('stipendCurrency', value);
                                }}
                            >
                                <SelectTrigger className="h-[48px] text-white border lg:max-w-[119px] border-terracottaOrange">
                                    <SelectValue placeholder="USD" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="usd">USD</SelectItem>
                                    <SelectItem value="eur">EUR</SelectItem>
                                    <SelectItem value="cad">CAD</SelectItem>
                                    <SelectItem value="gbp">GBP</SelectItem>
                                    <SelectItem value="aud">AUD</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-6 mb-4">
                <div className="flex-1">
                    <Text text="Bonus" as="label" className="block text-white text-base mb-1" />
                    <div className="flex gap-2">
                        <Input
                            className="bg-transparent w-[223px] h-[48px] border border-terracottaOrange rounded-lg px-5 py-3 text-white text-base focus:outline-none focus:border-terracottaOrange"
                            placeholder="Textfield"
                            value={offerRespo.bonus}
                            onChange={(e) =>
                                setRespoOffer({ ...offerRespo, bonus: Number(e.target.value) })
                            }
                            onBlur={(e) => handleBlur('bonus', offerRespo.bonus)}
                        />
                        <Select
                            value={offerRespo.bonusCurrency}
                            onValueChange={(value) => {
                                setRespoOffer({ ...offerRespo, bonusCurrency: value });
                                handleBlur('bonusCurrency', value);
                            }}
                        >
                            <SelectTrigger className="h-[48px] text-white lg:max-w-[119px] border border-terracottaOrange">
                                <SelectValue placeholder="USD" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="usd">USD</SelectItem>
                                <SelectItem value="eur">EUR</SelectItem>
                                <SelectItem value="cad">CAD</SelectItem>
                                <SelectItem value="gbp">GBP</SelectItem>
                                <SelectItem value="aud">AUD</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffersResponsibilitiesSection;
