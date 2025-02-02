import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/AddEditJob.css';

const EditJob = ({ user }) => {
    const { id } = useParams();
    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [aboutCompany, setAboutCompany] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
        const job = jobs[id];
        if (job) {
            setJobTitle(job.title);
            setCompanyName(job.companyName);
            setJobDescription(job.description);
            setRequirements(job.requirements);
            setAboutCompany(job.aboutCompany);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedJob = {
            title: jobTitle,
            companyName,
            description: jobDescription,
            requirements,
            aboutCompany,
            postedBy: user.username,
        };

        const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
        const updatedJobs = jobs.map((job, index) => (index === parseInt(id) ? updatedJob : job));
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
        navigate('/employer-dashboard');
    };

    return (
        <div className="add-edit-job">
            <h1>Edit Job</h1>
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
                <button type="submit">Update Job</button>
            </form>
        </div>
    );
};

export default EditJob;