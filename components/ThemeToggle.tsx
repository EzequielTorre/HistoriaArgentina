'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDark(isDark);
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-bs-theme', next ? 'dark' : 'light');
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      aria-label="Cambiar tema"
      onClick={toggle}
      className="btn btn-link nav-link p-2"
    >
      {dark ? (
        <i className="bi bi-moon-stars-fill text-warning fs-5"></i>
      ) : (
        <i className="bi bi-sun-fill text-warning fs-5"></i>
      )}
    </button>
  );
}
