'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';
import Slider from '@mui/material/Slider';
import { JobFilterProps } from '@/types/JobFilterTypes';
import { jobPosts, workingSchedules, experienceLevels } from '@/data/JobFilter';
import { salarySliderStyle, experienceSliderStyle } from '@/styles/SliderStyles';

export default function JobFilter({
    jobPost,
    setJobPost,
    workingSchedule,
    setWorkingSchedule,
    experienceRange,
    setExperienceRange,
    salaryRange,
    setSalaryRange,
    selectedType,
    setSelectedType,
    onApply,
    onReset,
}: JobFilterProps) {
    const toggleSchedule = (label: string, indx: number) => {
        setWorkingSchedule((prev) =>
            prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
        );
        setSelectedType((prev) =>
            prev.includes(indx) ? prev.filter((i) => i !== indx) : [...prev, indx]
        );
    };

    const handleExperienceChange = (_: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setExperienceRange({ max: newValue[0], min: newValue[1] });
        }
    };

    const handleSalaryChange = (_: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setSalaryRange({ max: newValue[0], min: newValue[1] });
        }
    };
    return (
        <div className="bg-shadowBlue text-white p-6 w-72 rounded-lg flex  flex-col gap-6">
            <div className="flex justify-between items-center mb-1 border-b border-gray-500">
                <Text text="Category" className="font-bold text-lg" />
                <Button
                    variant="ghost"
                    onClick={onReset}
                    className="text-sm  hover:text-gray-200"
                    aria-label="Reset filters"
                >
                    Reset
                </Button>
            </div>

            <section>
                <Text text="Job post" className="mb-2 font-semibold" />
                <select
                    className="w-full bg-shadowBlue  border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    value={jobPost}
                    onChange={(e) => setJobPost(e.target.value)}
                >
                    {jobPosts.map((post) => (
                        <option key={post} value={post} className="text-white">
                            {post}
                        </option>
                    ))}
                </select>
                <Text text="Showing 50 Jobs" className="mt-1 text-sm italic green-400" />
            </section>

            <section>
                <Text text="Working Schedule" className="mb-2 font-semibold" />
                <ul className="flex flex-col gap-1">
                    {workingSchedules.map(({ label, count }, indx) => (
                        <li key={indx} className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer select-none">
                                <Input
                                    type="checkbox"
                                    checked={workingSchedule.includes(label)}
                                    onChange={() => toggleSchedule(label, indx)}
                                    className="w-5 h-5 rounded-md text-green-500  focus:ring-green-400 checked:accent-green-500 cursor-pointer "
                                />
                                <Text text={label} />
                            </label>
                            <Text
                                text={count.toString()}
                                className={`${selectedType.includes(indx) && 'text-green-400'} `}
                            />
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <Text text="Experience" className="mb-2 font-semibold" />
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                        <Text
                            text={experienceLevels[experienceRange.min]}
                            className="px-4 py-1 bg-gray-700 rounded-md"
                        />
                        <Text
                            text={experienceLevels[experienceRange.max]}
                            className="px-4 py-1 bg-gray-700 rounded-md"
                        />
                    </div>
                    <div className="relative h-10">
                        <Slider
                            value={[experienceRange.min, experienceRange.max]}
                            onChange={handleExperienceChange}
                            valueLabelDisplay="off"
                            min={0}
                            max={experienceLevels.length - 1}
                            step={1}
                            marks={experienceLevels.map((label, index) => ({
                                value: index,
                                label,
                            }))}
                            sx={experienceSliderStyle}
                        />
                    </div>
                </div>
            </section>

            <section>
                <Text text="Range Salary" className="mb-2 font-semibold" />
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                        <Text
                            text={`$${salaryRange.min}`}
                            className="px-4 py-1 bg-gray-700 rounded-md"
                        />
                        <Text
                            text={`$${salaryRange.max}`}
                            className="px-4 py-1 bg-gray-700 rounded-md"
                        />
                    </div>
                    <div className="relative h-10">
                        <Slider
                            value={[salaryRange.min, salaryRange.max]}
                            onChange={handleSalaryChange}
                            valueLabelDisplay="auto"
                            min={100}
                            max={1000}
                            step={50}
                            sx={salarySliderStyle}
                        />
                    </div>
                </div>
            </section>

            <Button
                className="mt-auto bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-md py-3 hover:opacity-90 transition"
                onClick={onApply}
            >
                Apply
            </Button>
        </div>
    );
}
