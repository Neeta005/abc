'use client';
import React, { useRef, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import useRegister from '@/stores/registrationStore';
import { cn } from '@/lib/utils';
import RichTextEditor from '../../shared/RichTextEditor';
import { useStudentProgressStore } from '@/stores/progressHooks/useStudentProgressStore';
import { CalendarIcon } from 'lucide-react';
import { CalendarPopup } from '@/components/shared/CalendarPopup';
import ProjectCard from './Achievment/AchievmentCard';
import useHandleBlur from '@/hooks/useHandleBlur';
import studentRegistration from '@/types/studentRegistration';
import companyRegistration from '@/types/companyRegistration';
import { JobPostingProgress } from '@/types/JobPostingProgress';
import { useHandleValueChange } from '@/hooks/useHandleValueChange';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { ProjectsFormProps } from '@/types/ProjectTypes';
export default function ProjectsForm({
    className,
    isProfile,
    open,
    isRegistration = true,
}: ProjectsFormProps) {
    const useToCalendarRef = useRef<HTMLButtonElement>(null);
    const useCalendarRef = useRef<HTMLButtonElement>(null);
    const projectForm = useRegister((state) => state.projectForm);
    const setProjectForm = useRegister((state) => state.setProjectForm);
    const error = useRegister((state) => state.error);
    const setError = useRegister((state) => state.setError);
    const projects = useRegister((state) => state.projects);
    const setProjects = useRegister((state) => state.setProjects);
    const [showFromCalendar, setShowFromCalendar] = useState(false);
    const [showToCalendar, setShowToCalendar] = useState(false);
    const [editIdx, setEditIdx] = useState<number | null>(null);
    const { incrementDone: increament, decrementDone: decreament } = useStudentProgressStore();

    const handleValueChange = useHandleValueChange(
        setProjectForm,
        decreament as (
            field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );

    const handleOnBlur = useHandleBlur(
        increament as (
            field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (
            !projectForm.projectTitle ||
            !projectForm.projFromDate ||
            !projectForm.projToDate ||
            !projectForm.projectDescription
        ) {
            setError('Please fill all input fields');
            return;
        }
        setError('');
        setProjects([...projects, projectForm]);
        setProjectForm({
            projectTitle: '',
            projFromDate: '',
            projToDate: '',
            tasks: [''],
            projectDescription: '',
        });
    };

    const handleFromDateChange = (date: Dayjs | null) => {
        if (date) increament('projFromDate');
        else decreament('projFromDate');
        setProjectForm({ projFromDate: date ? date.format('YYYY-MM-DD') : '' });
        setShowFromCalendar(false);
    };

    const handleToDateChange = (date: Dayjs | null) => {
        if (date) increament('projToDate');
        else decreament('projToDate');
        setProjectForm({ projToDate: date ? date.format('YYYY-MM-DD') : '' });
        setShowToCalendar(false);
    };

    const handleDelete = (idx: number) => {
        setProjects(projects.filter((_: any, i: number) => i !== idx));
    };

    const handleEdit = (idx: number) => {
        setEditIdx(idx);
        const proj = projects[idx];
        setProjectForm({ ...proj });
        setProjects(projects.filter((_: any, i: number) => i !== idx));
    };

    const handleTextChange = (value: string) => {
        setProjectForm({ ...projectForm, projectDescription: value });
        if (value) increament('projectTextField');
        else decreament('projectTextField');
    };

    return (
        <form onSubmit={handleSubmit} className={cn('w-full sm:px-0 relative ml-0', className)}>
            {isRegistration && (
                <Text
                    as="h2"
                    text="Projects"
                    className="text-white font-bold mb-6 mt-5 text-[30px]"
                />
            )}
            {!isProfile && (
                <div className="mt-8">
                    {projects?.map((project, idx) => (
                        <ProjectCard
                            key={idx}
                            {...project}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                            idx={idx}
                        />
                    ))}
                </div>
            )}

            {open && (
                <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 rounded-full w-6 h-6"
                    onClick={() => {
                        if (isProfile) open(false);
                    }}
                >
                    ×
                </Button>
            )}

            <div>
                <div className="sm:col-span-2">
                    <Text as="label" text="Project Name" className="block text-white mb-3 mt-3" />
                    <Input
                        name="projectTitle"
                        value={projectForm.projectTitle}
                        onChange={handleValueChange}
                        onBlur={handleOnBlur}
                        className="max-w-[681px]  rounded-[8px] border border-red-500 bg-transparent px-4 py-2 text-white placeholder:text-gray-400 "
                        placeholder="Title"
                    />
                </div>
                <div className="flex gap-7 mt-0">
                    <div>
                        <Text as="label" text="From" className="block text-white mt-3 mb-2" />
                        <div className="relative">
                            <Button
                                ref={useCalendarRef}
                                type="button"
                                variant="outline"
                                className="w-[237px]  rounded-[8px] border-red-400 bg-transparent px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none text-left flex justify-between items-center"
                                onClick={() => {
                                    setShowFromCalendar((prev) => !prev);
                                    setShowToCalendar(false);
                                }}
                            >
                                {projectForm.projFromDate
                                    ? dayjs(projectForm.projFromDate).format('MMM D, YYYY')
                                    : 'Select date'}
                                <CalendarIcon />
                            </Button>
                            <CalendarPopup
                                onChange={handleFromDateChange}
                                value={
                                    projectForm.projFromDate
                                        ? dayjs(projectForm.projFromDate)
                                        : null
                                }
                                maxDate={dayjs()}
                                open={showFromCalendar}
                                onClose={() => setShowFromCalendar(false)}
                                anchorRect={useCalendarRef}
                            />
                        </div>
                    </div>
                    <div>
                        <Text as="label" text="To" className="block text-white mb-2 mt-3" />
                        <div className="relative">
                            <Button
                                ref={useToCalendarRef}
                                type="button"
                                variant="outline"
                                className="w-[237px] rounded-[8px] border-red-400 bg-transparent px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none text-left flex justify-between items-center"
                                onClick={() => {
                                    setShowToCalendar((prev) => !prev);
                                    setShowFromCalendar(false);
                                }}
                            >
                                {projectForm.projToDate
                                    ? dayjs(projectForm.projToDate).format('MMM D, YYYY')
                                    : 'Select date'}
                                <CalendarIcon />
                            </Button>
                            <CalendarPopup
                                onChange={handleToDateChange}
                                value={
                                    projectForm.projToDate ? dayjs(projectForm.projToDate) : null
                                }
                                maxDate={dayjs()}
                                minDate={dayjs('1995-01-01')}
                                open={showToCalendar}
                                onClose={() => setShowToCalendar(false)}
                                anchorRect={useToCalendarRef}
                            />
                        </div>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <Text as="label" text="Tasks achieved" className="block text-white mb-3 mt-3" />
                    <RichTextEditor
                        value={projectForm.projectDescription}
                        onChange={(value) => handleTextChange(value)}
                        className="w-[681px] border-0 px-4 mt-1 py-2 text-white placeholder:text-gray-400 focus:outline-none"
                        placeholder="Describe your achievement"
                    />
                </div>
            </div>
            <div className="w-full flex justify-end mt-0">
                <Button
                    type="submit"
                    onClick={(e) => {
                        if (isProfile && open) {
                            console.log('Profile Achievements Form Submit');
                            open(false);
                        }
                    }}
                    className="w-full sm:w-auto px-8 rounded bg-gradient-to-r flex justify-end items-center py-2  text-white font-bold text-lg shadow"
                >
                    Add Project
                </Button>
            </div>
        </form>
    );
}
