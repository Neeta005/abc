'use client';
import React, { useState } from 'react';
import image from '@/assets/avatars/image_6.png';
import JobPosted from '@/components/company/profile/jobs-posted';
import { Menu, List } from 'lucide-react';
import JobTable from '@/components/company/profile/job-table';
import { tabs } from '@/mocks/mockedData';
import { rows, columns } from '@/mocks/mockedJobs';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text'; // Import your Text component

export default function PostedJobsClient() {
    const [allJobs, setAllJobs] = useState<boolean>(true);
    const [activeTab, setActiveTab] = useState<string>('activeJobs');
    
    return (
        <div>
            <div className="bg-twilightBlue flex gap-[30px] min-h-screen">
                <div
                    className="flex-1 flex flex-col bg-no-repeat bg-cover bg-[center_-5%]"
                    style={{ backgroundImage: `url(${image.src})` }}
                >
                    {/* Add header title here */}
              <div className="flex justify-between items-center mb-6">
  {/* Left Title */}
  <h2 className="text-white text-2xl font-bold">Job Posted</h2>

  {/* Right Controls */}
  <div className="flex items-center gap-4">
    {/* Creation Date Box */}
    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-white text-sm">
      <span>Creation date:</span>
<select className="bg-steelSlateBlue text-white border border-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white">
        <option>10, July 2025</option>
        <option>11, July 2025</option>
        <option>12, July 2025</option>
      </select>
    </div>

    {/* Status Box */}
    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-white text-sm">
      <span>Status:</span>
      <select className="bg-steelSlateBlue text-white border border-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white">
        <option>All status</option>
        <option>Active</option>
        <option>Paused</option>
        <option>Closed</option>
      </select>
    </div>
  </div>
</div>

                    
                    <div className="flex justify-between bg-steelBlue mr-10 text-white mb-4 mt-4 ">
                        <div className="flex gap-4 px-4 rounded-lg mr-7 w-fit">
                            {tabs?.map(({ id, label }) => (
                                <Button
                                    key={id}
                                    variant="ghost"
                                    onClick={() => setActiveTab(id)}
                                    className={`px-4 py-2 text-[12px] rounded-[5px] font-semibold ${
                                        activeTab === id
                                            ? 'border border-midnightBlue text-warmOrange'
                                            : 'text-white'
                                    } focus:outline-none`}
                                >
                                    {label}
                                </Button>
                            ))}
                        </div>
                        <div className="flex mr-7 justify-between gap-3 py-2">
                            {/* <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setAllJobs(!allJobs)}
                            >
                                <Menu />
                            </Button> */}
                            {/* <Button variant="ghost" size="icon">
                                <List />
                            </Button> */}
                        </div>
                    </div>
                    {allJobs
                        ? activeTab === 'activeJobs' && (
                              <JobPosted
                                  title={'dddd'}
                                  company={'ddddd'}
                                  postedDate={'ddddd'}
                                  openings={10}
                                  stipend={'xx'}
                                  interviewMode={'ww'}
                                  workHours={'ww'}
                                  type={''}
                                  skills={['a', 'b', 'd']}
                              />
                          )
                        : activeTab === 'activeJobs' && <JobTable columns={columns} rows={rows} />}
                </div>
            </div>
        </div>
    );
}