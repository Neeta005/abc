import React, { RefObject, Dispatch, SetStateAction } from 'react';
import { CustomEvent } from '@/types/Schedule';
import type { Dayjs } from 'dayjs';
export type CalendarProps = {
    newEvent: Partial<CustomEvent>;
    setNewEvent: Dispatch<SetStateAction<Partial<CustomEvent>>>;
    handleAddEvent: () => void;
    setShowModal: (show: boolean) => void;
    modalRef: RefObject<HTMLDivElement>;
};
export interface CalendarPopupProps {
    value: Dayjs | null;
    open: boolean;
    minDate?: Dayjs;
    maxDate?: Dayjs;
    onChange: (date: Dayjs | null) => void;
    onClose: () => void;
    anchorRect: React.RefObject<HTMLElement>;
}
