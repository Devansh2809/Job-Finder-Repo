import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddEditJob.css';

const AddJob = ({ user }) => {
    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [aboutCompany, setAboutCompany] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newJob = {
            title: jobTitle,
            companyName,
            description: jobDescription,
            requirements,
            aboutCompany,
            postedBy: user.username,
            applicants: [], // Store applicants here
        };

        const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
        const updatedJobs = [...jobs, newJob];
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
        navigate('/employer-dashboard');
    };

    return (
        <div className="add-edit-job">
            <h1>Add Job</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Job Title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Job Description"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Requirements"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    required
                />
                <textarea
                    placeholder="About the Company"
                    value={aboutCompany}
                    onChange={(e) => setAboutCompany(e.target.value)}
                    required
                />
                <button type="submit">Add Job</button>
            </form>
        </div>
    );
};

export default AddJob;