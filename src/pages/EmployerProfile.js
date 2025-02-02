import React from 'react';
import '../styles/Profile.css';

const EmployerProfile = ({ user }) => {
    return (
        <div className="profile">
            <div className="profile-header">
                <img src="https://via.placeholder.com/150" alt="Company Logo" className="profile-pic" />
                <h1>{user.username}</h1>
                <p className="description">A leading tech company specializing in software solutions.</p>
            </div>

            <div className="profile-details">
                <div className="section">
                    <h2>Employees</h2>
                    <p>500+ employees worldwide</p>
                </div>

                <div className="section">
                    <h2>Locations</h2>
                    <ul>
                        <li>Headquarters: San Francisco, USA</li>
                        <li>Offices: New York, London, Bangalore</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Job Listings</h2>
                    <p>Check out our latest job openings <a href="/job-listings">here</a>.</p>
                </div>
            </div>
        </div>
    );
};

export default EmployerProfile;