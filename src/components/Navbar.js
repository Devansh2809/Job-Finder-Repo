import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ user, onLogout }) => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                JobConnect
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                {user && (
                    <>
                        <li><Link to="/job-listings">Job Listings</Link></li>
                        <li><Link to={user.type === 'jobSeeker' ? '/job-seeker-profile' : '/employer-profile'}>View Profile</Link></li>
                        <li><button onClick={onLogout}>Logout</button></li>
                    </>
                )}
                {!user && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;