'use client';
import React from 'react';
import { useStudentProgressStore } from '@/stores/progressHooks/useStudentProgressStore';

const StudentForm = () => {
    const { data, incrementDone, decrementDone, resetProgress, completedFields } =
        useStudentProgressStore();

    type ProgressField = Exclude<keyof typeof data, 'done'>;

    const handleFieldChange = (field: ProgressField) => {
        incrementDone(field);
        console.log(`Incrementing progress for field: ${field}`);
    };

    const handleUndo = (field: ProgressField) => {
        decrementDone(field);
        console.log(`Undoing progress for field: ${field}`);
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Student Registration Progress</h2>
            <p className="mb-2">Progress: {data.done} points</p>

            <div className="space-y-4">
                <button
                    onClick={() => handleFieldChange('photoUpload')}
                    disabled={completedFields.has('photoUpload')}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Mark Photo Upload Done
                </button>

                <button
                    onClick={() => handleUndo('photoUpload')}
                    disabled={!completedFields.has('photoUpload')}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >
                    Undo Photo Upload
                </button>

                <button
                    onClick={resetProgress}
                    className="px-4 py-2 bg-gray-700 text-white rounded"
                >
                    Reset Progress
                </button>
            </div>
        </div>
    );
};

export default StudentForm;
