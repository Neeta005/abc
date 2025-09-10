'use client';
import React, { useRef, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import useRegister from '@/stores/registrationStore';
import { cn } from '@/lib/utils';
import RichTextEditor from '../../../shared/RichTextEditor';
import AchievmentCard from './AchievmentCard';
import { CalendarPopup } from '@/components/shared/CalendarPopup';
import { Calendar as CalenderIcon } from 'lucide-react';
import { useHandleValueChange } from '@/hooks/useHandleValueChange';
import useHandleBlur from '@/hooks/useHandleBlur';
import { useStudentProgressStore } from '@/stores/progressHooks/useStudentProgressStore';
import companyRegistration from '@/types/companyRegistration';
import { JobPostingProgress } from '@/types/JobPostingProgress';
import studentRegistration from '@/types/studentRegistration';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type AchievementsFormProps = {
    isProfile?: boolean;
    open?: (isopen: boolean) => void;
    isRegistration?: boolean;
};

export default function AchievementsForm({
    isProfile,
    open,
    isRegistration = true,
}: AchievementsFormProps) {
    const achievementForm = useRegister((state) => state.achievementForm);
    const setAchievementForm = useRegister((state) => state.setAchievementForm);
    const setError = useRegister((state) => state.setError);
    const error = useRegister((state) => state.error);
    const achievements = useRegister((state) => state.achievements);
    const setAchievements = useRegister((state) => state.setAchievements);

    const [showFromCalendar, setShowFromCalendar] = useState<boolean>(false);
    const [showToCalendar, setShowToCalendar] = useState<boolean>(false);
    const { incrementDone, decrementDone } = useStudentProgressStore();

    const useToCalendarRef = useRef<HTMLButtonElement>(null);
    const useCalendarRef = useRef<HTMLButtonElement>(null);
    const [editIdx, setEditIdx] = useState<number | null>(null);

    const handleChange = useHandleValueChange(
        setAchievementForm,
        decrementDone as (
            field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );
    const handleOnBlur = useHandleBlur(
        incrementDone as (
            field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );
    const handleFromDateChange = (date: Dayjs | null) => {
        if (date) incrementDone('achievmentFromDate');
        else decrementDone('achievmentFromDate');
        const formattedDate = date ? date.format('YYYY-MM-DD') : '';
        setAchievementForm({ ...achievementForm, achievmentFromDate: formattedDate });
        setShowFromCalendar(false);
    };

    const handleToDateChange = (date: Dayjs | null) => {
        if (date) incrementDone('achievementToDate');
        else decrementDone('achievementToDate');
        setAchievementForm({
            ...achievementForm,
            achievementToDate: date ? date.format('YYYY-MM-DD') : '',
        });
        setShowToCalendar(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { achievementTitle, achievmentFromDate, achievementToDate, achievementDescription } =
            achievementForm;
        if (
            !achievementTitle ||
            !achievmentFromDate ||
            !achievementToDate ||
            !achievementDescription
        ) {
            setError('Please fill all input fields');
            return;
        }
        setError('');
        const newAchievement = {
            achievementTitle,
            achievmentFromDate,
            achievementToDate,
            achievementDescription,
            done: true,
        };
        if (editIdx !== null) {
            const updated = [...achievements];
            updated[editIdx] = newAchievement;
            setAchievements(updated);
            setEditIdx(null);
        } else {
            setAchievements([...achievements, newAchievement]);
        }
        setAchievementForm({
            achievementTitle: '',
            achievmentFromDate: '',
            achievementToDate: '',
            achievementDescription: '',
        });
    };

    const handleDelete = (idx: number) => {
        setAchievements(achievements.filter((_, i) => i !== idx));
    };

    const handleEdit = (idx: number) => {
        setEditIdx(idx);
        const ach = achievements[idx];
        setAchievementForm({ ...ach });
        setAchievements(achievements.filter((_, i) => i !== idx));
    };

    const handleRichText = (value: string) => {
        setAchievementForm({ ...achievementForm, achievementDescription: value });
        if (value) incrementDone('achievementTextField');
        else if (value.length <= 10) {
            decrementDone('achievementTextField');
        }
    };

    return (
        <div>
            {isRegistration && (
                <Text as="h2" className="text-white font-bold mb-6 mt-5 text-[30px] flex gap-2">
                    Achievements{' '}
                    <Text as="span" className="text-gray-300 w-[28px] h-[2zpx] text-lg">
                        &#9432;
                    </Text>
                </Text>
            )}
            {!isProfile && (
                <div className="mt-8">
                    {achievements?.map((achievement, idx) => (
                        <AchievmentCard
                            key={idx}
                            {...achievement}
                            idx={idx}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
            <form onSubmit={handleSubmit} className="w-full max-w-2xl px-2 sm:px-0">
                <div className="flex flex-col">
                    <div className="sm:col-span-2">
                        <Text
                            as="label"
                            text="Achievements"
                            className="block text-white mb-3 mt-3"
                        />
                        <Input
                            name="achievementTitle"
                            value={achievementForm.achievementTitle}
                            onBlur={handleOnBlur}
                            onChange={handleChange}
                            className="max-w-[681px]  rounded-[8px] border border-red-500 bg-transparent px-4 py-2 text-white placeholder:text-gray-400 "
                            placeholder="Title"
                        />
                    </div>
                    <div className="flex gap-8 ">
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
                                    {achievementForm.achievmentFromDate
                                        ? dayjs(achievementForm.achievmentFromDate).format(
                                              'MMM D, YYYY'
                                          )
                                        : 'Select date'}
                                    <CalenderIcon />
                                </Button>
                                <CalendarPopup
                                    value={
                                        achievementForm.achievmentFromDate
                                            ? dayjs(achievementForm.achievmentFromDate)
                                            : null
                                    }
                                    open={showFromCalendar}
                                    onChange={handleFromDateChange}
                                    onClose={() => setShowFromCalendar(false)}
                                    anchorRect={useCalendarRef}
                                />
                            </div>
                        </div>
                        <div>
                            <Text
                                as="label"
                                text="To"
                                className="block text-white mb-[8px] mt-[8px]"
                            />
                            <div className="relative">
                                <Button
                                    ref={useToCalendarRef}
                                    type="button"
                                    variant="outline"
                                    className="w-[237px]  rounded-[8px] border-red-400 bg-transparent px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none text-left flex justify-between items-center"
                                    onClick={() => {
                                        setShowToCalendar((prev) => !prev);
                                        setShowFromCalendar(false);
                                    }}
                                    onBlur={(e) => {
                                        incrementDone('achievementToDate');
                                    }}
                                >
                                    <div className="flex items-center w-full justify-between">
                                        {achievementForm.achievementToDate
                                            ? dayjs(achievementForm.achievmentFromDate).format(
                                                  'MMM D, YYYY'
                                              )
                                            : 'Select date'}
                                        <CalenderIcon />
                                    </div>
                                </Button>
                                {showToCalendar && (
                                    <div
                                        className="absolute z-20 bg-white rounded shadow-lg mt-2 left-0"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <CalendarPopup
                                            value={
                                                achievementForm.achievementToDate
                                                    ? dayjs(achievementForm.achievementToDate)
                                                    : null
                                            }
                                            maxDate={dayjs()}
                                            minDate={dayjs('1995-01-01')}
                                            open={showToCalendar}
                                            onChange={handleToDateChange}
                                            onClose={() => setShowToCalendar(false)}
                                            anchorRect={useToCalendarRef}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <Text as="label" text="Description" className="block text-white" />
                        <RichTextEditor
                            value={achievementForm.achievementDescription}
                            onChange={handleRichText}
                            className="w-[681px] rounded border-0 px-4 py-1 mt-1 text-white placeholder:text-gray-400 focus:outline-none"
                            placeholder="Describe your achievement"
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-2 rounded  text-white font-bold text-lg shadow  transition-colors"
                        onClick={(e) => {
                            if (isProfile && open) {
                                open(false);
                            }
                        }}
                    >
                        {editIdx !== null ? 'Update Achievement' : 'Add Achievement'}
                    </Button>
                </div>
            </form>
        </div>
    );
}
