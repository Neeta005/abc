'use client';
import React, { useState, useRef, useEffect } from 'react';
import Header from '@/components/shared/Header';
import Sidebar from '@/components/shared/Sidebar';
import JobsRecommended from '@/components/student/Exam/search_jobs/JobsRecommended';
import image from '@/assets/avatars/image_6.png';
import SearchBar from '@/components/student/Exam/search_jobs/SearchBar';
import { mockedappliedJobs as data } from '@/mocks/mockedJobs';
import Snackbar from '@mui/material/Snackbar';
import ShareModal from '@/components/student/Exam/search_jobs/ShareModal';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useBookmarks } from '@/hooks/useBookmarks';
import { Text } from '@/components/ui/Text';
import filterJobs from '@/helpers/jobFilters';
import JobFilter from '@/components/student/Exam/search_jobs/filterComponent';

import { jobPosts } from '@/data/JobFilter';
const SearchJobClient = () => {
    const [jobPost, setJobPost] = useState<string>('');
    const [workingSchedule, setWorkingSchedule] = useState<string[]>([]);
    const [experienceRange, setExperienceRange] = useState<{ min: number; max: number }>({
        min: 0,
        max: 2,
    });
    const [salaryRange, setSalaryRange] = useState<{ min: number; max: number }>({
        min: 100,
        max: 1000,
    });
    const [selectedType, setSelectedType] = useState<number[]>([0, 1]);

    const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
    const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

    const removeFilter = (filter: string) => {
        setSelectedFilter(selectedFilter.filter((f) => f !== filter));
    };

    const filteredJobs = filterJobs(data, [...selectedFilter, ...selectedLocation]);
    const modalRef = useRef<HTMLDivElement>(null);
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const [shareModal, setShareModal] = useState<boolean>(false);
    const resetFilters = () => {
        setJobPost(jobPosts[0]);
        setWorkingSchedule([]);
        setExperienceRange({
            min: 0,
            max: 1,
        });
        setSalaryRange({
            min: 100,
            max: 500,
        });
        setSelectedType([0, 1]);
    };
    const { bookmarkedJobs, toggleBookmark, snackbarOpen, setSnackbarOpen, message } =
        useBookmarks();
    useClickOutside(modalRef, () => setShareModal(!shareModal), shareModal);
    useEffect(() => {
        const filters: string[] = [];

        if (jobPost !== '') filters.push(`Job Post: ${jobPost}`);
        filters.push(...workingSchedule.map((ws) => `Schedule: ${ws}`));
        filters.push(`Experience: ${experienceRange.min} - ${experienceRange.max}`);
        filters.push(`Salary: $${salaryRange.min} - $${salaryRange.max}`);
        filters.push(...selectedLocation.map((location) => location));

        setSelectedFilter(filters);
    }, [jobPost, workingSchedule, experienceRange, salaryRange, selectedType, selectedLocation]);

    return (
        <div className="w-full">
            {shareModal && (
                <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm z-[9999]">
                    <ShareModal onClose={() => setShareModal(!shareModal)} modalRef={modalRef} />
                </div>
            )}
            {showFilter && (
                <div
                    className={`fixed right-0 z-[9999]  -top-10 transition-all duration-300
      ${showFilter ? 'translate-y-5 opacity-100' : 'translate-y-0 opacity-0'}`}
                >
                    <JobFilter
                        jobPost={jobPost}
                        setJobPost={setJobPost}
                        workingSchedule={workingSchedule}
                        setWorkingSchedule={setWorkingSchedule}
                        experienceRange={experienceRange}
                        setExperienceRange={setExperienceRange}
                        salaryRange={salaryRange}
                        setSalaryRange={setSalaryRange}
                        selectedType={selectedType}
                        setSelectedType={setSelectedType}
                        onApply={() => setShowFilter(!showFilter)}
                        onReset={resetFilters}
                    />
                </div>
            )}

            <div className="bg-twilightBlue flex gap-[30px] min-h-screen">
                <div
                    className={`flex-1 relative  bg-no-repeat bg-[center_-5%] bg-cover`}
                    style={{ backgroundImage: `url(${image.src})` }}
                >
                    <div className="absolute w-full inset-0 bg-shadowBlue opacity-80 z-0"></div>
                    <div className="relative flex flex-col z-[30]">
                        <div className="relative  mt-10">
                            <SearchBar
                                removeFilter={removeFilter}
                                setSelectedfilter={setSelectedFilter}
                                selectedLocations={selectedLocation}
                                setSelectedLocations={setSelectedLocation}
                                selectedFilters={selectedFilter}
                                handleShowFilter={() => setShowFilter(!showFilter)}
                            />
                        </div>
                        <div>
                            <div className="mx-auto px-6">
                                <div className="flex-1 w-full rounded-2xl  bg-midnightBlue">
                                    {filteredJobs.length === 0 && (
                                        <div className="text-center py-10  bg-transparent">
                                            <Text
                                                text="No jobs found matching your criteria. Please try adjusting your filters or check back later."
                                                className="text-red-500"
                                            />
                                        </div>
                                    )}
                                    {filteredJobs?.map((job, indx) => (
                                        <JobsRecommended
                                            onShare={() => setShareModal(!shareModal)}
                                            key={indx}
                                            {...job}
                                            isBookmarked={bookmarkedJobs.includes(job.id)}
                                            onToggleBookmark={() => toggleBookmark(job.id)}
                                        />
                                    ))}
                                </div>
                                <Snackbar
                                    open={snackbarOpen}
                                    autoHideDuration={3000}
                                    onClose={() => setSnackbarOpen(false)}
                                    message={message}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchJobClient;
