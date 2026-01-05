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
    <div ref={ref} className="position-relative">
      <div className="input-group">
        <span className="input-group-text bg-transparent border-end-0 rounded-start-pill">
          <i className="bi bi-search text-secondary"></i>
        </span>
        <input
          aria-label="Buscar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar..."
          className="form-control border-start-0 rounded-end-pill shadow-none"
          style={{ maxWidth: '300px' }}
        />
      </div>

      {query && results.length > 0 && (
        <div
          className="position-absolute top-100 start-0 w-100 mt-2 bg-white rounded shadow-lg overflow-hidden z-3"
          style={{ minWidth: '300px' }}
        >
          <div className="list-group list-group-flush">
            {results.slice(0, 6).map((r) => (
              <Link
                key={r.slug}
                href={`/posts/${r.slug}`}
                className="list-group-item list-group-item-action"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h6 className="mb-1 text-primary">{r.title}</h6>
                </div>
                <small className="text-muted">
                  {r.date} • {r.tags?.join(', ')}
                </small>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
