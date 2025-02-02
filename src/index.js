import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this line
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root using createRoot
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
