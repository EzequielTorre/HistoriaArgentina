'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import type { PostMeta } from '../lib/posts';

export default function Search() {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [results, setResults] = useState<PostMeta[]>([]);

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

    const filtered = posts.filter((p) => {
      if (p.title.toLowerCase().includes(q)) return true;
      if (p.summary && p.summary.toLowerCase().includes(q)) return true;
      if ((p.tags || []).some((t) => t.toLowerCase().includes(q))) return true;
      return false;
    });

    setResults(filtered);
  }, [query, posts]);

  return (
    <div className="mb-6 relative">
      <input
        aria-label="Buscar artículos"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar por título, resumen o etiqueta..."
        className="w-full border bg-white/90 placeholder-gray-400 rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition dark:bg-gray-900/80 dark:text-gray-200"
      />

      {query && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-10 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">No se encontraron resultados</p>
          ) : (
            <ul className="divide-y dark:divide-gray-800">
              {results.slice(0, 8).map((r) => (
                <li key={r.slug} className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <Link href={`/posts/${r.slug}`} className="block">
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{r.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {r.date} • {r.tags?.join(', ')}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
