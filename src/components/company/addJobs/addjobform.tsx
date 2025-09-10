import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { X } from 'lucide-react';

import useJobPosting from '@/stores/jobPostingStore';
import { useFormField } from '@/helpers/useFormField';
import { useJobProgressStore } from '@/stores/progressHooks/jobStore';
import { useHandleValueChange } from '@/hooks/useHandleValueChange';
import useHandleBlur from '@/hooks/useHandleBlur';
import studentRegistration from '@/types/studentRegistration';
import companyRegistration from '@/types/companyRegistration';
import { JobPostingProgress } from '@/types/JobPostingProgress';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';
const AddJobForm = () => {
    const setBasicInfo = useJobPosting((state) => state.setJobBasicInfo);
    const basicDetail = useJobPosting((state) => state.jobBasicInfo);

    const { incrementDone: increament, decrementDone: decreament } = useJobProgressStore();

    const [skills, setSkills] = useState<string[]>([]);
    const [skillInput, setSkillInput] = useState<string>('');

    const handleBlur = useHandleBlur(
        increament as (
            field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );
    const handleValueChange = useHandleValueChange(
        setBasicInfo,
        decreament as (
            field: keyof studentRegistration | keyof companyRegistration | keyof JobPostingProgress
        ) => void
    );
    const handleSkillInput = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        setSkillInput(value);
    };

    const handleAddSkill = () => {
        if (skillInput.trim() && !skills.includes(skillInput.trim())) {
            setSkills([...skills, skillInput.trim()]);
            setBasicInfo({ ...basicDetail, skillsRequired: [...skills] });
            setSkillInput('');
        }
    };

    const handleRemoveSkill = (skill: string) => {
        setBasicInfo({
            ...basicDetail,
            skillsRequired: basicDetail.skillsRequired.filter((s) => s !== skill),
        });
    };
    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddSkill();
        }
    };

    return (
        <div className="w-full max-w-2xl bg-inherit rounded-lg">
            <Text text={'Basic Info'} as={'h2'} className="text-white text-[30px] font-bold mb-6" />
            <Text text={'Role Name'} as={'label'} className="block text-white text-base mb-1" />
            <div className="relative mb-6">
                <Input
                    className="w-full bg-inherit text-white px-2 h-[49px] rounded-lg border border-crimsonBerry"
                    placeholder="Frontend Developer"
                    name="roleName"
                    value={basicDetail.roleName}
                    onBlur={handleBlur}
                    onChange={handleValueChange}
                />
                {basicDetail.roleName && (
                   <Button
  variant="secondary"
  type="button"
  onClick={() => {
    setBasicInfo({ ...basicDetail, roleName: '' });
  }}
  className="absolute right-12 top-1/2 -translate-y-1/2 
             size-6 flex items-center justify-center 
             rounded-full !bg-white !text-black shadow-md 
             hover:!bg-gray-200"
>
  <X className="size-4" />
</Button>

                )}
                <Button
                    size={'icon'}
                    variant={'secondary'}
                    className="absolute right-4 bg-inherit top-1/2 -translate-y-1/2 text-white text-xl"
                >
                    <FiSearch />
                </Button>
            </div>
            {/* <label className="">Skills Required</label> */}
            <Text
                as={'label'}
                text={'Skills Required'}
                className="block text-white text-base mb-1"
            />
            <div className="relative mb-3">
               <Input
  className="w-full bg-inherit text-white px-2 h-[49px] rounded-lg border border-crimsonBerry"
  placeholder="React"
  name="skillsRequired"
  value={skillInput}
  onKeyDown={handleOnKeyDown}
  onBlur={handleBlur}
  onChange={handleSkillInput}   // ✅ use correct handler
/>


                {skillInput && (
                    <Button
  variant="secondary"
  type="button"
  onClick={() => setSkillInput('')}
  className="absolute right-12 top-1/2 -translate-y-1/2 
             size-6 flex items-center justify-center 
             rounded-full !bg-white !text-black shadow-md 
             hover:!bg-gray-200"
>
  <X className="size-4" />
</Button>

                )}
                <Button
                    variant={'secondary'}
                    className="absolute bg-inherit right-4 top-1/2 -translate-y-1/2 text-white text-xl"
                    onClick={handleAddSkill}
                    type="button"
                    size={'icon'}
                >
                    <FiSearch />
                </Button>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
                {skills?.map((skill) => (
               <span
  key={skill}
  className="flex items-center h-[32px] bg-dimGray border border-white text-white text-lg rounded-lg px-4 py-2"
>
  {skill}
<Button
  type="button"
  variant="ghost"
  onClick={() => handleRemoveSkill(skill)}
  className="ml-2 size-4 flex items-center justify-center 
             rounded-full bg-white text-black shadow-md 
             hover:bg-gray-200"
>
  <X className="size-4" />
</Button>

</span>


                ))}
            </div>
            <label className="block text-white text-[16px] mb-1">No. of Opening</label>
            <Input
                type="number"
                className="w-full bg-inherit text-white px-2 h-[49px] rounded-lg border border-crimsonBerry"
                placeholder="2"
                value={basicDetail.openings}
                name="openings"
                inputMode="numeric"
                onBlur={handleBlur}
                onChange={handleValueChange}
            />
        </div>
    );
};

export default AddJobForm;
