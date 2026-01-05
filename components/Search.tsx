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
    <div className="mb-5 position-relative mw-100 mx-auto" style={{ maxWidth: '600px' }}>
      <div className="input-group input-group-lg shadow-sm">
        <span className="input-group-text bg-white border-end-0 rounded-start-pill ps-4">
          <i className="bi bi-search text-muted"></i>
        </span>
        <input
          aria-label="Buscar artículos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por título, resumen o etiqueta..."
          className="form-control border-start-0 rounded-end-pill py-3"
        />
      </div>

      {query && (
        <div className="position-absolute start-0 end-0 mt-2 rounded-4 shadow-lg overflow-hidden z-3 bg-white border">
          {results.length === 0 ? (
            <p className="p-3 text-muted mb-0">No se encontraron resultados</p>
          ) : (
            <div className="list-group list-group-flush">
              {results.slice(0, 8).map((r) => (
                <Link
                  key={r.slug}
                  href={`/posts/${r.slug}`}
                  className="list-group-item list-group-item-action p-3"
                >
                  <div className="fw-bold text-primary mb-1">{r.title}</div>
                  <div className="small text-muted">
                    {r.date} • {r.tags?.join(', ')}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
