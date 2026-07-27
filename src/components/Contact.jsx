import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { t } from '../translations';
import { Mail, Phone, Send, MapPin, MessageSquare } from 'lucide-react';
import AdvancedBackground from './AdvancedBackground';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:janaganihareesh@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactLinks = [
    { icon: Mail, label: "janaganihareesh@gmail.com", href: "mailto:janaganihareesh@gmail.com" },
    { icon: Phone, label: "+91 9121736453", href: "tel:+919121736453" },
    { icon: FaGithub, label: "github.com/janaganihareesh-star", href: "https://github.com/janaganihareesh-star" },
    { icon: FaLinkedin, label: "linkedin.com/in/janagani-hareesh", href: "https://www.linkedin.com/in/janagani-hareesh-734947318/" },
    { icon: SiLeetcode, label: "leetcode.com/hareesh_janagani", href: "https://leetcode.com/u/hareesh_janagani/" }
  ];

  return (
    <section id="contact" className="section-padding" ref={ref} style={{ backgroundColor: 'rgba(250, 251, 252, 0.6)', borderTop: '1px solid var(--border-light)', position: 'relative' }}>
      <AdvancedBackground type="contact" />
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-title-wrapper"
        >

          <h2 className="section-title">{t.contact.title[language]}</h2>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="contact-grid">
          <style>{`
            @media (min-width: 992px) {
              .contact-grid { grid-template-columns: 1fr 1fr !important; }
            }
          `}</style>
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {contactLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a 
                  key={idx}
                  href={link.href}
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') ? "noreferrer" : undefined}
                  className="hover-target"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem',
                    backgroundColor: 'var(--bg-primary)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-color)',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(5px)'; e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ color: 'var(--accent-primary)' }}><Icon size={20} /></div>
                  <span style={{ fontSize: '1rem', fontWeight: 500 }}>{link.label}</span>
                </a>
              );
            })}
            
            <a 
              href="https://www.geeksforgeeks.org/profile/janaganit6d3"
              target="_blank"
              rel="noreferrer"
              className="hover-target"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.25rem',
                backgroundColor: 'var(--bg-primary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(5px)'; e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ color: 'var(--accent-primary)', fontWeight: 'bold', fontFamily: 'serif', fontSize: '1.25rem' }}>GfG</div>
              <span style={{ fontSize: '1rem', fontWeight: 500 }}>geeksforgeeks.org/profile/janaganit6d3</span>
            </a>
          </motion.div>
          
          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="os-window"
          >
            <div className="os-content" style={{ padding: '2.5rem' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="name" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{t.contact.nameField[language]}</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    style={{ padding: '0.875rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-tertiary)', fontSize: '1rem', fontFamily: 'var(--font-sans)', outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{t.contact.emailField[language]}</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    style={{ padding: '0.875rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-tertiary)', fontSize: '1rem', fontFamily: 'var(--font-sans)', outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="message" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{t.contact.messageField[language]}</label>
                  <textarea 
                    id="message" 
                    rows="4"
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    style={{ padding: '0.875rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-tertiary)', fontSize: '1rem', fontFamily: 'var(--font-sans)', outline: 'none', transition: 'border-color 0.2s', resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
                  />
                </div>
                
                <button 
                  type="submit"
                  className="hover-target"
                  style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', color: 'white', fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem', transition: 'transform 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <Send size={18} />
                  {t.contact.sendBtn[language]}
                </button>
                
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', color: '#10B981', fontSize: '0.875rem', fontWeight: 500, fontFamily: 'var(--font-mono)' }}
                  >
                    Email app opened — just hit send!
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
