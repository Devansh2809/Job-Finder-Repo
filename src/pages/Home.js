import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to JobConnect</h1>
            <p>Empowering underprivileged individuals with job opportunities, mentorship, and skill development.</p>
            <div className="cta-buttons">
                <Link to="/login" className="btn login-btn">Login</Link>
                <Link to="/signup" className="btn signup-btn">Signup</Link>
            </div>
        </div>
    );
};

export default Home;