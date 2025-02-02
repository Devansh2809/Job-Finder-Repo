import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'garib' && password === '123') {
            onLogin({ username, type: 'jobSeeker' });
            navigate('/job-seeker-profile');
        } else if (username === 'ameer' && password === '123') {
            onLogin({ username, type: 'employer' });
            navigate('/employer-dashboard');
        } else if (username === 'rich' && password === '1234') {
            onLogin({ username, type: 'employer' });
            navigate('/employer-dashboard');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Login</h1>
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
                    <button type="submit">Login</button>
                    {error && <p className="error">{error}</p>}
                </form>
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
        </div>
    );
};

export default Login;