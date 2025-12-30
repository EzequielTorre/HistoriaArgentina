'use client';

import { useEffect, useState } from 'react';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      aria-label="Volver arriba"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 rounded-full shadow-lg bg-amber-400 text-gray-900 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 p-3"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 5l-7 7h4v7h6v-7h4l-7-7z" />
      </svg>
    </button>
  );
}