import React from 'react';

function Navbar({ darkMode, toggleDarkMode, onExport }) {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">🧠 DSA Master Tracker</h2>

      <div className="navbar-actions">
        <button className="utility" onClick={onExport}>
          📤 Export CSV
        </button>
        <button className="utility" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
