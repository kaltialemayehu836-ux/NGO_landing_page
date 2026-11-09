import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const dispatchMessage = (e) => {
    e.preventDefault();
    alert('Inquiry successfully recorded. An agent will follow up within 48 business hours.');
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Get In Touch</h2>
      <p style={styles.subheading}>Reach out for corporate partnerships, volunteering inquiries, or general field details.</p>
      
      <form onSubmit={dispatchMessage} style={styles.form}>
        <input type="text" placeholder="Full Name" required style={styles.input} />
        <input type="email" placeholder="Email Address" required style={styles.input} />
        <textarea placeholder="Write your message details here..." rows="5" required style={styles.input}></textarea>
        <button type="submit" style={styles.btn}>
          <FaPaperPlane style={{ marginRight: '8px' }} /> Send Message
        </button>
      </form>
    </section>
  );
}

const styles = {
  section: {
    padding: '6rem 2rem',
    backgroundColor: '#F7F9FA',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.4rem',
    marginBottom: '0.5rem',
    fontWeight: '700',
    color: '#222222',
  },
  subheading: {
    color: '#666666',
    marginBottom: '3.5rem',
    fontSize: '1.1rem',
  },
  form: {
    maxWidth: '550px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  input: {
    padding: '0.9rem 1.2rem',
    borderRadius: '6px',
    border: '1px solid #CFD8DC',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    backgroundColor: '#ffffff',
  },
  btn: {
    backgroundColor: '#2E7D32',
    color: '#ffffff',
    border: 'none',
    padding: '1rem',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(46, 125, 50, 0.2)',
  },
};

export default Contact;
