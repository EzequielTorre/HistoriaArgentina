import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Autores y Colaboradores | Historia Argentina',
  description: 'Conoce al equipo detrás de Historia Argentina.',
};

const authors = [
  {
    id: '1',
    name: 'Creador del Proyecto',
    role: 'Editor Principal & Desarrollador',
    bio: 'Apasionado por la historia argentina y el desarrollo web. Este proyecto nace con la intención de digitalizar y hacer accesible nuestra rica historia para las nuevas generaciones.',
    avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff&size=200',
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    id: '2',
    name: 'Colaborador Histórico',
    role: 'Investigador',
    bio: 'Historiador especializado en el siglo XIX. Aporta rigor académico y curiosidades poco conocidas sobre la formación del Estado Argentino.',
    avatar:
      'https://ui-avatars.com/api/?name=Colaborador+Hist&background=6366f1&color=fff&size=200',
    social: {
      twitter: '#',
      linkedin: '#',
    },
  },
];

export default function AuthorsPage() {
  return (
    <section className="container py-5 mb-5">
      <div className="text-center mb-5 fade-in-up">
        <h1 className="display-4 fw-bold text-primary mb-3">Nuestros Autores</h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
          Conoce a las personas que investigan, escriben y mantienen vivo este archivo digital de
          historia argentina.
        </p>
      </div>

      <div className="row justify-content-center g-4">
        {authors.map((author) => (
          <div key={author.id} className="col-md-6 col-lg-5 fade-in-up">
            <div className="card border-0 shadow-sm h-100 overflow-hidden hover-card">
              <div className="card-body text-center p-5">
                <div className="mb-4 position-relative d-inline-block">
                  <div className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
                    <span className="visually-hidden">Online</span>
                  </div>
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    width={120}
                    height={120}
                    className="rounded-circle border border-4 border-light shadow"
                  />
                </div>
                <h2 className="h4 fw-bold mb-1">{author.name}</h2>
                <p className="text-primary small text-uppercase fw-bold mb-3">{author.role}</p>
                <p className="text-muted mb-4">{author.bio}</p>

                <div className="d-flex justify-content-center gap-3">
                  {author.social.twitter && (
                    <Link
                      href={author.social.twitter}
                      className="btn btn-outline-secondary btn-sm rounded-circle"
                      aria-label="Twitter"
                    >
                      <i className="bi bi-twitter-x"></i>
                    </Link>
                  )}
                  {author.social.github && (
                    <Link
                      href={author.social.github}
                      className="btn btn-outline-secondary btn-sm rounded-circle"
                      aria-label="GitHub"
                    >
                      <i className="bi bi-github"></i>
                    </Link>
                  )}
                  {author.social.linkedin && (
                    <Link
                      href={author.social.linkedin}
                      className="btn btn-outline-secondary btn-sm rounded-circle"
                      aria-label="LinkedIn"
                    >
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  )}
                </div>
              </div>
              <div className="card-footer bg-light border-0 py-3 text-center">
                <small className="text-muted">
                  <i className="bi bi-pen-fill me-2"></i>
                  Escribe sobre: Historia Política, Guerras Civiles
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5 pt-4 border-top">
        <h3 className="h5 fw-bold mb-3">¿Te gustaría colaborar?</h3>
        <p className="text-muted mb-4">
          Siempre estamos buscando nuevas voces y perspectivas sobre nuestra historia.
        </p>
        <Link href="/contact" className="btn btn-primary rounded-pill px-4">
          Contáctanos
        </Link>
      </div>
    </section>
  );
}
