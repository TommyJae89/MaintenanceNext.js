import React from 'react';


const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Maintenance Task Tracker</h1>
      <button className={styles.darkModeToggle} onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
