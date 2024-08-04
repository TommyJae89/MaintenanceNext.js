// src/components/Layout.js

import React from 'react';

// Layout component for wrapping the app content
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1>Maintenance Task Tracker</h1>
      </header>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
