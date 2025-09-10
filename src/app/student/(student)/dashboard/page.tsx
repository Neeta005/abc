'use client';
import StatsCards from '@/components/student/dashboard/StatsCards';
import ProfileChart from '@/components/student/dashboard/ProfileChart';
import ProfileSummary from '@/components/student/dashboard/DashboardSummary.tsx';
import JobsForYou from '@/components/student/dashboard/JobsForYou';
import AppliedJobs from '@/components/student/dashboard/AppliedJobs';
import MyPieChart from '@/components/student/dashboard/PieChart';
import { mockedProfileSummary } from '@/mocks/mockedProfileData';
import InCompleteProfileSummary from '@/components/student/profile//ProfileSummary';
import AgentChat from '@/components/shared/AgentChat';
const StudentDashboardPage = () => {
    return (
        <div className="min-h-screen bg-twilightBlue">
            <div className="flex w-full min-h-screen">
                <div className="flex-1 p-6 text-white overflow-x-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-semibold">Welcome, Arun</h1>
                    </div>

                    <div className="flex flex-wrap mt-6 gap-6">
                        <StatsCards />
                        <div className="bg-steelBlue flex-1 p-4 rounded-lg w-[65%] min-w-[400px]">
                            <ProfileChart />
                        </div>
                        <div className="bg-steelBlue p-4 rounded-lg w-[30%] min-w-[230px] max-w-full">
                            <MyPieChart dataLabel={[]} />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-6 flex-shrink-0">
                        <div className="flex gap-3 w-full flex-wrap">
                            <JobsForYou />
                            <AppliedJobs />
                        </div>
                    </div>
                </div>
                <div className="w-[280px] shrink-0 mt-[90px] mr-9 pr-4">
                    {mockedProfileSummary.profileComplete === 100 ? (
                        <ProfileSummary />
                    ) : (
                        <InCompleteProfileSummary />
                    )}
                </div>
            </div>
            <AgentChat />
        </div>
    );
};

export default StudentDashboardPage;
