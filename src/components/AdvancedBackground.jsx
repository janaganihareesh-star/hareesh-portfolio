import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AdvancedBackground = ({ type }) => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse tracker for CSS animations (About)
  useEffect(() => {
    if (type !== 'about') return;
    const handleMouseMove = (e) => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [type]);

  // Canvas animations for Skills, Projects, Education, Experience, About
  useEffect(() => {
    if (!['skills', 'projects', 'education', 'experience', 'about'].includes(type)) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Shared mouse state
    let mouse = { x: null, y: null, radius: 150 };

    // State for specific animations
    let particles = [];
    let drops = [];
    let columns = 0;
    let time = 0;
    let blocks = [];

    const init = () => {
      // Skills init
      if (type === 'skills') {
        particles = [];
        const numberOfParticles = (canvas.width * canvas.height) / 12000;
        for (let i = 0; i < numberOfParticles; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            density: (Math.random() * 20) + 1,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8
          });
        }
      }
      // Projects init
      if (type === 'projects') {
        columns = Math.floor(canvas.width / 20);
        drops = [];
        for (let i = 0; i < columns; i++) {
          drops[i] = Math.random() * -100;
        }
      }
      // Experience init
      if (type === 'experience') {
        blocks = [];
        for (let i = 0; i < 40; i++) {
          blocks.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 40 + 10,
            speed: Math.random() * 1.5 + 0.5,
            rotation: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.05
          });
        }
      }
      // About init (3D Globe)
      if (type === 'about') {
        particles = [];
        let numParticles = 150;
        for (let i = 0; i < numParticles; i++) {
          let phi = Math.acos(-1 + (2 * i) / numParticles);
          let theta = Math.sqrt(numParticles * Math.PI) * phi;
          particles.push({
            x: Math.cos(theta) * Math.sin(phi),
            y: Math.sin(theta) * Math.sin(phi),
            z: Math.cos(phi)
          });
        }
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    };

    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => { mouse.x = null; mouse.y = null; };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      // SKILLS: Interactive Particle Constellation
      if (type === 'skills') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
          let p = particles[i];
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
          if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;

          if (mouse.x != null && mouse.y != null) {
            let dx = mouse.x - p.x, dy = mouse.y - p.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
              let force = (mouse.radius - dist) / mouse.radius;
              p.x -= (dx / dist) * force * p.density * 0.5;
              p.y -= (dy / dist) * force * p.density * 0.5;
            }
          }

          ctx.fillStyle = 'rgba(37, 99, 235, 0.5)';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();

          for (let j = i; j < particles.length; j++) {
            let p2 = particles[j];
            let dist = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
            if (dist < 130) {
              ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 - dist / 130})`;
              ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
            }
          }
        }
      }

      // PROJECTS: Matrix Code Rain
      if (type === 'projects') {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(37, 99, 235, 0.25)';
        ctx.font = '16px monospace';
        for (let i = 0; i < drops.length; i++) {
          const text = String.fromCharCode(Math.floor(Math.random() * 33) + 33); // Random ASCII
          ctx.fillText(text, i * 20, drops[i] * 20);
          if (drops[i] * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      }

      // EDUCATION: Sine Waves
      if (type === 'education') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 2;
        for (let i = 0; i < 6; i++) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(37, 99, 235, ${0.12 - (i * 0.015)})`;
          for (let x = 0; x <= canvas.width; x += 20) {
            let y = Math.sin((x * 0.003) + time + (i * 0.5)) * 150 + (canvas.height / 2) + (i * 20);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        time += 0.015;
      }

      // EXPERIENCE: Floating Cubes
      if (type === 'experience') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        blocks.forEach(b => {
          b.y -= b.speed;
          b.rotation += b.rotSpeed;
          if (b.y < -100) b.y = canvas.height + 100;

          ctx.save();
          ctx.translate(b.x, b.y);
          ctx.rotate(b.rotation);
          ctx.fillStyle = 'rgba(37, 99, 235, 0.04)';
          ctx.strokeStyle = 'rgba(37, 99, 235, 0.15)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.rect(-b.size/2, -b.size/2, b.size, b.size);
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        });
      }

      // ABOUT: Interactive Silk Ribbons
      if (type === 'about') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        time += 0.01;

        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.moveTo(-100, canvas.height / 2);
          
          for (let x = -100; x <= canvas.width + 100; x += 15) {
             let y = Math.sin(x * 0.003 + time + i) * 50 
                   + Math.cos(x * 0.002 - time * 0.8 + i) * 30;
                   
             if (mouse.x !== null && mouse.y !== null) {
                let dx = mouse.x - x;
                let baseY = canvas.height / 2 + y + (i * 20 - 30);
                let dy = mouse.y - baseY;
                let dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 200) {
                   y += (200 - dist) * 0.2 * (dy > 0 ? -1 : 1);
                }
             }
             
             ctx.lineTo(x, canvas.height / 2 + y + (i * 20 - 30));
          }
          
          ctx.strokeStyle = i % 2 === 0 ? 'rgba(37, 99, 235, 0.04)' : 'rgba(124, 58, 237, 0.04)';
          ctx.lineWidth = 20 + i * 10;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [type]);

  const wrapperStyle = { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0 };

  // ABOUT: Interactive Silk Ribbons (Canvas)
  // (We use the Canvas rendering loop for this, so we return the canvas wrapper)
  if (type === 'about') {
    return (
      <div style={{ ...wrapperStyle, pointerEvents: 'auto' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      </div>
    );
  }

  // CERTIFICATIONS: Abstract Geometry
  if (type === 'certifications') {
    return (
      <div style={{ ...wrapperStyle, pointerEvents: 'none' }}>
        <motion.div
          animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', top: '10%', right: '-15%', width: '1000px', height: '1000px', border: '2px solid rgba(37,99,235,0.08)', borderRadius: '38%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <motion.div animate={{ rotate: -720 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }} style={{ width: '700px', height: '700px', border: '2px solid rgba(124,58,237,0.06)', borderRadius: '35%' }} />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }} transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', bottom: '5%', left: '-20%', width: '800px', height: '800px', border: '2px solid rgba(37,99,235,0.08)', borderRadius: '42%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
           <motion.div animate={{ rotate: 720 }} transition={{ duration: 90, repeat: Infinity, ease: 'linear' }} style={{ width: '500px', height: '500px', border: '2px solid rgba(124,58,237,0.06)', borderRadius: '40%' }} />
        </motion.div>
      </div>
    );
  }

  // CONTACT: Radar Sonar Pings
  if (type === 'contact') {
    return (
      <div style={{ ...wrapperStyle, pointerEvents: 'none' }}>
        {[0, 1.5, 3].map((delay, i) => (
          <motion.div
            key={i}
            animate={{ scale: [0, 2.5], opacity: [0.3, 0] }}
            transition={{ duration: 4.5, delay, repeat: Infinity, ease: 'easeOut' }}
            style={{ position: 'absolute', top: '50%', left: '50%', width: '600px', height: '600px', margin: '-300px 0 0 -300px', border: '3px solid rgba(37,99,235,0.3)', borderRadius: '50%' }}
          />
        ))}
      </div>
    );
  }

  // Canvas container for Skills, Projects, Education, Experience
  return (
    <div style={{ ...wrapperStyle, pointerEvents: 'auto' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
};

export default AdvancedBackground;
