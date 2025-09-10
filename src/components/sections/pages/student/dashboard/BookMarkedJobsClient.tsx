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
const SearchJobClient = () => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [shareModal, setShareModal] = useState<boolean>(false);
    const {
        bookmarkedJobs,
        toggleBookmark,
        snackbarOpen,
        setSnackbarOpen,
        message,
        setInitialBookmarks,
    } = useBookmarks();

    useClickOutside(modalRef, () => setShareModal(!shareModal), shareModal);
    useEffect(() => {
        setInitialBookmarks(data.map((job) => job.id));
    }, []);

    return (
        <div>
            {shareModal && (
                <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm z-[9999]">
                    <ShareModal onClose={() => setShareModal(!shareModal)} modalRef={modalRef} />
                </div>
            )}

            <div className="bg-twilightBlue flex gap-[30px] min-h-screen">
                <div
                    className={`flex-1 flex bg-no-repeat  bg-[center_-5%] flex-col bg-cover`}
                    style={{ backgroundImage: `url(${image.src})` }}
                >
                    <div className="text-[26px] text-white mb-4  w-full px-4 mt-6">
                        Bookmarked Jobs
                    </div>
                    <div>
                        <div className="mx-auto px-6">
                            <div className="flex-1 w-full rounded-2xl p-2 bg-midnightBlue">
                                {data?.map(
                                    (job, indx) =>
                                        bookmarkedJobs.includes(job.id) && (
                                            <JobsRecommended
                                                onShare={() => setShareModal(!shareModal)}
                                                key={indx}
                                                {...job}
                                                isBookmarked={bookmarkedJobs.includes(job.id)}
                                                onToggleBookmark={() => toggleBookmark(job.id)}
                                            />
                                        )
                                )}
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
    );
};

export default SearchJobClient;
