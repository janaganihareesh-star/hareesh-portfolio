import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Dynamic Tab Title
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Come back! 👋";
      } else {
        document.title = "Janagani Hareesh | MERN Stack Developer";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <>
      <div className="app-container">
        
        {/* Global Animated Background Blobs */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0, /* sit behind content but above white background */
          pointerEvents: 'none',
          overflow: 'hidden'
        }}>
          {/* Main Hero Blobs (Top area) - Stronger opacity */}
          <div className="animate-blob" style={{ position: 'absolute', top: '-10%', left: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(60px)' }} />
          <div className="animate-blob animation-delay-2000" style={{ position: 'absolute', top: '20%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(60px)' }} />
          <div className="animate-blob animation-delay-4000" style={{ position: 'absolute', top: '40%', left: '30%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(60px)' }} />
          
          {/* Rest of the page Blobs - Fainter accents */}
          <div className="animate-blob" style={{ position: 'absolute', top: '150vh', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(80px)' }} />
          <div className="animate-blob animation-delay-2000" style={{ position: 'absolute', top: '250vh', left: '5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(80px)' }} />
          <div className="animate-blob animation-delay-4000" style={{ position: 'absolute', top: '400vh', right: '20%', width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(80px)' }} />
        </div>

          {/* Scroll Progress Bar */}
        <motion.div className="scroll-progress" style={{ scaleX }} />

        <Navbar />
          
          <main>
            <Hero language="EN" />
            <About language="EN" />
            <Skills language="EN" />
            <Experience language="EN" />
            <Projects language="EN" />
            <Certifications language="EN" />
            <Education language="EN" />
            <Contact language="EN" />
          </main>

          <Footer />
          
          {/* Back to top button */}
          <BackToTop />
        </div>
    </>
  );
}

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      className="back-to-top"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
      onClick={scrollToTop}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </motion.button>
  );
};

export default App;
