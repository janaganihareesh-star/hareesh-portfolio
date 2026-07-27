import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('booting portfolio.exe...');

  useEffect(() => {
    const texts = [
      'loading modules...',
      'initializing UI...',
      'connecting to network...',
      'starting kernel...'
    ];
    let i = 0;
    const textInterval = setInterval(() => {
      setText(texts[i % texts.length]);
      i++;
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 200);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--bg-primary)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999
        }}
      >
        <div style={{ width: '300px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
            &gt; {text}
          </div>
          <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '2px', overflow: 'hidden' }}>
            <motion.div
              style={{ height: '100%', backgroundColor: 'var(--accent-primary)' }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginTop: '0.5rem', textAlign: 'right', color: 'var(--accent-primary)' }}>
            {progress > 100 ? 100 : progress}%
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
