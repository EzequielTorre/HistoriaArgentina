import Link from 'next/link';
import { PostMeta } from '../lib/posts';

export default function PostList({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4">
      {posts.map((p) => (
        <div key={p.slug} className="col">
          <div className="card h-100 shadow-sm border-0 bg-white">
            <div className="card-body">
              <Link
                href={`/posts/${p.slug}`}
                className="d-inline-flex align-items-center gap-2 h5 card-title text-decoration-none text-primary fw-bold"
              >
                <i className="bi bi-file-text"></i>
                {p.title}
              </Link>
              <h6 className="card-subtitle mb-2 text-muted small mt-2">
                {p.date} • {p.tags?.join(', ')}
              </h6>
              <p className="card-text text-secondary small mt-3">{p.summary}</p>
            </div>
            <div className="card-footer bg-transparent border-0">
              <Link href={`/posts/${p.slug}`} className="btn btn-outline-primary btn-sm rounded-pill">
                Leer más
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
