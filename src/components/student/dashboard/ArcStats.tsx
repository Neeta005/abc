import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const settings = {
    width: 80,
    height: 80,
    value: 60,
};

type ArcDesignProps = {
    color: string;
};

export function ArcDesign({ color }: ArcDesignProps) {
    return (
        <Gauge
            {...settings}
            cornerRadius="50%"
            sx={(theme) => ({
                [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 10,
                },
                [`& .${gaugeClasses.valueArc}`]: {
                    fill: 'white',
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                    fill: theme.palette.text.disabled,
                },
            })}
        />
    );
}
