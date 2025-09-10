import StatsCards from '@/components/student/dashboard/StatsCards';
import InCompleteProfileSummary from '@/components/student/profile/ProfileSummary';
import DynamicApplicationStatsChart from '@/components/company/dashboard/stat-chart';
import ActivitFeed from '@/components/company/dashboard/ActivityFeed';
import Meetings from '@/components/company/dashboard/meeting';
import { mockedProfileSummary } from '@/mocks/mockedProfileData';
import PostJobButton from '@/components/shared/PostJobButton';
import ProfileSummary from '@/components/company/profile/CompanyProfile/CompanyProfileSummary';
import { mockedRecentJobs } from '@/mocks/mockedData';
import RecentJobs from '@/components/company/dashboard/RecentJobs';
import { Text } from '@/components/ui/Text';
const StudentDashboardPage = () => {
    return (
        <div className="w-full overflow-x-hidden">
            <div className="flex flex-col lg:flex-row justify-between gap-8 mt-6 flex-wrap">
                <div className="flex flex-col gap-6 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                        <Text text={'Welcome, Arun'} weight={'semibold'} as={'h1'} size="3xl" />

                        <PostJobButton />
                    </div>
                    <div className="flex-1  text-white">
                        <div className="flex flex-wrap gap-3">
                            <StatsCards company={true} />

                            <div className="bg-steelBlue flex-1 p-4 rounded-lg min-w-[280px] max-w-full">
                                <DynamicApplicationStatsChart />
                            </div>

                            <div className="bg-steelBlue p-4 rounded-lg  flex-1 max-w-[280px]  ">
                                <Text
                                    text={'Recent Added Jobs'}
                                    weight={'semibold'}
                                    as={'h2'}
                                    className="mb-4"
                                    size="lg"
                                />
                                {mockedRecentJobs?.map((item, id) => (
                                    <RecentJobs key={id} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full sm:flex-col lg:flex-row gap-6 ">
                        <ActivitFeed />
                        <Meetings />
                    </div>
                </div>

                <div className="min-w-[250px] max-w-sm mt-[40px]  lg:mr-1 pr-0 lg:pr-2">
                    <ProfileSummary />
                </div>
            </div>
        </div>
    );
};

export default StudentDashboardPage;
