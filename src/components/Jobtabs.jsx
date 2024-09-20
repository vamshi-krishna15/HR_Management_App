import React from 'react';
import { useState,useEffect } from 'react';
import JobCard from './JobCard';
import { user } from './Dashboard';

const Jobtabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Sample data. You might fetch this from an API.
    const jobData = [
      {
        id: 1,
        title: 'Frontend Developer',
        company: 'Tech Corp',
        location: 'Remote',
        url: `/jobinfo/${user}`,
      },
      {
        id: 2,
        title: 'Backend Developer',
        company: 'Code Inc.',
        location: 'San Francisco, CA',
        url: '#',
      },
      {
        id: 3,
        title: 'Fullstack Developer',
        company: 'Dev Solutions',
        location: 'New York, NY',
        url: '#',
      },
      {
        id: 4,
        title: 'Frontend Developer',
        company: 'Tech Corp',
        location: 'Remote',
        url: '#',
      },
      {
        id: 5,
        title: 'Backend Developer',
        company: 'Code Inc.',
        location: 'San Francisco, CA',
        url: '#',
      },
      {
        id: 6,
        title: 'Fullstack Developer',
        company: 'Dev Solutions',
        location: 'New York, NY',
        url: '#',
      },
      {
        id: 7,
        title: 'Developer',
        company: 'Dev Solutions',
        location: 'New York, NY',
        url: '#',
      },
    ];

    setJobs(jobData);
  }, []);

  const tabs = [
    { id: 1, title: 'All Jobs', content: {jobs} },
    { id: 2, title: 'Applied', content: {jobs} },
    { id: 3, title: 'Interviews', content: {jobs} },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-none">
      <div className="flex border-none   space-x-8 ">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`py-2 px-4 text-sm font-medium border-none ${activeTab === tab.id ? ' underline text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
      <header className="bg-blue-600 p-3 text-white text-center text-3xl font-custom bg-fixed">
        Job Openings
      </header>
      <div className="container mx-auto p-4 fixed w-[45%] overflow-scroll h-[65%] scrollbar-hide py-12">
      {tabs.find(tab => tab.id === activeTab)?.content.jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
         </div>
      </div>
    </div>
  );
};

export default Jobtabs;
