import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-primary)', padding: '3rem 0', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="https://github.com/janaganihareesh-star" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', transition: 'transform 0.2s', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} className="hover-target">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/janagani-hareesh-734947318/" target="_blank" rel="noreferrer" style={{ color: '#0A66C2', transition: 'transform 0.2s', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} className="hover-target">
            <FaLinkedin size={20} />
          </a>
          <a href="https://leetcode.com/u/hareesh_janagani/" target="_blank" rel="noreferrer" style={{ color: '#FFA116', transition: 'transform 0.2s', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} className="hover-target">
            <SiLeetcode size={20} />
          </a>
          <a href="https://www.geeksforgeeks.org/profile/janaganit6d3" target="_blank" rel="noreferrer" style={{ color: '#2F8D46', transition: 'transform 0.2s', fontWeight: 'bold', fontSize: '1rem', fontFamily: 'serif', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} className="hover-target">
            GfG
          </a>
        </div>
        
        <div style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', fontFamily: 'var(--font-mono)' }}>
          © {new Date().getFullYear()} Janagani Hareesh. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
