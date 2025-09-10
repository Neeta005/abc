export default function filterJobs(jobs: any[], activeFilters: string[]) {
    console.log('Active filter ', activeFilters);
    if (activeFilters.length === 0) return jobs;

    return jobs.filter((job) =>
        activeFilters.every(
            (filter) =>
                job.jobType?.includes(filter) ||
                job.location?.includes(filter) ||
                job.workLocation?.includes(filter)
        )
    );
}
