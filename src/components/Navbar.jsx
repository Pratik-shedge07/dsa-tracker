import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <h1>📘 DSA Master Tracker</h1>
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add</Link>
        <Link to="/questions">Questions</Link>
        <Link to="/export">Export</Link>
        <button onClick={toggleDarkMode}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
