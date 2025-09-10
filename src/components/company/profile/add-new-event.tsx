import React, { useRef, useState, RefObject } from 'react';
import { Clock, MapPin, UserRoundSearch } from 'lucide-react';
import RichTextEditor from '../../shared/RichTextEditor';
import TimeClockValue from './time-clock';
import { useClickOutside } from '@/hooks/useClickOutside';
import { mockedParticipants } from '@/mocks/mockedData';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/Text';
import { timeZones } from '@/components/home/Data/timeZones';
import Image from 'next/image';
import { CalendarPopup } from '@/components/shared/CalendarPopup';
import dayjs, { Dayjs } from 'dayjs';
import { Participant } from '@/mocks/mockedData';

export default function AddEvent({
    onClick,
    eventRef,
}: {
    onClick?: () => void;
    eventRef: RefObject<HTMLDivElement>;
}) {
    const [participants, setParticipants] = useState<Participant[]>(mockedParticipants);
    const modalRef = useRef<HTMLDivElement>(null);
    const [openCalendar, setOpenCalendar] = useState(false);
    const [toTime, setToTime] = useState<string | undefined>();
    const [fromTime, setFromTime] = useState<string | undefined>();
    const [from, setFrom] = useState<boolean>(true);
    const [showTime, setShowTime] = useState<boolean>(false);
    const [selectedToTz, setSelectedToTz] = useState<string | null>(null);
    const [selectedFromTz, setSelectedFromTz] = useState<string | null>(null);
    const [activeSetter, setActiveSetter] = useState<'from' | 'to'>('from');
    const useCalendarRef = useRef<HTMLButtonElement>(null);
    const [date, setDate] = useState<string>();
    const setTime = activeSetter === 'from' ? setFromTime : setToTime;

    useClickOutside(
        modalRef,
        () => {
            setShowTime(false);
        },
        showTime
    );
    const handleToValueChange = (value: string) => {
        setActiveSetter('to');
        setShowTime(!showTime);
        setSelectedToTz(value);
    };
    const handleFromValueChange = (value: string) => {
        setActiveSetter('from');
        setShowTime(!showTime);
        setSelectedFromTz(value);
    };
    const handleChange = (date: Dayjs | null) => {
        setDate(date?.format('YYYY-MM-DD'));
        setOpenCalendar(!openCalendar);
    };
    const handleRemove = (indx: number) => {
        const new_participants = participants.filter((part, i) => i != indx);
        setParticipants(new_participants);
    };

    return (
        <div className="max-w-[558px] bg-midnightBlue flex flex-col gap-4 p-[10px] rounded-2xl">
            {showTime && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <TimeClockValue
                        onClick={() => setShowTime(!showTime)}
                        ref={modalRef}
                        setTime={setTime}
                    />
                </div>
            )}
            <div className="flex items-center justify-between mb-2">
                <Text as="h2" text="Add new event" size="2xl" weight="bold" />
                <Button
                    variant="ghost"
                    className="text-neutralGray w-5 h-5 rounded-full border flex justify-center items-center p-0"
                    onClick={onClick}
                >
                    <span className="tex-sm">&#10005;</span>
                </Button>
            </div>
            <Input
                className="w-full bg-darkSlateBlue border border-[#C5C5C580] rounded-[8px] placeholder-white px-4 py-3 text-lg text-white outline-none focus:border-vibrantSky mb-2"
                placeholder="Meeting Title..."
            />

            <div className="w-[518px] p-y-[12px] gap-2 flex flex-col rounded-[12px] border border-[#C5C5C580] ">
                <div className="flex items-center gap-2 text-white text-lg font-semibold px-4 pt-4">
                    <span className="text-xl">
                        {' '}
                        <Clock />
                    </span>
                    Date & Time
                </div>
                <div className="border-[0.5px] border-white w-full my-2" />
                <div className="flex flex-col gap-2 px-4 pb-4">
                    <div>
                        <Text text="Meeting date" weight="semibold" />
                        <CalendarPopup
                            value={dayjs(date)}
                            open={openCalendar}
                            onChange={handleChange}
                            onClose={() => setOpenCalendar(!openCalendar)}
                            anchorRect={useCalendarRef}
                        />
                        <Button
                            onClick={() => setOpenCalendar(true)}
                            variant="outline"
                            ref={useCalendarRef}
                            className="w-full justify-start mt-2 rounded-[8px] border-white bg-transparent text-neutralGray hover:bg-transparent hover:text-white"
                        >
                            {date ? date : 'Choose date'}
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <Text as="label" text="To" className="text-neutralGray text-sm" />
                            <Select onValueChange={handleToValueChange} value={selectedToTz || ''}>
                                <SelectTrigger>
                                    <SelectValue placeholder={'Set time'}>
                                        {selectedToTz
                                            ? `${toTime} ${selectedToTz}`
                                            : 'Select Time Zone'}
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent className="bg-black/70 text-white ">
                                    {timeZones.map((tz) => (
                                        <SelectItem key={tz.value} value={tz.value}>
                                            {tz.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Text as="label" text="From" className="text-neutralGray text-sm" />
                            <Select
                                onValueChange={handleFromValueChange}
                                value={selectedFromTz || ''}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder={'Set time'}>
                                        {selectedFromTz
                                            ? `${fromTime} ${selectedFromTz}`
                                            : 'Select Time Zone'}
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent className="bg-black/70 text-white ">
                                    {timeZones.map((tz) => (
                                        <SelectItem key={tz.value} value={tz.value}>
                                            {tz.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full rounded-[12px] relative ">
                <Input
                    className="w-full px-9 py-2 rounded-[8px] bg-richSlateBlue text-white border border-[#C5C5C580] focus:border-vibrantSky outline-none placeholder:text-white"
                    placeholder=" Choose location"
                />
                <MapPin className="absolute top-2 mr-3 w-5 h-5 left-1" />
            </div>
            <div className="w-full rounded-[12px]  relative">
                <Input
                    className="w-full px-9 py-2 rounded-[8px] bg-richSlateBlue text-white border border-[#C5C5C580] focus:border-vibrantSky outline-none placeholder:text-white"
                    placeholder="Add participants"
                />
                <UserRoundSearch className="absolute top-2 mr-3 w-5 h-5 left-1" />
            </div>

            <div className="w-[518px] rounded-[12px]  px-4 py-4">
                <div className="flex flex-wrap gap-3 mt-2">
                    {participants?.map(({ avatar, name }, indx) => (
                        <div
                            key={indx}
                            className="flex items-center bg-admiralBlue border-[0.5px] border-[#C5C5C580] rounded-[8px] px-3 py-2 gap-2 min-w-[120px]"
                        >
                            <Image
                                src={avatar}
                                width={100}
                                height={100}
                                alt={name}
                                className="w-8 h-8 rounded-full object-cover"
                            />
                            <Text text={name} size="sm" weight="semibold" className="truncate" />
                            <Button
                                onClick={() => handleRemove(indx)}
                                variant="ghost"
                                className="ml-2 border border-red-500 rounded-full text-vibrantRed text-[10px] w-6 h-6 flex items-center justify-center p-0"
                            >
                                X
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div><RichTextEditor /></div> */}

            <div className="flex justify-end gap-4 mt-2 max-w-[518px]">
                <Button
                    variant="ghost"
                    size="lg"
                    className="text-neutralGray hover:bg-darkSlateBlue"
                >
                    Cancel
                </Button>
                <Button variant="gradient" size="lg" className="hover:opacity-70">
                    Schedule
                </Button>
            </div>
        </div>
    );
}
