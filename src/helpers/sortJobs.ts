import { AppliedJob } from '@/types/Jobs';

export function sortAppliedJobs(
    jobs: AppliedJob[],
    sortBy: 'deadline' | 'salary',
    order: 'asc' | 'desc'
): AppliedJob[] {
    return [...jobs].sort((a, b) => {
        let valA: number;
        let valB: number;

        if (sortBy === 'deadline') {
            valA = new Date(a.deadline).getTime();
            valB = new Date(b.deadline).getTime();
        } else {
            valA = parseFloat(a.salary.replace(/[^0-9.]/g, ''));
            valB = parseFloat(b.salary.replace(/[^0-9.]/g, ''));
        }

        return order === 'asc' ? valA - valB : valB - valA;
    });
}
