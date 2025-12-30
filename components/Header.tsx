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
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight">
          <span className="inline-block w-7 h-7 text-sky-600">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h11a2 2 0 0 1 2 2v12l-7-3-7 3V6a2 2 0 0 1 2-2z"/></svg>
          </span>
          Historia Argentina
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <SearchHeader />
          </div>

          <nav className="hidden md:flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
            <Link href="/" className="hover:text-gray-800 dark:hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-gray-800 dark:hover:text-white">Sobre nosotros</Link>
            <Link href="/contact" className="hover:text-gray-800 dark:hover:text-white">Contacto</Link>
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
            <Link href="/" className="block">Home</Link>
            <Link href="/about" className="block">Sobre nosotros</Link>
            <Link href="/contact" className="block">Contacto</Link>
          </div>
        </div>
      )}
    </header>
  );
}
