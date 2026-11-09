import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Navbar />
      
      <main style={{ flex: 1 }}>
        <Hero />
        <Mission />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
