import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('jobSeeker');
    const [skills, setSkills] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { username, type, skills: skills.split(',') };
        localStorage.setItem('user', JSON.stringify(userData));

        // Store candidate details if job seeker
        if (type === 'jobSeeker') {
            const candidates = JSON.parse(localStorage.getItem('candidates')) || [];
            candidates.push(userData);
            localStorage.setItem('candidates', JSON.stringify(candidates));
        }

        onLogin(userData);
        navigate(type === 'jobSeeker' ? '/job-seeker-profile' : '/employer-dashboard');
    };

    return (
        <div className="signup">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="jobSeeker">Job Seeker</option>
                    <option value="employer">Employer</option>
                </select>
                <input
                    type="text"
                    placeholder="Skills (comma separated)"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;