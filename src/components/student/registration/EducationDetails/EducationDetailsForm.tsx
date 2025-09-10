'use client';
import React, { useState } from 'react';
import { Search, X, HelpCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useRegister from '@/stores/registrationStore';
import { useStudentProgressStore } from '@/stores/progressHooks/useStudentProgressStore';
import { useHandleValueChange } from '@/hooks/useHandleValueChange';
import studentRegistration from '@/types/studentRegistration';
import companyRegistration from '@/types/companyRegistration';
import { JobPostingProgress } from '@/types/JobPostingProgress';
import useHandleBlur from '@/hooks/useHandleBlur';
import EducationCard from './EducationCard';
import EducationSkills from './EducationSkills';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/components/ui/select';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import validateEducationForm from '@/components/student/registration/Validation/EducationShema';
const initialForm: {
    college: string;
    course: string;
    year: string;
    cgpa: string;
    skills: string[];
} = {
    college: '',
    course: '',
    year: '',
    cgpa: '',
    skills: [],
};
interface EducationFormProps {
    isProfile?: boolean;
    open?: () => void;
    isRegistration?: boolean;
}

export default function EducationForm({
    isProfile,
    open,
    isRegistration = true,
}: EducationFormProps) {
    const [collapse, setCollapse] = useState(false);
    const setForm = useRegister((state) => state.setEducationForm);
    const form = useRegister((state) => state.educationForm);
    const setSkills = useRegister((state) => state.setSkills);
    const setEducations = useRegister((state) => state.addEducation);
    const setEducationForm = useRegister((state) => state.setEducationForm);
    const setError = useRegister((state) => state.setError);
    const error = useRegister((state) => state.error);
    const educations = useRegister((state) => state.educations);
    const updateEducations = useRegister((state) => state.updateEducations);
    const addEducation = useRegister((state) => state.addEducation);
    const { incrementDone: increament, decrementDone: decreament } = useStudentProgressStore();
    const [editIdx, setEditIdx] = useState<number | null>(null);

    const handleSkillRemove = (skill: string) => {
        const updatedSkills = form.skills.filter((s) => s !== skill);
        setSkills(updatedSkills);
        if (updatedSkills.length === 0) decreament('skills');
        setForm({ skills: updatedSkills });
    };

    const handleSkillAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.currentTarget.value.trim()) {
            increament('skills');
            const newSkill = e.currentTarget.value.trim();
            if (!form.skills.includes(newSkill)) {
                const updatedSkills = [...form.skills, newSkill];
                setSkills(updatedSkills);
                setForm({ skills: updatedSkills });
            }
            e.currentTarget.value = '';
        }
    };

    const handleChange = useHandleValueChange(
        setForm,
        decreament as (
            field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );

    const handleBlur = useHandleBlur(
        increament as (
            fild: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );

    const handleAddEducation = (e: React.FormEvent) => {
        e.preventDefault();
        const res = validateEducationForm(useRegister.getState().educationForm, !!educations);
        if (!res.success) {
            setError(res?.message);
            return;
        }

        if (editIdx !== null) {
            const updated = [...educations];
            updated[editIdx] = { ...form };
            updateEducations(updated);
            setEditIdx(null);
        } else {
            addEducation({ ...form });
        }

        setForm({ ...initialForm });
        setSkills([]);
    };

    const handleEdit = (idx: number) => {
        const selected = educations[idx];
        const remaining = educations.filter((_, i) => i !== idx);
        setEducationForm(selected);
        updateEducations(remaining);
        setSkills([...selected.skills]);
    };

    const handleDelete = (idx: number) => {
        const filtered = educations.filter((_, i) => i !== idx);
        updateEducations(filtered);

        if (editIdx === idx) {
            setEditIdx(null);
            setForm({ ...initialForm });
            setSkills([]);
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleAddEducation(e);
        if (isProfile) {
            if (open) {
                open();
            }
        }
        if (error) {
            setError('');
        }
    };
    function handleOnValueChange(value: string) {
        handleChange({ target: { name: 'year', value } } as any);
        if (value === 'x') {
            decreament('college');
        } else {
            increament('college');
        }
    }
    return (
        <div className="w-full px-2 sm:px-0 relative">
            {isRegistration && (
                <Text text="Education Details" className="text-white font-bold text-[30px] mb-6" />
            )}
            {!isProfile && (
                <div>
                    {educations?.map((edu, idx) => (
                        <EducationCard
                            key={idx}
                            edu={edu}
                            idx={idx}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
            <form
                className=" w-full px-2 sm:px-0 relative space-y-6 text-white"
                onSubmit={handleAddEducation}
            >
                <div>
                    <Text as="label" text="Education" className="block mb-2 text-sm font-medium" />

                    <div className="relative">
                        <Input
                            onBlur={handleBlur}
                            type="text"
                            name="college"
                            value={form.college}
                            onChange={handleChange}
                            placeholder="Type College Name"
                            className="w-full max-h-[48px] border border-red-400 bg-transparent text-white placeholder:text-gray-400"
                        />
                        <X size={18} className="mr-2 text-gray-400 absolute right-5 bottom-2" />
                        <Search
                            size={18}
                            className="mr-2 text-gray-400 absolute right-0 bottom-2"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[200px]">
                        <Text
                            as="label"
                            text="Courses Pursuing / Completed"
                            className="block mb-2 text-sm font-medium"
                        />
                        <div className="relative">
                            <Input
                                type="text"
                                name="course"
                                value={form.course}
                                onBlur={(e) => {
                                    if (e.target.value) increament('course');
                                }}
                                onChange={handleChange}
                                placeholder="Courses"
                                className="w-full max-h-[48px] border border-red-400 bg-transparent text-white placeholder:text-gray-400"
                            />
                            <X size={18} className="mr-2 text-gray-400 absolute right-5 bottom-2" />
                            <Search
                                size={18}
                                className="mr-2 text-gray-400 absolute right-0 bottom-2"
                            />
                        </div>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <Text
                            as="label"
                            text="Year of completion"
                            className="block mb-2 text-sm font-medium"
                        />
                        <div className="relative">
                            <Select
                                value={form.year?.toString() || 'x'}
                                onValueChange={handleOnValueChange}
                            >
                                <SelectTrigger className="w-full bg-inherit rounded border border-red-400 px-4 py-3 text-gray-300 appearance-none ">
                                    <SelectValue placeholder="Select year" />
                                </SelectTrigger>
                                <SelectContent className="bg-black text-gray-300">
                                    <SelectItem value="x" className="text-gray-300">
                                        Select year
                                    </SelectItem>
                                    {[2024, 2023, 2022, 2021, 2020]?.map((year) => (
                                        <SelectItem
                                            key={year}
                                            value={year.toString()}
                                            className="text-gray-300"
                                        >
                                            {year}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <ChevronDown className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Text
                        as="label"
                        text="CGPA / Percentage"
                        className="block mb-2 text-sm font-medium"
                    />
                    <div className="relative">
                        <Input
                            type="text"
                            onChange={handleChange}
                            name="cgpa"
                            value={form.cgpa}
                            onBlur={handleBlur}
                            placeholder="Text field"
                            className="w-full max-h-[48px] border border-red-400 bg-transparent text-white placeholder:text-gray-400"
                        />
                        <HelpCircle
                            size={18}
                            className="text-gray-400 mr-2 right-3 bottom-2 absolute"
                        />
                    </div>
                </div>
                <div className="flex justify-end text-right w-full h-[35px]">
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-gradient-to-r from-peachGold to-softCoral text-white w-[187px] h-[43px] font-semibold px-6 py-3 rounded shadow hover:from-orange-500 hover:to-red-600"
                    >
                        {editIdx !== null ? 'Update Education' : 'Add Education'}
                    </Button>
                </div>
                <div>
                    <Text as="label" text="Skills" className="block mb-2 text-sm font-medium" />
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Skills"
                            onKeyDown={handleSkillAdd}
                            className="w-full max-h-[48px] border border-red-400 bg-transparent text-white placeholder:text-gray-400"
                        />
                        <Search size={18} className="text-gray-400 right-5 bottom-2 absolute" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {form.skills?.map((skill) => (
                            <EducationSkills
                                key={skill}
                                skill={skill}
                                onClick={handleSkillRemove}
                            />
                        ))}
                    </div>
                </div>
            </form>
        </div>
    );
}
