import React from 'react';
import DonateButton from '../components/DonateButton';

function Hero() {
  const triggerDonation = () => {
    alert('Thank you! Redirecting to secure payment portal...');
  };

  return (
    <section id="home" style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>Bringing Hope and Sustainable Change</h1>
        <p style={styles.subtitle}>
          We deploy clean water initiatives, local education assistance, and accessible medical services directly into developing global sectors.
        </p>
        <DonateButton text="Support Our Mission" onClick={triggerDonation} />
      </div>
    </section>
  );
}

const styles = {
  hero: {
    backgroundColor: '#1B5E20',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("https://unsplash.com")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#ffffff',
    padding: '10rem 2rem',
    textAlign: 'center',
  },
  content: {
    maxWidth: '850px',
    margin: '0 auto',
  },
  title: {
    fontSize: '3.5rem',
    marginBottom: '1.5rem',
    fontWeight: '800',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: '1.3rem',
    marginBottom: '2.5rem',
    lineHeight: '1.7',
    color: '#E0E0E0',
  },
};

export default Hero;
