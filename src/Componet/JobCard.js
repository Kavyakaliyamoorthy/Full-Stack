// src/components/JobCard.js
import React from 'react';
import './JobCard.css';  // Add your own CSS styling
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobCard;
