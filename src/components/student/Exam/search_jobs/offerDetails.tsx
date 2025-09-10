'use client';
import React, { useState } from 'react';
import useJobPosting from '@/stores/jobPostingStore';
import { OfferDetailsProps } from '@/types/OfferDetails';
import { defaultOfferDetails } from '@/mocks/mockedJobs';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

export default function OfferDetails({ offer = defaultOfferDetails }: OfferDetailsProps) {
    const OfferDetails = useJobPosting((state) => state.offersResponsibilities);
    const [training, setTraining] = useState<boolean>(false);

    const handleChange = (field: string, value: any) => {
        setTraining(!training);
    };

    return (
        <div className="bg-shadowBlue flex flex-col flex-wrap rounded-xl p-5 min-w-5xl max-w-5xl w-5xl text-white shadow-lg">
            <Text as="h2" text="Offer Details" size="2xl" weight="semibold" className="mb-6" />
            <Text as="p" text={offer.description} className="text-periwinkleGray text-base mb-8" />
            <div className="flex flex-col gap-6 flex-wrap-reverse">
                <div className="flex items-center justify-between mb-2">
                    <Text as="span" text="Training will be provided" weight="medium" />
                    <Button
                        type="button"
                        variant="ghost"
                        aria-pressed={offer.trainingProvided}
                        className="relative focus:outline-none p-0 h-auto"
                    >
                        <span className="inline-block w-10 h-6 align-middle select-none">
                            <span
                                className={`absolute left-0 top-0 w-10 h-6 rounded-full ${OfferDetails.training ? 'bg-cherryRed opacity-80' : 'bg-graphiteSlateBlue opacity-50'}`}
                            ></span>
                            <span className="absolute left-0 top-0 w-10 h-6 rounded-full border-2 border-tangerineBlast box-content"></span>
                            <span
                                className={`absolute top-1 size-4 rounded-full bg-shadowBlue border-2 border-tangerineBlast transition-transform ${OfferDetails.training ? 'left-5' : 'left-1'}`}
                            ></span>
                        </span>
                    </Button>
                </div>
                <div className="flex items-center justify-between mb-2">
                    <Text as="span" text="Offer Letter will be provided" weight="medium" />
                    <Button
                        type="button"
                        variant="ghost"
                        aria-pressed={offer.offerLetterProvided}
                        className="relative focus:outline-none p-0 h-auto"
                    >
                        <span className="inline-block w-10 h-6 align-middle select-none">
                            <span
                                className={`absolute left-0 top-0 w-10 h-6 rounded-full ${OfferDetails.offer ? 'bg-cherryRed opacity-80' : 'bg-graphiteSlateBlue opacity-50'}`}
                            ></span>
                            <span className="absolute left-0 top-0 w-10 h-6 rounded-full border-2 border-tangerineBlast box-content"></span>
                            <span
                                className={`absolute top-1 size-4 rounded-full bg-shadowBlue border-2 border-tangerineBlast transition-transform ${OfferDetails.offer ? 'left-5' : 'left-1'}`}
                            ></span>
                        </span>
                    </Button>
                </div>
                <div className="flex items-center justify-between mb-6">
                    <Text
                        as="span"
                        text="Experience certificate will be provided"
                        weight="medium"
                    />
                    <Button
                        type="button"
                        variant="ghost"
                        aria-pressed={offer.experienceCertificateProvided}
                        onClick={() =>
                            handleChange(
                                'experienceCertificateProvided',
                                !offer.experienceCertificateProvided
                            )
                        }
                        className="relative focus:outline-none p-0 h-auto"
                    >
                        <span className="inline-block w-10 h-6 align-middle select-none">
                            <span
                                className={`absolute left-0 top-0 w-10 h-6 rounded-full ${OfferDetails.expCertificate ? 'bg-cherryRed opacity-80' : 'bg-graphiteSlateBlue opacity-50'}`}
                            ></span>
                            <span className="absolute left-0 top-0 w-10 h-6 rounded-full border-2 border-tangerineBlast box-content"></span>
                            <span
                                className={`absolute top-1 size-4 rounded-full bg-shadowBlue border-2 border-tangerineBlast transition-transform ${OfferDetails.expCertificate ? 'left-5' : 'left-1'}`}
                            ></span>
                        </span>
                    </Button>
                </div>
                <div className="mb-4">
                    <Text as="span" weight="medium" className="block mb-2">
                        Stipend/month
                        {' ' + OfferDetails.stipend + ' ' + OfferDetails.stipendCurreny}
                    </Text>
                </div>
                <div>
                    <Text as="span" weight="medium" className="block mb-2">
                        Bonus {' ' + OfferDetails.bonus + ' ' + OfferDetails.bonusCurrency}
                    </Text>
                </div>
            </div>
        </div>
    );
}
