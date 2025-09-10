import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Pencil, ArrowUp, ArrowDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';

export default function QuestionsFilterSection() {
    const [question, setQuestion] = useState<string>('');
    const [type, setType] = useState<string>('Boolean');
    const [questions, setQuestions] = useState<{ text: string; type: string }[]>([]);

    const handleAddQuestion = () => {
        if (question.trim()) {
            setQuestions([...questions, { text: question, type }]);
            setQuestion('');
        }
    };

    return (
        <div className="max-w-[754px] p-6 bg-inherit rounded-lg">
            <Text
                as="h2"
                className="text-white text-2xl font-bold mb-4"
                text="Questions to Filter Candidates"
            />
            <div className="flex gap-4 mb-4 ">
                <div className="flex justify-between gap-1">
                    <Input
                        className="flex-1 bg-transparent border h-[47px] w-[616px] border-terracottaOrange rounded-lg px-5 py-3 text-white text-lg"
                        placeholder="Text field"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <Select value={type} onValueChange={setType}>
                        <SelectTrigger className="w-[131px] h-[47px] bg-transparent border border-terracottaOrange text-white">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-deepSeaNavy text-white">
                            <SelectItem value="Boolean">Boolean</SelectItem>
                            <SelectItem value="Multiple Choice">Multiple Choice</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div>
                <Button
                    className=" text-white px-6 py-2 rounded-md font-semibold"
                    onClick={handleAddQuestion}
                >
                    + Add Questions
                </Button>
            </div>

            <ul className="text-white mt-4">
                {questions?.map(({ type, text }, idx) => (
                    <li key={idx} className="mb-6">
                        <div className="flex items-center justify-between">
                            <div className="text-lg flex items-center gap-2">
                                <Text as="span" className="font-medium" text={`${idx + 1}.`} />
                                <Text as="span" className="truncate max-w-[500px]" text={text} />
                            </div>
                            <div className="flex items-center gap-2">
                                {idx === 0 ? (
                                    <ArrowDown size={18} className="text-white cursor-pointer" />
                                ) : (
                                    <ArrowUp size={18} className="text-white cursor-pointer" />
                                )}
                                <Pencil size={18} className="text-white cursor-pointer" />
                            </div>
                        </div>

                        {type === 'Multiple Choice' && (
                            <div className="mt-2 ml-6 flex flex-col gap-2">
                                {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((opt, i) => (
                                    <label key={i} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name={`q-${idx}`}
                                            className="form-radio text-orange-500"
                                        />
                                        <Text as="span" text={opt} />
                                    </label>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
