'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div 
      className="fixed-top" 
      style={{ 
        height: '4px', 
        backgroundColor: 'transparent', 
        zIndex: 1031 
      }}
    >
      <div 
        style={{ 
          width: `${progress}%`, 
          height: '100%', 
          backgroundColor: 'var(--oro-sol)',
          transition: 'width 0.1s ease-out'
        }} 
      />
    </div>
  );
}
