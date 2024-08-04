import React from 'react';

const ToggleButton = ({ toggleTheme, isDarkMode }) => {
  return (
    <button className="toggle-button" onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ToggleButton;
