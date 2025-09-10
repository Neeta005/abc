import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { EditSvg, DeleteSvg } from '@/components/shared/deleteEdit';
import useJobPosting from '@/stores/jobPostingStore';
import { useFormField } from '@/helpers/useFormField';
import { useJobProgressStore } from '@/stores/progressHooks/jobStore';
import { useHandleValueChange } from '@/hooks/useHandleValueChange';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

const AddMultipleChoiceQs = () => {
    const setJob = useJobPosting((state) => state.setQuestions);
    const storeQs = useJobPosting((state) => state.questions);
    const [question, setQuestion] = useState<string>('');
    const [type, setType] = useState<'multiple' | 'single' | 'trueFalse' | 'long'>('multiple');
    const [options, setOptions] = useState<string[]>([]);
    const [optionInput, setOptionInput] = useState<string>('');
    const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
    const { incrementDone: increament, decrementDone: decreament } = useJobProgressStore();

    const [savedQuestion, setSavedQuestion] = useState<null | {
        question: string;
        type: string;
        options?: string[];
    }>(null);

    const handleAddOption = () => {
        if (optionInput.trim()) {
            setOptions([...options, optionInput.trim()]);
            setOptionInput('');
        }
    };

    const handleOptionToggle = (index: number) => {
        if (type === 'single') {
            setSelectedOptions([index]);
        } else {
            setSelectedOptions(prev => 
                prev.includes(index) 
                    ? prev.filter(i => i !== index)
                    : [...prev, index]
            );
        }
    };

    const handleSave = () => {
        if (!question.trim()) return;
        increament('questions');
        const newQuestion = {
            question,
            type,
            ...(type === 'multiple' || type === 'single' ? { options } : {}),
        };

        setSavedQuestion(newQuestion);
        setJob([...storeQs, newQuestion]);
        setQuestion('');
        setOptions([]);
        setOptionInput('');
        setSelectedOptions([]);
    };

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <Text
                    text="Questions to Filter Candidates"
                    as="h2"
                    className="font-bold text-2xl text-white"
                />
               
            </div>

            {savedQuestion && (
                <div className="mb-6 p-4 border border-crimsonBerry rounded-lg text-white max-w-[790px]">
                    {storeQs?.map(({ question, options }, id) => (
                        <div key={id}>
                            <Text
                                as="p"
                                text={`${id + 1}. ${question}`}
                                className="mb-2 text-[24px] font-bold"
                            />
                            {options && (
                                <ul className="list-disc text-[20px] font-semibold list-inside grid grid-cols-2 gap-3">
                                    {options?.map((opt, idx) => (
                                        <li key={idx}>{opt}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Main container without border */}
            <div className="p-6 bg-shadowBlue rounded-[8px] max-w-[790px] text-white">
                <div className="flex flex-col gap-1 mb-6">
                    <Text as="label" text="Question" className="text-base mb-2" />
                    <div className="flex gap-2">
                        <Input
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="flex-1 h-[47px] px-3 bg-transparent border border-red-500 rounded-md text-white text-lg"
                            placeholder="Text field"
                        />
                        <Select
                            value={type}
                            onValueChange={(val) =>
                                setType(val as 'multiple' | 'single' | 'trueFalse' | 'long')
                            }
                        >
                            <SelectTrigger className="w-40 border h-[47px] border-red-500 text-white bg-transparent focus:border-white">
                                <SelectValue placeholder="Multiple..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="multiple">Multiple Choice</SelectItem>
                                <SelectItem value="single">Single Choice</SelectItem>
                                <SelectItem value="trueFalse">True/False</SelectItem>
                                <SelectItem value="long">Long Question</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {(type === 'multiple' || type === 'single') && (
                    <div className="mb-6">
                        {/* Add Options Label - back to normal */}
                        <Text as="label" text="Add Options" className="block text-white text-base font-medium mb-4" />
                        
                        {/* Large Textarea for adding options */}
                        <div className="mb-6">
                            <textarea
                                value={optionInput}
                                onChange={(e) => setOptionInput(e.target.value)}
                                placeholder="Type your question here"
                                className="w-full h-20 px-4 py-3 bg-transparent border border-red-500 rounded-md text-white placeholder-gray-400 resize-none focus:outline-none focus:border-red-400"
                            />
                        </div>

                        {/* Display existing options with functional checkboxes */}
                        {options.length > 0 && (
                            <div className="space-y-3 mb-6">
                                {options.map((opt, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <button
                                            onClick={() => handleOptionToggle(index)}
                                            className={`w-5 h-5 border-2 border-gray-400 flex-shrink-0 flex items-center justify-center ${
                                                type === 'single' ? 'rounded-full' : 'rounded-sm'
                                            } ${
                                                selectedOptions.includes(index) 
                                                    ? 'bg-red-500 border-red-500' 
                                                    : 'bg-transparent'
                                            }`}
                                        >
                                            {selectedOptions.includes(index) && (
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </button>
                                        <span className="text-gray-300 text-base">{opt}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Add Option Button with light background box */}
                        <div className="mb-6">
                            <div className="bg-white bg-opacity-10 p-3 rounded-md inline-block">
                                <button
                                    onClick={handleAddOption}
                                    className="text-red-500 text-base hover:text-red-400 transition-colors"
                                >
                                    + Add Option
                                </button>
                            </div>
                        </div>

                        {/* Horizontal line below Add Option */}
                        <hr className="border-gray-600 mb-6" />
                    </div>
                )}

                {/* Right aligned Action Buttons */}
               <div className="flex justify-end gap-4">
  <button className="flex items-center gap-2 border-2 border-white hover:bg-gray-600 text-white px-6 py-3 rounded-md transition-colors">
    <span className="flex items-center justify-center w-6 h-6 border-2 border-white rounded-full">
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    Add Questions
  </button>
                    <button 
                        onClick={handleSave}
                        className="bg-[linear-gradient(90deg,#FFA844_0%,#FF6D68_100%)] hover:bg-red-600 text-white px-8 py-3 rounded-md transition-colors"
                    >
                        save
                    </button>
                </div>
            </div>
        </>
    );
};

export { AddMultipleChoiceQs };
