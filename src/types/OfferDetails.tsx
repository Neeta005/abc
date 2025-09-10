type OfferDetailsData = {
    description: string;
    trainingProvided: boolean;
    offerLetterProvided: boolean;
    experienceCertificateProvided: boolean;
    stipend: {
        amount: string;
        currency: string;
    };
    bonus: {
        amount: string;
        currency: string;
    };
};

export type OfferDetailsProps = {
    offer?: OfferDetailsData;
    onChange?: (data: OfferDetailsData) => void;
};
