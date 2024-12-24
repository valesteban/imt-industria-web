// Navbar.js
import React, { useState } from 'react';
import './MiNavbar.css';

function MiNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="https://www.oracle.com" className="navbar-logo">
          <img src="https://www.oracle.com/etc/designs/oracle-cloud/images/oracle-logo.svg" alt="Oracle Logo" />
        </a>
        {/* <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button> */}
        <ul className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
          <li><a href="https://www.oracle.com/cloud/" target="_blank" rel="noopener noreferrer">Cloud</a></li>
          <li><a href="https://www.oracle.com/applications/" target="_blank" rel="noopener noreferrer">Applications</a></li>
          <li><a href="https://www.oracle.com/infrastructure/" target="_blank" rel="noopener noreferrer">Infrastructure</a></li>
          <li><a href="https://www.oracle.com/database/" target="_blank" rel="noopener noreferrer">Database</a></li>
          <li><a href="https://www.oracle.com/industries/" target="_blank" rel="noopener noreferrer">Industries</a></li>
          <li><a href="https://www.oracle.com/customers/" target="_blank" rel="noopener noreferrer">Customers</a></li>
          <li><a href="https://www.oracle.com/events/" target="_blank" rel="noopener noreferrer">Events</a></li>
          <li><a href="https://www.oracle.com/support/" target="_blank" rel="noopener noreferrer">Support</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default MiNavbar;
