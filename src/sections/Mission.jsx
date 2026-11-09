import React from 'react';
import { FaWater, FaBookOpen, FaMedkit } from 'react-icons/fa';

function Mission() {
  const pillars = [
    { icon: <FaWater color="#2196F3" />, title: 'Clean Water', desc: 'Constructing robust groundwater wells and treatment systems to alleviate severe regional water stress.' },
    { icon: <FaBookOpen color="#FF9800" />, title: 'Education Pathways', desc: 'Supplying foundational learning kits and modular school infrastructures to bridge critical rural literacy gaps.' },
    { icon: <FaMedkit color="#E53935" />, title: 'Healthcare Access', desc: 'Deploying essential diagnostic equipment and basic pharmacy provisions directly to emergency clinic outposts.' },
  ];

  return (
    <section id="mission" style={styles.section}>
      <h2 style={styles.heading}>Our Core Pillars</h2>
      <p style={styles.subheading}>Strategic focal points designed to build long-term societal self-reliance.</p>
      
      <div style={styles.grid}>
        {pillars.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.iconBox}>{item.icon}</div>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
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
    color: '#222222',
    marginBottom: '0.5rem',
    fontWeight: '700',
  },
  subheading: {
    color: '#666666',
    fontSize: '1.1rem',
    marginBottom: '4rem',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2.5rem',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '3rem 2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
    width: '320px',
    textAlign: 'center',
    transition: 'transform 0.2s',
  },
  iconBox: {
    fontSize: '3rem',
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: '1.4rem',
    color: '#333333',
    marginBottom: '1rem',
    fontWeight: '600',
  },
  cardDesc: {
    color: '#666666',
    lineHeight: '1.6',
    fontSize: '0.95rem',
  },
};

export default Mission;
