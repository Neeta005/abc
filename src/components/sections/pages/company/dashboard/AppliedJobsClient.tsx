'use client';
import React, { useState, useRef } from 'react';
import image from '@/assets/avatars/image_6.png';
import { mockedappliedJobs as data } from '@/mocks/mockedJobs';
import { useClickOutside } from '@/hooks/useClickOutside';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Text } from '@/components/ui/Text';
import AppliedJobs from '@/components/student/Exam/search_jobs/applied-jobs';
import TrackStatus from '@/components/student/Exam/search_jobs/trackStatus';
import { Switch } from '@/components/ui/switch';
import { AppliedJob as JobsProps } from '@/types/Jobs';
const AppliedJobsClient = () => {
    const [openTrack, setOpenTrack] = useState<boolean>(false);
    const [jobs, setJobs] = useState<JobsProps[]>(data);
    const modalRef = useRef<HTMLDivElement>(null);
    const [shareModal, setShareModal] = useState<boolean>(false);
    const [hideRejected, setHideRejected] = useState<boolean>(false);
    useClickOutside(modalRef, () => setShareModal(!shareModal), shareModal);
    const handleSwitchChange = () => {
        setHideRejected(!hideRejected);
        if (!hideRejected) {
            const new_jobs = jobs.filter((job) => job.status !== 'Rejected');
            setJobs(new_jobs);
            return;
        }
        setJobs(data);
    };
    return (
        <div>
            {openTrack && (
                <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm">
                    <TrackStatus onClick={() => setOpenTrack(!openTrack)} ref={modalRef} />
                </div>
            )}

            <div className="bg-twilightBlue flex gap-[30px] mt-9 min-h-screen">
                <div
                    className={`flex-1 flex bg-no-repeat  bg-[center_-5%] flex-col bg-cover`}
                    style={{ backgroundImage: `url(${image.src})` }}
                >
                    <div className="flex justify-between text-white">
                        <Text
                            text="Jobs Applied"
                            className="text-[26px] text-white mb-4 px-6 mt-2"
                        />
                        <div className="flex">
                            <div className="mt-6">
                                <Text
                                    as="span"
                                    text="Hide Rejected"
                                    className="text-[12px] mr-3 text-white"
                                />
                                <Switch
                                    className="h-[21px] w-[35px] data-[state=checked]:bg-red-500 data-[state=unchecked]:bg-gray-400 rounded-full transition-colors duration-300"
                                    onClick={handleSwitchChange}
                                />
                            </div>
                            <div className="flex flex-col px-6 mr-1 mb-4 mt-2">
                                <Text
                                    text="Job search status"
                                    className="text-[13.16px] font-[500] mb-1"
                                />
                                <div>
                                    <Select>
                                        <SelectTrigger className="border-[1px] rounded-[8px ] text-white text-sm focus:outline-none w-[197px] h-[33.339px] gap-2 px-4 py-3">
                                            <SelectValue placeholder="Actively Interviewing" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-stormySlate text-white border-tangerineBlast">
                                            <SelectItem value="Currency">Anywhere</SelectItem>
                                            <SelectItem value="INR">Alwar</SelectItem>
                                            <SelectItem value="USD">Amla</SelectItem>
                                            <SelectItem value="EUR">Ahmedabad</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mx-auto px-6">
                            <div className="flex-1 w-full rounded-2xl p-2 bg-midnightBlue overflow-x-hidden">
                                <AppliedJobs jobs={jobs} onClick={() => setOpenTrack(!openTrack)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobsClient;
