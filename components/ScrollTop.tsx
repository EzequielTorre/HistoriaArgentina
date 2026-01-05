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
      className="btn btn-warning rounded-circle shadow position-fixed bottom-0 end-0 m-4 d-flex align-items-center justify-content-center"
      style={{ width: '50px', height: '50px', zIndex: 1000 }}
    >
      <i className="bi bi-arrow-up fs-4"></i>
    </button>
  );
}