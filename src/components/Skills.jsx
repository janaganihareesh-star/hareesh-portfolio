import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { t } from '../translations';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaNpm } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiSocketdotio, SiMongodb, SiMysql, SiPostman, SiVercel, SiRender, SiJest, SiReact } from 'react-icons/si';
import { Database, Network, Box, LayoutTemplate, Cpu, MonitorPlay, Code2 } from 'lucide-react';
import AdvancedBackground from './AdvancedBackground';

const skillGroups = [
  { 
    name: "Languages", 
    items: [
      { name: "Java", Icon: FaJava, color: "#f89820" }, 
      { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" }
    ] 
  },
  { 
    name: "Frontend", 
    items: [
      { name: "React.js", Icon: SiReact, color: "#61dafb" }, 
      { name: "HTML5", Icon: FaHtml5, color: "#e34f26" }, 
      { name: "CSS3", Icon: FaCss3Alt, color: "#1572b6" }, 
      { name: "Web Design", Icon: MonitorPlay, color: "#2563EB" }
    ] 
  },
  { 
    name: "Backend", 
    items: [
      { name: "Node.js", Icon: FaNodeJs, color: "#339933" }, 
      { name: "Express.js", Icon: SiExpress, color: "#000000" }, 
      { name: "Socket.io", Icon: SiSocketdotio, color: "#010101" }
    ] 
  },
  { 
    name: "Databases", 
    items: [
      { name: "MongoDB", Icon: SiMongodb, color: "#47a248" }, 
      { name: "SQL", Icon: Database, color: "#00758F" }, 
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" }
    ] 
  },
  { 
    name: "Testing & Tools", 
    items: [
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" }, 
      { name: "Git", Icon: FaGitAlt, color: "#F05032" }, 
      { name: "GitHub", Icon: FaGithub, color: "#181717" }, 
      { name: "VS Code", Icon: Code2, color: "#007ACC" }, 
      { name: "npm", Icon: FaNpm, color: "#CB3837" }
    ] 
  },
  { 
    name: "Concepts", 
    items: [
      { name: "DSA", Icon: Box, color: "#7C3AED" }, 
      { name: "OOP", Icon: Cpu, color: "#7C3AED" }, 
      { name: "DBMS", Icon: Database, color: "#7C3AED" }, 
      { name: "OS", Icon: LayoutTemplate, color: "#7C3AED" }, 
      { name: "Computer Networks", Icon: Network, color: "#7C3AED" }, 
      { name: "MVC Architecture", Icon: LayoutTemplate, color: "#7C3AED" }
    ] 
  },
  { 
    name: "Deployment", 
    items: [
      { name: "Vercel", Icon: SiVercel, color: "#000000" }, 
      { name: "Render", Icon: SiRender, color: "#46E3B7" }
    ] 
  }
];

const SkillChip = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { Icon, name, color } = skill;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        backgroundColor: 'var(--bg-primary)',
        border: '1px solid',
        borderColor: isHovered ? color : 'var(--border-color)',
        borderRadius: '999px',
        boxShadow: isHovered ? `0 4px 12px ${color}33` : 'var(--shadow-sm)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
        cursor: 'default'
      }}
    >
      <Icon style={{ color: color, fontSize: '1.25rem', transition: 'color 0.3s' }} />
      <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>{name}</span>
    </motion.div>
  );
};

const Skills = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref} style={{ backgroundColor: 'transparent', position: 'relative' }}>
      <AdvancedBackground type="skills" />
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-title-wrapper"
        >

          <h2 className="section-title">{t.skills.title[language]}</h2>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {skillGroups.map((group, gIdx) => (
            <motion.div 
              key={gIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: gIdx * 0.1 }}
              className="os-window"
              style={{ backgroundColor: 'rgba(250, 251, 252, 0.6)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', backdropFilter: 'blur(10px)' }}
            >
              <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-tertiary)', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                {`[${group.name.toUpperCase()}]`}
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {group.items.map((skill, sIdx) => (
                  <SkillChip key={sIdx} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
