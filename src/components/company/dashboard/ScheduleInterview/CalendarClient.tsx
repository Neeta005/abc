'use client';

import React, { useState, useRef } from 'react';
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../../../styles/MyCalendar.css';
import CustomToolbar from '@/components/company/dashboard/ScheduleInterview/CustomToolbar';
import { eventPropGetter } from '@/components/company/dashboard/ScheduleInterview/EventsProps';
import { CustomEvent } from '@/types/Schedule';
import { useClickOutside } from '@/hooks/useClickOutside';
import AddEventModal from './CalendarAddEvent';
const localizer = momentLocalizer(moment);
export default function MyCalendar() {
    const [events, setEvents] = useState<CustomEvent[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [newEvent, setNewEvent] = useState<Partial<CustomEvent>>({});
    const [selectedSlot, setSelectedSlot] = useState<SlotInfo | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const handleSelectSlot = (slotInfo: SlotInfo) => {
        setSelectedSlot(slotInfo);
        setShowModal(true);
        setNewEvent({ title: '', style: { backgroundColor: '#28a745' } });
    };

    const handleAddEvent = () => {
        if (!newEvent.title || !selectedSlot) return;

        const eventToAdd: CustomEvent = {
            title: newEvent.title!,
            start: selectedSlot.start,
            end: selectedSlot.end,
            allDay: selectedSlot.slots?.length === 1 || selectedSlot.action === 'select',
            style: {
                backgroundColor: newEvent.style?.backgroundColor || '#28a745',
            },
        };

        setEvents([...events, eventToAdd]);
        setShowModal(false);
        setSelectedSlot(null);
    };

    useClickOutside(modalRef, () => setShowModal(!showModal), showModal);

    return (
        <div className="relative calendar-container">
            <Calendar<CustomEvent>
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSelectSlot}
                style={{ height: 650 }}
                defaultDate={new Date()}
                eventPropGetter={eventPropGetter}
                components={{ toolbar: CustomToolbar }}
                views={['day', 'week', 'agenda', 'month']}
                defaultView="month"
                step={60}
                timeslots={1}
            />

            {showModal && (
                <AddEventModal
                    newEvent={newEvent}
                    setNewEvent={setNewEvent}
                    handleAddEvent={handleAddEvent}
                    setShowModal={setShowModal}
                    modalRef={modalRef}
                />
            )}
        </div>
    );
}
