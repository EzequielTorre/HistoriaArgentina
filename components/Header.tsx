"use client";
import { useState } from 'react';
import Link from 'next/link';
import SearchHeader from './SearchHeader';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 mb-8 backdrop-blur bg-white/70 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight no-underline">
          <span className="inline-block w-7 h-7 text-sky-600">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h11a2 2 0 0 1 2 2v12l-7-3-7 3V6a2 2 0 0 1 2-2z"/></svg>
          </span>
          Historia Argentina
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <SearchHeader />
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-300">
            <Link href="/" className="inline-flex items-center gap-1 no-underline hover:text-gray-800 dark:hover:text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 3l9 8h-3v9H6v-9H3l9-8z"/></svg>
              Home
            </Link>
            <Link href="/about" className="inline-flex items-center gap-1 no-underline hover:text-gray-800 dark:hover:text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z"/></svg>
              Sobre nosotros
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-1 no-underline hover:text-gray-800 dark:hover:text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M4 4h16v16H4z" fill="none"/><path d="M20 8l-8 5-8-5V6l8 5 8-5z"/></svg>
              Contacto
            </Link>
          </nav>

        <div className="md:hidden">
          <SearchHeader />
        </div>

          <ThemeToggle />

          <button aria-label="Abrir menú" onClick={() => setOpen(!open)} className="md:hidden rounded p-2 bg-gray-200 dark:bg-gray-700">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90">
          <div className="max-w-5xl mx-auto px-4 py-3 space-y-2">
            <Link href="/" className="block no-underline inline-flex items-center gap-2"><svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 3l9 8h-3v9H6v-9H3l9-8z"/></svg>Home</Link>
            <Link href="/about" className="block no-underline inline-flex items-center gap-2"><svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z"/></svg>Sobre nosotros</Link>
            <Link href="/contact" className="block no-underline inline-flex items-center gap-2"><svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M4 4h16v16H4z" fill="none"/><path d="M20 8l-8 5-8-5V6l8 5 8-5z"/></svg>Contacto</Link>
          </div>
        </div>
      )}
    </header>
  );
}
