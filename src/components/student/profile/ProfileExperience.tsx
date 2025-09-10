import React from 'react';
import { Button } from '@/components/ui/button';
import { mockedExperiences } from '@/mocks/mockedData';
import { DeleteSvg, EditSvg } from '@/components/shared/deleteEdit';
import { VerticalBar } from './ProfileVerticalBarSvg';
import { Text } from '@/components/ui/Text';
import ProfileCard from './ProfileCard';
export default function ProfileExperience({ view = false }: { view?: boolean }) {
    return (
        <div className="bg-twilightBlue flex flex-row gap-5 rounded-2xl px-8  relative">
            <VerticalBar />

            <div className="h-[492px] w-full">
                <div className="flex items-center gap-2 mb-6 ml-11">
                    <Text as="span" text="Experience" className="text-white text-3xl  font-bold" />
                    {!view && (
                        <Button className="ml-auto bg-gradient-to-r from-orange-400 to-pink-400 text-white font-semibold px-8 py-2 rounded-lg shadow hover:opacity-90 transition">
                            Add Experience
                        </Button>
                    )}
                </div>

                {mockedExperiences?.map(({ title, date, description }, indx) => (
                    <ProfileCard title={title} key={indx} date={date} description={description} />
                ))}
            </div>
        </div>
    );
}
