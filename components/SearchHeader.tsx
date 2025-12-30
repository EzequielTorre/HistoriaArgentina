'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { PostMeta } from '../lib/posts';

export default function SearchHeader() {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [results, setResults] = useState<PostMeta[]>([]);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch('/api/posts')
      .then((r) => r.json())
      .then((data) => setPosts(data))
      .catch(() => setPosts([]));
  }, []);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setResults([]);
      return;
    }

    setResults(
      posts.filter((p) => {
        if (p.title.toLowerCase().includes(q)) return true;
        if (p.summary && p.summary.toLowerCase().includes(q)) return true;
        if ((p.tags || []).some((t) => t.toLowerCase().includes(q))) return true;
        return false;
      }),
    );
  }, [query, posts]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setResults([]);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <div ref={ref} className="relative w-64 md:w-80">
      <input
        aria-label="Buscar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar..."
        className="w-full border bg-white/90 placeholder-gray-400 rounded-full pl-10 pr-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm8.32 13.9-3.17-3.17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
      </span>

      {query && results.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-50">
          <ul className="divide-y">
            {results.slice(0, 6).map((r) => (
              <li key={r.slug} className="px-4 py-2 hover:bg-gray-50">
                <Link href={`/posts/${r.slug}`} className="block">
                  <div className="text-sm font-medium text-gray-800">{r.title}</div>
                  <div className="text-xs text-gray-500">
                    {r.date} • {r.tags?.join(', ')}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
