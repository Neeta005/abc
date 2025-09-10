export type JobPostingProgress = {
    // BasicDetails
    file: number;

    // JobBasicInfo
    roleName: number;
    skillsRequired: number;
    openings: number;

    // WorkType
    type: number;
    modeOfinteview: number;
    workType: number;

    // WorkLocation
    city: number;
    state: number;
    country: number;
    transportProvided: number;

    //Questions
    questions: number;

    // OffersResponsibilities
    rolesResp: number;
    training: number;
    expCertificate: number;
    stipend: number;
    bonus: number;
    offer: number;
    stipendCurrency: number;
    bonusCurrency: number;
    done: number;
};