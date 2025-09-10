import { useState } from 'react';

export function useBookmarks() {
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
    const [bookmarkedJobs, setBookmarkedJobs] = useState<number[]>([]);
    const [message, setMessage] = useState<'Job unbookmarked' | 'Job bookmarked'>(
        'Job unbookmarked'
    );

    const toggleBookmark = (jobId: number) => {
        setBookmarkedJobs((prev) =>
            prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
        );

        const isBookmarked = bookmarkedJobs.includes(jobId);
        setMessage(isBookmarked ? 'Job unbookmarked' : 'Job bookmarked');
        setSnackbarOpen(true);
    };

    const setInitialBookmarks = (jobIds: number[]) => {
        setBookmarkedJobs(jobIds);
    };

    return {
        bookmarkedJobs,
        toggleBookmark,
        snackbarOpen,
        setSnackbarOpen,
        message,
        setInitialBookmarks,
    };
}
