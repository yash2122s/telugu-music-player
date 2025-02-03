import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '1rem',
      color: 'white'
    }}>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '2rem',
        margin: 0
      }}>
        <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
        <li><Link to="/songs" style={{ color: 'white' }}>Songs</Link></li>
        <li><Link to="/upload" style={{ color: 'white' }}>Upload</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 