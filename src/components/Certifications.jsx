import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { t } from '../translations';
import { Award, Star, TrendingUp, Zap, BookOpen, Medal, ShieldCheck } from 'lucide-react';
import AdvancedBackground from './AdvancedBackground';

const achievementsData = [
  { text: "Special Appreciation Award – AI X Anantapur Police Hackathon 2K26: AI-based solution recognized by law enforcement for innovation.", icon: Star },
  { text: "Consistently solved DSA problems on LeetCode and GeeksforGeeks.", icon: TrendingUp },
  { text: "AICTE-certified ServiceNow intern with hands-on Agile practices, ATF testing, and enterprise platform administration experience.", icon: Award },
  { text: "Quick learner — independently explored new technologies and DevOps deployment practices.", icon: Zap }
];

const Certifications = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding" ref={ref} style={{ backgroundColor: 'rgba(250, 251, 252, 0.6)', borderTop: '1px solid var(--border-light)', position: 'relative' }}>
      <AdvancedBackground type="certifications" />
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-title-wrapper"
        >

          <h2 className="section-title">{t.certifications.title[language]}</h2>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="cert-grid">
          <style>{`
            @media (min-width: 992px) {
              .cert-grid { grid-template-columns: 1fr 1fr !important; }
            }
          `}</style>
          
          {/* Certification Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="os-window"
          >
            <div className="os-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', flexShrink: 0 }}>
                  <Award size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>ServiceNow Virtual Internship Program</h3>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>SmartBridge & AICTE (Ministry of Education)</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)', padding: '0.75rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)' }}>
                <span>ID: SNU2024814</span>
                <span>May 29, 2026</span>
              </div>
              
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Modules Completed:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {["Admin Fundamentals", "Introduction to Flows", "Reports", "CSA Exam Prep", "Micro Certification"].map((mod, i) => (
                    <span key={i} style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)' }}>
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <a href="/certificate.pdf" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem', background: 'var(--accent-primary)', color: 'white', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', transition: 'opacity 0.2s', boxShadow: '0 4px 6px rgba(37, 99, 235, 0.2)' }} onMouseEnter={e => e.currentTarget.style.opacity = '0.9'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                  <BookOpen size={16} />
                  View Certificate
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Achievements List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {achievementsData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} style={{ display: 'flex', gap: '1.25rem', background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }}>
                    <Icon size={20} />
                  </div>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                    {item.text}
                  </p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
