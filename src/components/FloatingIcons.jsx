import React from 'react';
import { motion } from 'framer-motion';

const FloatingIcons = ({ icons }) => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
      {icons.map((item, i) => {
        const Icon = item.icon;
        const isLeft = i % 2 === 0;
        // Distribute vertically and horizontally
        const topPos = 10 + (i * (80 / icons.length)); // evenly distribute from 10% to 90%
        
        // Use a pseudo-random value based on index so it doesn't jump on re-renders
        const pseudoRandom = ((i * 37) % 10);
        const horizPos = 2 + pseudoRandom; // 2% to 12% from the edge

        return (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 20, -20, 0]
            }}
            transition={{
              duration: 8 + (i * 1.5),
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: `${topPos}%`,
              [isLeft ? 'left' : 'right']: `${horizPos}%`,
              opacity: 0.04, // Very faint so it's a subtle background element
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {Icon ? <Icon size={80 + (i * 10)} /> : <span style={{ fontSize: `${5 + (i * 0.5)}rem`, fontWeight: 800, fontFamily: 'var(--font-mono)' }}>{item.text}</span>}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
