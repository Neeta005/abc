'use client';
import React from 'react';
import { mockedStats, employeeMockedStats } from '@/mocks/mockedProfileData';
import { ArcDesign } from './ArcStats';
import { Text } from '@/components/ui/Text';
import { TrendingUp } from 'lucide-react';

// Define allowed color keys
type CardColorKeys = 'jobs' | 'shortlisted' | 'interviews' | 'review';

export default function StatsCards({ company = false }: { company?: boolean }) {
  const cardColors: Record<CardColorKeys, string> = {
    jobs: "bg-gradient-to-r from-green-400 to-emerald-500",
    shortlisted: "bg-gradient-to-r from-yellow-400 to-yellow-400",
    interviews: "bg-gradient-to-r from-orange-400 to-orange-600",
    review: "bg-gradient-to-r from-blue-400 to-indigo-500",
  };

  // Convert number -> string and ensure color is properly typed
  const stats = (company ? employeeMockedStats : mockedStats).map(stat => ({
    ...stat,
    value: String(stat.value),
  }));

  return (
    <div className="flex gap-4 sm:flex-wrap mb-6 w-full lg:justify-between lg:flex-nowrap">
      {stats.map(({ label, value, change, color }) => (
        <div
          key={label}
          className={`flex md:w-[250px] xl:max-w-[400px] justify-between rounded-lg p-4 ${cardColors[color as CardColorKeys] || 'bg-gray-400'} shadow`}
        >
          <div className="flex justify-between flex-col">
            <Text text={label} className="text-[11px] font-bold mb-1 text-white" />
            <Text text={value} className="text-lg font-bold text-white" />
            <span className="flex gap-1 items-center">
              <TrendingUp className="w-4 h-4 text-white" />
              <Text text={change} className="text-xs text-white/90" />
            </span>
          </div>
          <div>
            <ArcDesign color="text-white" />
          </div>
        </div>
      ))}
    </div>
  );
}