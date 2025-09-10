export interface CustomEvent {
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
    style: {
        backgroundColor: string;
    };
}

export type TimeView = 'hours' | 'minutes' | 'seconds';
export type AmPm = 'am' | 'pm';
