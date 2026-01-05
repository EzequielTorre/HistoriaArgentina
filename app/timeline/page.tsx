import { getAllPosts } from '../../lib/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Línea de Tiempo Histórica | Historia Argentina',
  description: 'Recorrido cronológico por los eventos más importantes de la historia argentina.',
};

export default function TimelinePage() {
  const posts = getAllPosts().sort((a, b) => (a.date > b.date ? 1 : -1));

  return (
    <section className="container py-5 mb-5">
      <div className="text-center mb-5 fade-in-up">
        <h1 className="display-4 fw-bold text-primary mb-3">Línea de Tiempo</h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
          Un viaje cronológico a través de los hitos que forjaron nuestra nación, desde la independencia hasta la actualidad.
        </p>
      </div>

      <div className="timeline fade-in-up">
        {posts.map((post, index) => (
          <div
            key={post.slug}
            className={`timeline-container ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content border">
              <span className="badge bg-primary mb-2 rounded-pill">
                {new Date(post.date).getFullYear()}
              </span>
              <h3 className="h5 fw-bold text-primary">{post.title}</h3>
              <p className="small text-muted mb-2">
                <i className="bi bi-calendar3 me-2"></i>
                {post.date}
              </p>
              <p className="text-secondary small mb-3">{post.summary}</p>
              <Link href={`/posts/${post.slug}`} className="btn btn-outline-primary btn-sm rounded-pill stretched-link">
                Leer historia completa
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <p className="text-muted small fst-italic">
          * La historia está en constante construcción. Pronto se agregarán más eventos.
        </p>
      </div>
    </section>
  );
}
