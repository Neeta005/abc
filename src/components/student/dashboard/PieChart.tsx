import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import dayjs from 'dayjs';
import { Text } from '@/components/ui/Text';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const data = {
    labels: ['Red', 'Blue', 'Green'],
    datasets: [
        {
            data: [10, 45, 45],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(75, 192, 75, 0.9)',
            ],
            hoverOffset: 4,
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false,
        },
        datalabels: {
            color: '#fff',
            font: {
                weight: 'bold' as 'bold',
                size: 18,
            },
            formatter: (value: number, ctx: { chart: { data: { datasets: { data: any }[] } } }) => {
                const dataArr = ctx.chart.data.datasets[0].data;
                const total = dataArr.reduce((a: any, b: any) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(0);
                return `${percentage}%`;
            },
        },
    },
};

export default function MyPieChart({ dataLabel }: { dataLabel: number[] }) {
    return (
        <div className="bg-steelBlue py-2 px-4 text-white flex flex-col w-full h-[290px] justify-between rounded-md shadow-[0px_0.72px_2.17px_0px_#00000014]">
            <div>
                <Text text="My Application" className="text-[17.33px]" weight="medium" />
                <Text text="July 2025" className="text-[10.11px] text-gray-400" />
            </div>

            <div className="flex justify-center items-center w-full">
                <div className="w-[152px] h-[152px]">
                    <Pie data={data} options={options} />
                </div>
            </div>

            <div className="flex justify-between text-[10px]">
                <div className="flex items-center gap-[4px]">
                    <span className="w-[5.78px] h-[4.33px] border rounded-[2px] bg-sapphireBlue"></span>
                    <Text as="span" text="860 Review" className="text-[10.11px]" />
                </div>
                <div className="flex items-center gap-[4px]">
                    <span className="w-[5.78px] h-[4.33px] border rounded-[2px] bg-springGreen"></span>
                    <Text as="span" text="730 Shortlisted" className="text-[10.11px]" />
                </div>
                <div className="flex items-center gap-[4px]">
                    <span className="w-[5.78px] h-[4.33px] border rounded-[2px] bg-poppyRed"></span>
                    <Text as="span" text="234 Rejected" className="text-[10.11px]" />
                </div>
            </div>
        </div>
    );
}
