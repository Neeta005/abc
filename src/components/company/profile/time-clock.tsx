import React, { useState, RefObject } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import 'dayjs/locale/en';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';
import { TimeView } from '@/types/Schedule';
import { AmPm } from '@/types/Schedule';
import { RefClicKProps } from '@/types/RefTypes';
export default function TimeClockValue({ onClick, ref, setTime }: RefClicKProps) {
    const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-1T1:30'));
    const [view, setView] = useState<TimeView>('hours');
    const [amPM, setAmPm] = useState<AmPm>('am');
    const handleHourClick = () => setView('hours');
    const handleMinuteClick = () => setView('minutes');
    const formattedTime = value ? `${value.format('hh:mm')} ${amPM.toUpperCase()}` : '';
    const handleOkClick = () => {
        if (value) {
            setTime(formattedTime);
        }
        if (onClick) onClick();
    };

    return (
        <div
            className="w-[421px] h-[673px] bg-admiralBlue rounded-[6px] flex flex-col justify-between"
            ref={ref}
        >
            <Text text="Select time" className="text-[14px] ml-7 mt-11" />
            <div className="text-white flex justify-center items-center text-[74px] mt-4">
                <Button
                    variant="ghost"
                    onClick={handleHourClick}
                    className="p-0 h-auto text-[74px] text-fieryOrange hover:bg-transparent"
                >
                    {value && value?.format('HH')}
                </Button>
                <Text text=":" size="3xl" className="text-[74px]" />
                <Button
                    variant="ghost"
                    onClick={handleMinuteClick}
                    className="p-0 h-auto text-[74px] text-white hover:bg-transparent"
                >
                    {value && value?.format('mm')}
                </Button>

                <div className="border border-white rounded-[3px] text-[19px] w-[69px] ml-5">
                    <Button
                        variant="ghost"
                        className={`flex justify-center p-2 h-[53px] w-full rounded-none hover:bg-orange-500 ${
                            amPM === 'am' && 'bg-orange-400'
                        }`}
                        onClick={() => setAmPm('am')}
                    >
                        AM
                    </Button>
                    <div className="border-[0.5px] border-white"></div>
                    <Button
                        variant="ghost"
                        className={`flex justify-center p-2 h-[53px] w-full rounded-none hover:bg-orange-500 ${
                            amPM === 'pm' && 'bg-orange-400'
                        }`}
                        onClick={() => setAmPm('pm')}
                    >
                        PM
                    </Button>
                </div>
            </div>

            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimeClock
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        ampm={true}
                        view={view}
                        onViewChange={(newView) => setView(newView)}
                        sx={{
                            color: 'white',
                            '& .MuiClock-pin': {
                                backgroundColor: 'white',
                            },
                            '& .MuiClockPointer-root': {
                                backgroundColor: 'white',
                            },
                            '& .MuiClockNumber-root': {
                                color: 'white',
                            },
                        }}
                    />
                </LocalizationProvider>
            </div>

            <div className="relative">
                <div className="flex justify-between ml-10 mb-7 p-2 gap-10 text-skyBlue text-[19px] absolute right-16 bottom-2">
                    <Button variant="link" onClick={onClick} className="text-skyBlue text-[19px]">
                        Cancel
                    </Button>
                    <Button
                        variant="link"
                        onClick={handleOkClick}
                        className="text-skyBlue text-[19px]"
                    >
                        Ok
                    </Button>
                </div>
            </div>
        </div>
    );
}
