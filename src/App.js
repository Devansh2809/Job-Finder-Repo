import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import JobSeekerProfile from './pages/JobSeekerProfile';
import EmployerProfile from './pages/EmployerProfile';
import JobListings from './pages/JobListings';
import EmployerDashboard from './pages/EmployerDashboard';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';
import './styles/App.css';

function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const handleLogin = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <Router>
            <Navbar user={user} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={user ? <Navigate to={user.type === 'jobSeeker' ? '/job-seeker-profile' : '/employer-dashboard'} /> : <Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
                <Route path="/job-seeker-profile" element={user?.type === 'jobSeeker' ? <JobSeekerProfile user={user} /> : <Navigate to="/login" />} />
                <Route path="/employer-profile" element={user?.type === 'employer' ? <EmployerProfile user={user} /> : <Navigate to="/login" />} />
                <Route
                    path="/job-listings"
                    element={user ? <JobListings user={user} /> : <Navigate to="/login" />}
                />
                <Route
                    path="/employer-dashboard"
                    element={user?.type === 'employer' ? <EmployerDashboard user={user} /> : <Navigate to="/login" />}
                />
                <Route path="/add-job" element={user?.type === 'employer' ? <AddJob user={user} /> : <Navigate to="/login" />} />
                <Route path="/edit-job/:id" element={user?.type === 'employer' ? <EditJob user={user} /> : <Navigate to="/login" />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;