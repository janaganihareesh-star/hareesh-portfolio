import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { t } from '../translations';
import { Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaJava, FaNodeJs } from 'react-icons/fa';
import { SiLeetcode, SiJavascript, SiReact, SiExpress, SiMongodb } from 'react-icons/si';

const Hero = ({ language }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Orbiting icons configuration
  const orbitRadius = 160; // Base radius, scales with container
  const icons = [
    { Icon: FaJava, color: "#f89820", name: "Java" },
    { Icon: SiReact, color: "#61dafb", name: "React" },
    { Icon: FaNodeJs, color: "#339933", name: "Node.js" },
    { Icon: SiExpress, color: "#000000", name: "Express" },
    { Icon: SiMongodb, color: "#47a248", name: "MongoDB" },
    { Icon: SiJavascript, color: "#f7df1e", name: "JavaScript" }
  ];

  // Motion variants
  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: { repeat: Infinity, duration: 25, ease: "linear" }
    },
    reduced: { rotate: 0 }
  };

  const counterOrbitVariants = {
    animate: {
      rotate: -360,
      transition: { repeat: Infinity, duration: 25, ease: "linear" }
    },
    reduced: { rotate: 0 }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.03, 1],
      opacity: [0.6, 0.9, 0.6],
      transition: { repeat: Infinity, duration: 4.5, ease: "easeInOut" }
    },
    reduced: { scale: 1, opacity: 0.8 }
  };

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Mesh Gradient Background moved to App.jsx */}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
          <style>{`
            @media (min-width: 992px) {
              .hero-grid { grid-template-columns: 1.2fr 1fr !important; }
            }
            .hero-graphic-container {
              position: relative;
              width: 100%;
              max-width: 440px;
              aspect-ratio: 1/1;
              margin: 0 auto;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            @media (max-width: 768px) {
              .hero-graphic-container {
                max-width: 320px;
                margin-top: 2rem;
              }
            }
          `}</style>
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '999px', color: '#059669', fontSize: '0.875rem', fontWeight: 500, marginBottom: '2rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
              {t.hero.status[language]}
            </div>
            
            <h1 style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)', whiteSpace: 'nowrap', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Janagani <span className="text-gradient">Hareesh</span>
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
              {t.hero.role[language]}
            </p>
            
            <p style={{ fontSize: '1.125rem', color: 'var(--text-tertiary)', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
              {t.about.summary[language]}
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <a href="#projects" style={{ padding: '0.875rem 1.5rem', background: 'var(--text-primary)', color: 'white', borderRadius: 'var(--radius-md)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'transform 0.2s', boxShadow: 'var(--shadow-md)' }} className="hover-target" onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                {t.hero.viewProjects[language]}
              </a>
              <a href="/resume.pdf" download style={{ padding: '0.875rem 1.5rem', background: 'white', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'transform 0.2s', boxShadow: 'var(--shadow-sm)' }} className="hover-target" onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <Download size={18} />
                {t.hero.downloadResume[language]}
              </a>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a href="https://github.com/janaganihareesh-star" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', transition: 'transform 0.2s', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} className="hover-target">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/janagani-hareesh-734947318/" target="_blank" rel="noreferrer" style={{ color: '#0A66C2', transition: 'transform 0.2s', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} className="hover-target">
                <FaLinkedin size={24} />
              </a>
              <a href="https://leetcode.com/u/hareesh_janagani/" target="_blank" rel="noreferrer" style={{ color: '#FFA116', transition: 'transform 0.2s', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} className="hover-target">
                <SiLeetcode size={24} />
              </a>
              <a href="https://www.geeksforgeeks.org/profile/janaganit6d3" target="_blank" rel="noreferrer" style={{ color: '#2F8D46', transition: 'transform 0.2s', fontWeight: 'bold', fontSize: '1.25rem', fontFamily: 'serif', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} className="hover-target">
                GfG
              </a>
            </div>
          </motion.div>
          
          {/* Right Content - Circular "Java & Web" Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hero-graphic-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* 1. Pulsing Glow Background */}
            <motion.div
              animate={shouldReduceMotion ? "reduced" : "animate"}
              variants={pulseVariants}
              style={{
                position: 'absolute',
                top: '5%', left: '5%', right: '5%', bottom: '5%',
                background: 'linear-gradient(135deg, rgba(37,99,235,0.4), rgba(124,58,237,0.4))',
                borderRadius: '50%',
                filter: isHovered ? 'blur(50px)' : 'blur(40px)',
                transition: 'filter 0.3s ease-in-out',
                zIndex: 0
              }}
            />

            {/* 2. Core Circle Badge */}
            <div style={{
              position: 'relative',
              width: '65%', // roughly 260px inside the 400px container
              aspectRatio: '1/1',
              background: 'var(--bg-primary)',
              borderRadius: '50%',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08), inset 0 0 20px rgba(37,99,235,0.05)',
              backdropFilter: 'blur(10px)'
            }}>
              {/* Subtle inner gradient ring */}
              <div style={{
                position: 'absolute',
                inset: '-2px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                zIndex: -1,
                opacity: 0.15
              }} />
              
              <div style={{ 
                fontFamily: 'var(--font-display)', 
                fontWeight: 700, 
                textAlign: 'center',
                lineHeight: 1.1
              }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                  Java
                </div>
                <div style={{ fontSize: '2rem' }} className="text-gradient">
                  & Web
                </div>
              </div>
            </div>

            {/* 3. Orbiting Tech Icons */}
            <motion.div
              animate={shouldReduceMotion ? "reduced" : "animate"}
              variants={orbitVariants}
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                zIndex: 2,
                pointerEvents: 'none' // allow hovering the center circle easily
              }}
            >
              {icons.map((item, idx) => {
                const angle = (idx / icons.length) * Math.PI * 2;
                // Calculate percentage positions for responsive scaling
                const left = 50 + Math.cos(angle) * 45; // 45% radius from center
                const top = 50 + Math.sin(angle) * 45;

                return (
                  <motion.div
                    key={idx}
                    style={{
                      position: 'absolute',
                      left: `${left}%`,
                      top: `${top}%`,
                      x: '-50%',
                      y: '-50%',
                      pointerEvents: 'auto' // re-enable hover on icons
                    }}
                  >
                    <motion.div
                      animate={shouldReduceMotion ? "reduced" : "animate"}
                      variants={counterOrbitVariants}
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'var(--bg-primary)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                        border: '1px solid var(--border-color)',
                        fontSize: '1.5rem',
                        color: item.color
                      }}
                      title={item.name}
                    >
                      <item.Icon />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
