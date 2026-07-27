import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { t } from '../translations';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const language = 'EN';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: t.nav.about[language] },
    { id: 'skills', label: t.nav.skills[language] },
    { id: 'experience', label: t.nav.experience[language] },
    { id: 'projects', label: t.nav.projects[language] },
    { id: 'education', label: t.nav.education[language] },
    { id: 'contact', label: t.nav.contact[language] }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      transition: 'all 0.3s',
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: 'var(--font-display)',
            fontWeight: 'bold',
            fontSize: '1.25rem'
          }}>
            JH
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)' }}>
            janagani.hareesh
          </span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <style>{`
            @media (min-width: 992px) {
              .desktop-nav { display: flex !important; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`}
                style={{
                  position: 'relative',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: activeSection === link.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  transition: 'color 0.2s'
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="underline"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'var(--accent-primary)',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a 
              href="#contact"
              style={{
                padding: '0.5rem 1.25rem',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                color: 'white',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                fontWeight: 600,
                boxShadow: 'var(--shadow-md)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              className="hover-target"
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
            >
              {t.nav.hire[language]}
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: 'var(--text-primary)' }}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: 'var(--bg-primary)',
              borderBottom: '1px solid var(--border-color)',
              padding: '1rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: activeSection === link.id ? 'var(--accent-primary)' : 'var(--text-secondary)'
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
