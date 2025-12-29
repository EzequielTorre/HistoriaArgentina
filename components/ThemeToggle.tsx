'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      aria-label="Cambiar tema"
      onClick={toggle}
      className="rounded-full p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
    >
      <span className="block w-5 h-5">
        {dark ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-yellow-300">
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-800">
            <path d="M12 3a9 9 0 1 0 9 9h-2a7 7 0 1 1-7-7V3z" />
          </svg>
        )}
      </span>
    </button>
  );
}