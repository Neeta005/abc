type TimeZoneOption = {
    label: string;
    value: string;
};

export const timeZones: TimeZoneOption[] = [
    { label: 'GMT (Greenwich Mean Time)', value: 'GMT' },
    { label: 'UTC (Coordinated Universal Time)', value: 'UTC' },
    { label: 'EST (Eastern Standard Time)', value: 'America/New_York' },
    { label: 'CST (Central Standard Time)', value: 'America/Chicago' },
    { label: 'MST (Mountain Standard Time)', value: 'America/Denver' },
    { label: 'PST (Pacific Standard Time)', value: 'America/Los_Angeles' },
    { label: 'IST (India Standard Time)', value: 'Asia/Kolkata' },
    { label: 'CET (Central European Time)', value: 'Europe/Paris' },
    { label: 'JST (Japan Standard Time)', value: 'Asia/Tokyo' },
    { label: 'AEST (Australian Eastern Standard Time)', value: 'Australia/Sydney' },
];
