import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { t } from '../translations';
import { GraduationCap, Book, Pencil, Library, Award } from 'lucide-react';
import AdvancedBackground from './AdvancedBackground';

const Education = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref} style={{ backgroundColor: 'transparent', position: 'relative' }}>
      <AdvancedBackground type="education" />
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-title-wrapper"
        >

          <h2 className="section-title">{t.education.title[language]}</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="os-window hover-target"
          style={{ maxWidth: '800px', transition: 'transform 0.3s, box-shadow 0.3s' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-xl)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
        >
          <div className="os-content" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '2.5rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, boxShadow: 'var(--shadow-md)' }}>
              <GraduationCap size={30} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {t.education.degree[language]}
              </h3>
              <div style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                {t.education.university[language]}
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', padding: '0.25rem 0.75rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                  {t.education.date[language]}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', padding: '0.25rem 0.75rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(16, 185, 129, 0.2)', color: '#059669', fontWeight: 600 }}>
                  CGPA: 8.1/10.0
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
