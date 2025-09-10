'use client';
import React, { useState } from 'react';
import { mockedBio } from '@/mocks/mockedData';
import { EditSvg } from '@/components/shared/deleteEdit';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

export default function ProfileBio({ view = false }: { view?: boolean }) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);
    const [bio, setBio] = useState<string>(mockedBio);
    const [tempBio, setTempBio] = useState<string>(mockedBio);

    const toggleBio = () => setIsExpanded(!isExpanded);

    const saveBio = () => {
        setBio(tempBio);
        setEdit(false);
    };

    const cancelEdit = () => {
        setTempBio(bio);
        setEdit(false);
    };

    const previewLength = 150;
    const previewText = bio.slice(0, previewLength);

    return (
        <div className="w-full bg-twilightBlue text-white mt-4  px-8 border-b border-gray-700">
            <div className="flex justify-between gap-2 mb-2">
                <Text text="Bio" size="xl" weight="bold" />
                {!view && (
                    <EditSvg
                        svgClassname="text-red-400 w-[16px] h-[16px]"
                        btnClassname="w-[32px] h-[32px]"
                        onClick={() => setEdit(true)}
                    />
                )}
            </div>

            {edit && (
                <div className="flex flex-col gap-3">
                    <textarea
                        className="w-full bg-transparent border border-gray-600 rounded p-2 text-white resize-none whitespace-pre-wrap"
                        value={tempBio}
                        onChange={(e) => setTempBio(e.target.value)}
                        rows={5}
                        autoFocus
                    />
                    <div className="flex gap-2">
                        <Button
                            onClick={saveBio}
                            variant="default"
                            className="bg-red-500 hover:bg-red-600"
                        >
                            Save
                        </Button>
                        <Button
                            onClick={cancelEdit}
                            variant="default"
                            className="border text-gray-300 hover:opacity-80"
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            )}

            {!edit && (
                <>
                    <Text
                        as="p"
                        text={isExpanded ? bio : `${previewText}...`}
                        className="text-base mb-2 whitespace-pre-wrap"
                    />
                    <Button
                        onClick={toggleBio}
                        variant="link"
                        className="text-red-400 text-[14px] mt-2 hover:underline flex items-center gap-1 p-0 h-auto"
                    >
                        {isExpanded ? 'Read Less ▲' : 'Read More ▼'}
                    </Button>
                </>
            )}
        </div>
    );
}
