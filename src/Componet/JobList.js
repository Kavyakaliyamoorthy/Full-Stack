// src/components/JobList.js
import React from 'react';
import JobCard from './JobCard';
import { Link } from 'react-router-dom';

const JobList = () => {
  const jobs = [
    { title: 'Software Engineer', company: 'TechCorp', location: 'New York, NY' },
    { title: 'Frontend Developer', company: 'Webify', location: 'San Francisco, CA' },
    { title: 'Data Scientist', company: 'DataPros', location: 'Remote' },
  ];

  return (
    <section id="jobs" className="job-list">
      <h2>Find Your Next Job</h2>
      <div className="job-cards">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobList;
