// src/components/Header.js

import React from 'react';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="app-header">
      <h1>Maintenance Task Tracker</h1>
      <button className="toggle-button" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
