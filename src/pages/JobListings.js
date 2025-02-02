import React, { useState } from 'react';
import '../styles/JobListings.css';

const JobListings = ({ user }) => {
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const [selectedJob, setSelectedJob] = useState(null);

    const handleApply = (e) => {
        e.preventDefault();
        const resume = e.target.resume.files[0];
        if (resume) {
            const updatedJobs = jobs.map((job) => {
                if (job.title === selectedJob.title) {
                    return {
                        ...job,
                        applicants: [...job.applicants, { name: user.username, resume: resume.name }],
                    };
                }
                return job;
            });
            localStorage.setItem('jobs', JSON.stringify(updatedJobs));
            alert(`Resume "${resume.name}" uploaded successfully for ${selectedJob.title}`);
        } else {
            alert('Please upload a resume.');
        }
    };

    return (
        <div className="job-listings">
            <div className="job-list">
                <h2>Job Listings</h2>
                {jobs
                    .filter((job) => user.type === 'jobSeeker' || job.postedBy === user.username)
                    .map((job, index) => (
                        <div key={index} className="job-item" onClick={() => setSelectedJob(job)}>
                            <h3>{job.title}</h3>
                            <p><strong>Company:</strong> {job.companyName}</p>
                        </div>
                    ))}
            </div>

            <div className="job-details">
                {selectedJob ? (
                    <>
                        <h2>{selectedJob.title}</h2>
                        <p><strong>Company:</strong> {selectedJob.companyName}</p>
                        <p><strong>Job Description:</strong> {selectedJob.description}</p>
                        <p><strong>Requirements:</strong> {selectedJob.requirements}</p>
                        <p><strong>About the Company:</strong> {selectedJob.aboutCompany}</p>
                        {user.type === 'jobSeeker' ? (
                            <form onSubmit={handleApply}>
                                <input type="file" name="resume" required />
                                <button type="submit">Apply</button>
                            </form>
                        ) : (
                            <div className="applicants">
                                <h3>Applicants</h3>
                                {selectedJob.applicants.length > 0 ? (
                                    selectedJob.applicants.map((applicant, index) => (
                                        <div key={index} className="applicant">
                                            <p><strong>Name:</strong> {applicant.name}</p>
                                            <p><strong>Resume:</strong> {applicant.resume}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>No applicants yet.</p>
                                )}
                            </div>
                        )}
                    </>
                ) : (
                    <p>Select a job to view details.</p>
                )}
            </div>
        </div>
    );
};

export default JobListings;