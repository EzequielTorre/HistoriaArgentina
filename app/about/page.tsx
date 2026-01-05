import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="container mb-5">
      <h1 className="display-5 fw-bold text-center mb-5">Sobre nosotros</h1>

      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <Image
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
            alt="Libros de historia"
            width={1200}
            height={800}
            className="img-fluid rounded-4 shadow"
            priority
          />
        </div>
        <div className="col-md-6">
          <p className="lead text-secondary">
            Este blog explora los hechos, procesos y protagonistas de la historia argentina, desde
            la independencia hasta la actualidad. Buscamos difundir conocimiento con rigor y
            claridad.
          </p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="mb-3 text-primary">
                <i className="bi bi-compass fs-1"></i>
              </div>
              <h3 className="h5 fw-bold mb-3">Misión</h3>
              <p className="text-muted">
                Promover el interés por nuestra historia y facilitar el acceso a contenidos
                confiables.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="mb-3 text-primary">
                <i className="bi bi-eye fs-1"></i>
              </div>
              <h3 className="h5 fw-bold mb-3">Visión</h3>
              <p className="text-muted">
                Ser una referencia educativa abierta y moderna para estudiantes y curiosos.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="mb-3 text-primary">
                <i className="bi bi-star fs-1"></i>
              </div>
              <h3 className="h5 fw-bold mb-3">Valores</h3>
              <p className="text-muted">
                Rigor histórico, respeto por la diversidad y compromiso con la calidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
