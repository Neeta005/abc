'use client';

import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';
import Switch from '@mui/material/Switch';
import {
    mockedStatColors as colors,
    MockedStatData as initialData,
} from '@/mocks/mockedData';
import { Text } from '@/components/ui/Text';

export default function DynamicApplicationStatsChart() {
    const [data] = useState(initialData);
    const [showApplications, setShowApplications] = useState(true);
    const [showShortlisted, setShowShortlisted] = useState(true);
    const [showRejected, setShowRejected] = useState(true);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

    // Dynamically generate month names
    const months = Array.from({ length: 12 }, (_, i) =>
        new Date(0, i).toLocaleString('default', { month: 'long' })
    );

    // Prepare bars dynamically based on switches
    const barComponents = [];

    if (showRejected && (showShortlisted || showApplications)) {
        barComponents.push(
            <Bar key="gap-after-rejected" dataKey="gap" stackId="a" fill={colors.gap} barSize={8} />
        );
    }
    if (showRejected) {
        barComponents.push(
            <Bar
                key="rejected"
                dataKey="rejected"
                stackId="a"
                fill={colors.rejected}
                barSize={8}
                radius={[4, 4, 0, 0]}
            />
        );
    }
    if (showShortlisted && showApplications) {
        barComponents.push(
            <Bar
                key="gap-after-shortlisted"
                dataKey="gap"
                stackId="a"
                fill={colors.gap}
                barSize={8}
            />
        );
    }
    if (showShortlisted) {
        barComponents.push(
            <Bar
                key="shortlisted"
                dataKey="shortlisted"
                stackId="a"
                fill={colors.shortlisted}
                barSize={8}
            />
        );
    }
    if (showApplications) {
        barComponents.push(
            <Bar
                key="applications"
                dataKey="applications"
                stackId="a"
                fill={colors.applications}
                barSize={8}
                radius={[4, 4, 4, 4]}
            />
        );
    }

    return (
        <div className="bg-nocturneBlue text-white pt-4 rounded-xl w-full">
            {/* Title */}
            <div className="flex justify-between items-center mb-4">
                <Text text="Statistics of Active Applications" className="text-xl font-semibold" />
            </div>

            {/* Switches + Month Selector Row */}
            <div className="flex gap-4 mb-4 flex-wrap items-center w-full">
                {/* Applications → Blue */}
                <div className="flex items-center gap-2">
                    <Switch
                        checked={showApplications}
                        onChange={() => setShowApplications(!showApplications)}
                        sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': { color: '#3B82F6' },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                backgroundColor: '#3B82F6',
                            },
                        }}
                    />
                    <Text text="Applications" size="sm" />
                </div>

                {/* Shortlisted → Yellow */}
                <div className="flex items-center gap-2">
                    <Switch
                        checked={showShortlisted}
                        onChange={() => setShowShortlisted(!showShortlisted)}
                        sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': { color: '#FACC15' },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                backgroundColor: '#FACC15',
                            },
                        }}
                    />
                    <Text text="Shortlisted" size="sm" />
                </div>

                {/* Rejected → Orange */}
                <div className="flex items-center gap-2">
                    <Switch
                        checked={showRejected}
                        onChange={() => setShowRejected(!showRejected)}
                        sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': { color: '#F97316' },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                backgroundColor: '#F97316',
                            },
                        }}
                    />
                    <Text text="Rejected" size="sm" />
                </div>

                {/* Month Selector → White box */}
             {/* Month Selector → White border only */}
<div className="ml-auto">
  <select
    value={selectedMonth}
    onChange={(e) => setSelectedMonth(Number(e.target.value))}
    className="border border-white rounded px-2 py-1 text-sm text-white bg-transparent focus:outline-none focus:ring-1 focus:ring-white"
  >
    {months.map((month, idx) => (
      <option key={idx} value={idx} className="bg-nocturneBlue text-white">
        {month}
      </option>
    ))}
  </select>
</div>

            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} stackOffset="expand" barCategoryGap={20} barGap={6}>
                    <XAxis dataKey="month" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <CartesianGrid strokeDasharray="0" vertical={false} stroke="#374151" />
                    <Tooltip
                        formatter={(value, name) => {
                            if (name === 'gap') return null;
                            return [`${(Number(value) * 100).toFixed(0)}%`, name];
                        }}
                        contentStyle={{
                            backgroundColor: '#1F2937',
                            borderRadius: '8px',
                            border: 'none',
                        }}
                    />
                    {barComponents}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

// Optional Legend Component
const Legend = ({ color, label }: { color: string; label: string }) => (
    <div className="flex items-center gap-2">
        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-sm">{label}</span>
    </div>
);
