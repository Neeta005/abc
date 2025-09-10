import React from 'react';
import Modal from '@mui/material/Modal';
import Calendar from '../ui/newcalender';
import { CalendarPopupProps } from '@/types/CalenderTypes';

export function CalendarPopup({
    value,
    onChange,
    onClose,
    open,
    anchorRect,
    minDate,
    maxDate,
}: CalendarPopupProps) {
    const tmp = anchorRect.current?.getBoundingClientRect();
    if (!tmp) return;
    const calendarWidth = 300;
    const calendarHeight = 300;
    const margin = 8;
    const viewportHeight = window.innerHeight;
    const top =
        tmp!!.bottom + calendarHeight + margin > viewportHeight
            ? tmp!!.top - calendarHeight - margin
            : tmp!!.bottom + margin;
    let left = tmp?.left;
    const viewportWidth = window.innerWidth;
    if (left!! + calendarWidth > viewportWidth) {
        left = viewportWidth - calendarWidth - margin;
    }

    return (
        <Modal open={open} onClose={onClose}>
            <div
                className="fixed rounded-lg z-[9999] shadow-[0_2px_10px_rgba(0,0,0,0.2)] overflow-hidden"
                style={{
                    top,
                    left,
                    width: calendarWidth,
                    height: calendarHeight,
                }}
                onClick={(e) => e.preventDefault()}
            >
                <Calendar value={value} minDate={minDate} maxDate={maxDate} onChange={onChange} />
            </div>
        </Modal>
    );
}
