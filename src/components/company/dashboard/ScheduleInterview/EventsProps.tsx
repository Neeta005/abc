import React, { CSSProperties } from 'react';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CustomEvent } from '@/types/Schedule';

export function eventPropGetter(event: CustomEvent): { style: CSSProperties } {
    return {
        style: {
            backgroundColor: event.style.backgroundColor,
            width: '100%',
            borderRadius: '4px',
            color: 'white',
            padding: '4px',
            fontSize: '0.85rem',
            cursor: 'pointer',
        },
    };
}
