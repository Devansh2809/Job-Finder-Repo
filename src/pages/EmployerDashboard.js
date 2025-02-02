import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const EmployerDashboard = ({ user }) => {
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    return (
        <div className="dashboard-container">
            <h1>Employer Dashboard</h1>
            <Link to="/add-job" className="btn add-job-btn">Add Job</Link>
            <div className="job-list">
                {jobs
                    .filter((job) => job.postedBy === user.username)
                    .map((job, index) => (
                        <div key={index} className="job-item">
                            <h3>{job.title}</h3>
                            <p><strong>Company:</strong> {job.companyName}</p>
                            <Link to={`/edit-job/${index}`} className="btn edit-job-btn">Edit</Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default EmployerDashboard;