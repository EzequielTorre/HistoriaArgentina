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
    <div className="mb-6">
      <input
        aria-label="Buscar artículos"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar por título, resumen o etiqueta..."
        className="w-full border rounded px-3 py-2 mb-3"
      />

      {query && (
        <div className="bg-white border rounded p-3">
          {results.length === 0 ? (
            <p className="text-sm text-gray-500">No se encontraron resultados</p>
          ) : (
            <ul className="space-y-2">
              {results.map((r) => (
                <li key={r.slug}>
                  <Link href={`/posts/${r.slug}`} className="text-blue-600 hover:underline">
                    {r.title}
                  </Link>
                  <p className="text-xs text-gray-500">
                    {r.date} • {r.tags?.join(', ')}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
