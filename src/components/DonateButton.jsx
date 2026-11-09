import React from 'react';
import { FaHeart } from 'react-icons/fa';

function DonateButton({ text = "Donate Now", onClick }) {
  return (
    <button style={styles.button} onClick={onClick}>
      <FaHeart style={{ marginRight: '8px' }} />
      {text}
    </button>
  );
}

const styles = {
  button: {
    backgroundColor: '#E53935',
    color: '#ffffff',
    border: 'none',
    padding: '0.8rem 2rem',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.15)',
    transition: 'background-color 0.2s ease',
  }
};

export default DonateButton;
