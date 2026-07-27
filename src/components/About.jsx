import React from 'react';
import { motion } from 'framer-motion';
import { t } from '../translations';
import { User, Coffee, MessageCircle, Heart, Smile } from 'lucide-react';
import AdvancedBackground from './AdvancedBackground';
const About = ({ language }) => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'rgba(250, 251, 252, 0.6)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', position: 'relative' }}>
      <AdvancedBackground type="about" />
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-title-wrapper"
        >

          <h2 className="section-title">{t.about.title[language]}</h2>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="about-grid">
          <style>{`
            @media (min-width: 992px) {
              .about-grid { grid-template-columns: 1fr 1fr !important; }
            }
          `}</style>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              {t.about.summary[language]}
            </p>
            
            <div style={{ marginTop: '2.5rem' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Currently Focused On
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {['AI Agents', 'Real-time Systems', 'System Design', 'Scalable Architectures'].map((tag, idx) => (
                  <div key={idx} style={{
                    padding: '0.5rem 1rem',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '999px',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', alignContent: 'start' }}
          >
            {t.about.stats.map((stat, idx) => (
              <div key={idx} style={{ 
                background: 'var(--bg-primary)', 
                padding: '2rem 1.5rem', 
                borderRadius: 'var(--radius-lg)', 
                border: '1px solid var(--border-color)', 
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }} className="hover-target" onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {stat.label[language]}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
