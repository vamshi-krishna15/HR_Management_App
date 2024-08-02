import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-600">{job.location}</p>
      <div className="mt-4">
        <a href={job.url} className="text-blue-500 hover:text-blue-700">
          Apply Now 
        </a>
      </div>
    </div>
  );
};

export default JobCard;
