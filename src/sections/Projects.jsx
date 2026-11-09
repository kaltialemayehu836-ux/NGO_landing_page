import React from 'react';
import { FaCheckCircle, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

function Projects() {
  const projectsList = [
    { title: 'Eastern Province Deep-Well Infrastructure', status: 'In Progress', location: 'Wollo Basin', icon: <FaClock color="#FF9800" /> },
    { title: 'Primary Academy Classroom Construction', status: 'Completed', location: 'Hawassa Suburbs', icon: <FaCheckCircle color="#4CAF50" /> },
    { title: 'Mobile Outpost Immunization Distribution', status: 'Completed', location: 'Southern Valleys', icon: <FaCheckCircle color="#4CAF50" /> },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Active & Completed Impact Projects</h2>
      <p style={styles.subheading}>Transparent updates on field initiatives executed worldwide.</p>
      
      <div style={styles.container}>
        {projectsList.map((proj, index) => (
          <div key={index} style={styles.row}>
            <div>
              <h3 style={styles.projTitle}>{proj.title}</h3>
              <p style={styles.projLoc}>
                <FaMapMarkerAlt style={{ marginRight: '6px', color: '#888' }} />
                {proj.location}
              </p>
            </div>
            <span style={{
              ...styles.badge, 
              backgroundColor: proj.status === 'Completed' ? '#E8F5E9' : '#FFF3E0',
              color: proj.status === 'Completed' ? '#2E7D32' : '#E65100'
            }}>
              {proj.icon} <span style={{ marginLeft: '6px' }}>{proj.status}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '6rem 2rem',
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: '2.4rem',
    textAlign: 'center',
    marginBottom: '0.5rem',
    color: '#222222',
    fontWeight: '700',
  },
  subheading: {
    textAlign: 'center',
    color: '#666666',
    marginBottom: '4rem',
    fontSize: '1.1rem',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.8rem',
    border: '1px solid #ECEFF1',
    backgroundColor: '#FAFCFD',
    marginBottom: '1.25rem',
    borderRadius: '8px',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  projTitle: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.3rem',
    color: '#333333',
  },
  projLoc: {
    margin: 0,
    color: '#666666',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
  },
  badge: {
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    display: 'inline-flex',
    alignItems: 'center',
  },
};

export default Projects;
