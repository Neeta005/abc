import ProgressTracker from '../ProgressTracker';

type ProgressType = {
    title: string;
    completed: boolean;
};
interface ProgressSidebarProps {
    steps?: ProgressType[];
    company?: boolean;
    job?: boolean;
}

const ProgressSideBar = ({ steps, company, job }: ProgressSidebarProps) => {
    return (
        <div className="relative w-full pt-[222px] px-16 ml-10 left-20">
            <div className="relative left-20 ml-3 z-10">
                <ProgressTracker company={company} firstSteps={steps} job={job} />
            </div>
        </div>
    );
};
export default ProgressSideBar;
