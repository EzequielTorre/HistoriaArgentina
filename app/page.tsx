import { getAllPosts, getAllTags } from '../lib/posts';
import PostList from '../components/PostList';
import Search from '../components/Search';
import Link from 'next/link';

export default async function Home() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div>
      <section className="mb-5">
        <div className="container py-5">
          <div
            className="position-relative overflow-hidden rounded-4 shadow-lg text-white"
            style={{ background: 'linear-gradient(to right, #0ea5e9, #0369a1)' }}
          >
            <svg
              className="position-absolute top-0 start-0 w-100 h-100 opacity-25"
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
            >
              <rect x="0" y="0" width="1200" height="400" fill="none" />
              <rect x="0" y="60" width="1200" height="20" fill="#ffffff" />
              <rect x="0" y="140" width="1200" height="20" fill="#ffffff" />
              <rect x="0" y="220" width="1200" height="20" fill="#ffffff" />
              <circle cx="80" cy="80" r="26" fill="#d4af37" />
            </svg>
            <div className="position-relative z-1 px-4 py-5 text-center">
              <h1 className="display-4 fw-bold mb-3">Historia Argentina</h1>
              <p className="lead mx-auto" style={{ maxWidth: '600px', color: '#e0f2fe' }}>
                &ldquo;Serás lo que debas ser, o no serás nada.&rdquo; — San Martín
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-5">
        <h2 className="h3 fw-bold text-center mb-4">Artículos recientes</h2>
        <div className="row justify-content-center mb-4">
          <div className="col-md-8">
            <Search />
          </div>
        </div>
        <PostList posts={posts} />
      </section>

      <section className="container mt-5 mb-5">
        <h2 className="h3 fw-bold text-center mb-4">Línea de tiempo de periodos</h2>
        <div className="d-flex flex-wrap justify-content-center gap-3 py-3">
          {tags.map((t) => (
            <div key={t} className="position-relative">
              <span
                className="position-absolute top-0 start-50 translate-middle p-1 bg-warning border border-light rounded-circle"
                style={{ marginTop: '-4px' }}
              ></span>
              <Link
                href={`/periods/${encodeURIComponent(t)}`}
                className="btn btn-outline-secondary rounded-pill d-inline-flex align-items-center gap-2 btn-sm text-decoration-none"
              >
                <i className="bi bi-clock-history"></i>
                {t}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
