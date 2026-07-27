import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { t } from '../translations';
import { ExternalLink, Folder, Code, Rocket, AppWindow, Cpu } from 'lucide-react';
import AdvancedBackground from './AdvancedBackground';

const projectData = [
  {
    title: "CloserAI | Universal Intelligence OS",
    url: "companion-ai-khaki.vercel.app",
    liveUrl: "https://companion-ai-khaki.vercel.app/",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Gemini/Groq API", "Pinecone", "Puppeteer"],
    desc: "Architected an autonomous operating system with swarm-based multi-agent orchestration (Architect, Coder, Researcher personas) and long-term memory using Pinecone vector search. Built real-time streaming chat and autonomous browser agents (Puppeteer) capable of surfing the web and writing/executing code, plus multi-modal features like live vision, voice (Edge-TTS), and OS-level command execution."
  },
  {
    title: "LinguaSphere | Multilingual Communication Platform",
    url: "lingua-sphere-hhs1.vercel.app",
    liveUrl: "https://lingua-sphere-hhs1.vercel.app/",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Vercel", "Render"],
    desc: "Built a multilingual platform enabling real-time interaction across 10+ languages for 500+ users with sub-200ms translation response time. Optimized MongoDB queries with indexing, improving API response time by 45%; deployed on Vercel (frontend) and Render (backend)."
  },
  {
    title: "TeluguChat | Real-Time Moderated Chat Platform",
    url: "teluguchat-cyan.vercel.app",
    liveUrl: "https://teluguchat-cyan.vercel.app/",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Postman", "Render"],
    desc: "Developed a real-time Telugu chat app supporting public & private messaging for 200+ concurrent users using Socket.io bidirectional communication. Integrated a content moderation pipeline, reducing inappropriate message throughput by 90%."
  }
];

const Projects = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref} style={{ backgroundColor: 'transparent', position: 'relative' }}>
      <AdvancedBackground type="projects" />
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-title-wrapper"
        >

          <h2 className="section-title">{t.projects.title[language]}</h2>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
          {projectData.map((project, idx) => (
            <motion.a 
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.15 * idx, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="hover-target"
              style={{ 
                display: 'block', 
                position: 'relative',
                textDecoration: 'none', 
                color: 'inherit',
                background: 'linear-gradient(145deg, #ffffff 0%, #fcfcfd 100%)',
                border: '1px solid rgba(0,0,0,0.04)',
                borderRadius: '32px',
                padding: '3rem',
                overflow: 'hidden',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)'; 
                e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(37, 99, 235, 0.15)'; 
                e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.1)';
                const arrow = e.currentTarget.querySelector('.project-arrow');
                if(arrow) arrow.style.transform = 'translate(4px, -4px)';
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.transform = 'translateY(0) scale(1)'; 
                e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.05)'; 
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.04)';
                const arrow = e.currentTarget.querySelector('.project-arrow');
                if(arrow) arrow.style.transform = 'translate(0, 0)';
              }}
            >
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                    {project.title}
                  </h3>
                  <div 
                    className="project-arrow"
                    style={{ 
                      width: '50px', height: '50px', 
                      borderRadius: '50%', 
                      background: 'white', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
                      transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      color: 'var(--text-primary)',
                      flexShrink: 0
                    }}
                  >
                    <ExternalLink size={20} strokeWidth={2.5} />
                  </div>
                </div>

                <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '90%' }}>
                  {project.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} style={{ 
                      padding: '0.5rem 1rem', 
                      backgroundColor: 'white', 
                      border: '1px solid rgba(0,0,0,0.06)', 
                      borderRadius: '12px', 
                      fontSize: '0.85rem', 
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
