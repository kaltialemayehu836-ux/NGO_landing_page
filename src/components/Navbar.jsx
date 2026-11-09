import React from 'react';
import { FaGlobe, FaHeart } from 'react-icons/fa';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <FaGlobe style={{ marginRight: '10px', color: '#2E7D32' }} />
        HopeHorizon NGO
      </div>
      <ul style={styles.navLinks}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#mission" style={styles.link}>Our Mission</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
      <button style={styles.donateBtn}>
        <FaHeart style={{ marginRight: '6px' }} /> Donate
      </button>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 3rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#333333',
    display: 'flex',
    alignItems: 'center',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '2.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#555555',
    fontWeight: '500',
    transition: 'color 0.2s',
  },
  donateBtn: {
    backgroundColor: '#E53935',
    color: '#ffffff',
    border: 'none',
    padding: '0.6rem 1.4rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  }
};

export default Navbar;
