// Layout.js
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
