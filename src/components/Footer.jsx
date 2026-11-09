import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.infoBlock}>
          <h3 style={styles.title}>HopeHorizon</h3>
          <p style={styles.text}>Empowering communities, transforming lives, and securing sustainable futures for generations to come.</p>
        </div>
        <div style={styles.contactBlock}>
          <h4 style={styles.subTitle}>Contact Us</h4>
          <p style={styles.contactItem}><FaEnvelope style={styles.icon} /> info@hopehorizon.org</p>
          <p style={styles.contactItem}><FaPhoneAlt style={styles.icon} /> +1 (555) 019-2834</p>
          <p style={styles.contactItem}><FaMapMarkerAlt style={styles.icon} /> 123 Care Street, Global City</p>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} HopeHorizon NGO. Made with <FaHeart style={{ color: '#E53935', fontSize: '0.85rem' }} /> for a better world.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1A1A1A',
    color: '#FFFFFF',
    padding: '3rem 2rem 1.5rem 2rem',
    marginTop: 'auto',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '2rem',
  },
  infoBlock: {
    flex: '1',
    minWidth: '280px',
  },
  contactBlock: {
    flex: '1',
    minWidth: '280px',
  },
  title: {
    fontSize: '1.6rem',
    color: '#4CAF50',
    marginBottom: '1rem',
  },
  subTitle: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    borderBottom: '2px solid #333',
    paddingBottom: '0.5rem',
  },
  text: {
    color: '#B3B3B3',
    lineHeight: '1.6',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    color: '#B3B3B3',
    marginBottom: '0.75rem',
  },
  icon: {
    marginRight: '10px',
    color: '#4CAF50',
  },
  bottomBar: {
    textAlign: 'center',
    borderTop: '1px solid #333',
    marginTop: '2.5rem',
    paddingTop: '1.5rem',
    fontSize: '0.9rem',
    color: '#888888',
  }
};

export default Footer;
