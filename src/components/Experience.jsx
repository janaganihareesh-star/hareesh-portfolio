import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { t } from '../translations';
import { Briefcase, Building, TrendingUp, Calendar, Target } from 'lucide-react';
import AdvancedBackground from './AdvancedBackground';
const Experience = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref} style={{ backgroundColor: 'rgba(250, 251, 252, 0.6)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', position: 'relative' }}>
      <AdvancedBackground type="experience" />
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-title-wrapper"
        >

          <h2 className="section-title">{t.experience.title[language]}</h2>
        </motion.div>
        
        <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--border-color)', maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ position: 'relative', paddingBottom: '2rem' }}
          >
            {/* Timeline Dot */}
            <div style={{ position: 'absolute', left: '-2.5rem', top: '0.25rem', width: '1rem', height: '1rem', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', border: '4px solid var(--accent-primary)', boxShadow: '0 0 0 4px var(--bg-secondary)' }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{t.experience.role[language]}</h3>
              <div style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{t.experience.company[language]}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--accent-primary)', padding: '0.25rem 0.75rem', background: 'rgba(37, 99, 235, 0.1)', borderRadius: 'var(--radius-sm)', display: 'inline-flex', width: 'fit-content' }}>
                {t.experience.date[language]}
              </div>
            </div>
            
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {t.experience.bullets.map((bullet, idx) => (
                <li key={idx} style={{ color: 'var(--text-secondary)', lineHeight: 1.6, position: 'relative' }}>
                  {bullet[language]}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
