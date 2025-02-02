import React from 'react';
import '../styles/Profile.css';

const JobSeekerProfile = ({ user }) => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src="https://via.placeholder.com/150" alt="Profile Pic" className="profile-pic" />
                <h1>{user.username}</h1>
                <p className="description">A passionate job seeker looking for new opportunities.</p>
            </div>

            <div className="profile-details">
                <div className="section">
                    <h2>Education & Experiences</h2>
                    <ul>
                        <li>Bachelor's in Computer Science - XYZ University (2020-2024)</li>
                        <li>Internship at ABC Corp (2023)</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Resume & Skills</h2>
                    <p>Resume: <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a></p>
                    <p>Skills: {user.skills ? user.skills.join(', ') : 'No skills added'}</p>
                </div>

                <div className="section">
                    <h2>Certifications</h2>
                    <ul>
                        <li>Certified React Developer</li>
                        <li>Google Cloud Fundamentals</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Interests</h2>
                    <p>Web Development, Machine Learning, Open Source Contributions</p>
                </div>
            </div>
        </div>
    );
};

export default JobSeekerProfile;