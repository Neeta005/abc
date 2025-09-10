import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    elements,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import * as React from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

type Props = {
    labels: string[];
    data: number[];
    label?: string;
    borderColor?: string;
    backgroundColor?: string;
};

export default function LineChart({
    labels,
    data,
    label = 'Profile Views',
    borderColor = '#1EA1F1',
    backgroundColor = 'rgba(30,161,241,0.10)',
}: Props) {
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: label,
                data: data,
                fill: true,
                borderColor: borderColor,
                backgroundColor: backgroundColor,
                tension: 0.4,
                pointBackgroundColor: '#fff',
                pointBorderColor: borderColor,
                pointBorderWidth: 0,
                pointRadius: 8,
                pointHoverRadius: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 12,
                shadowColor: borderColor,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            line: {
                spanGaps: 0,
            },
            point: {
                radius: 1,
                hoverRadius: 1,
            },
        },

        plugins: {
            legend: { display: false },
            title: { display: false },
            datalabels: { display: false },
            tooltip: {
                enabled: true,
                backgroundColor: '#2563EB',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#2563EB',
                borderWidth: 2,
                padding: 16,
                caretSize: 8,
                displayColors: false,
                callbacks: {
                    title: (ctx: any) => ctx[0].label,
                    label: (ctx: any) => ctx.parsed.y,
                },
            },
        },
        layout: {
            padding: {
                left: 10,
                right: 26,
                top: 0,
                bottom: 0,
            },
            margin: {
                right: 19,
            },
        },
        scales: {
            x: {
                // offset:true,
                max: 1000,
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#fff',
                    font: {
                        size: 8.67,
                        weight: 'bold' as const,
                    },
                },
            },
            y: {
                min: 0,
                max: 1000,
                stepSize: 200,
                grid: {
                    color: '#3B82F6',
                    borderDash: [4, 4],
                },
                ticks: {
                    color: '#fff',
                    font: {
                        size: 8.67,
                        weight: 'bold' as const,
                    },
                    stepSize: 200,
                },
            },
        },
    };

    return (
        <div className="max-w-[670px]  h-[193px] xl:max-w-[1200px]">
            <Line data={chartData} options={options} />
        </div>
    );
}
