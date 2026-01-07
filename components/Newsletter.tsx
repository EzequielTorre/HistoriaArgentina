'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simular petición a API
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      // Aquí se conectaría con un servicio real como Mailchimp, ConvertKit, etc.
    }, 1500);
  };

  return (
    <section className="py-5 bg-light rounded-4 shadow-sm my-5">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="mb-4">
              <i className="bi bi-envelope-paper fs-1 text-primary mb-3 d-block"></i>
              <h2 className="h3 fw-bold mb-3">Suscríbete al Boletín de Historia</h2>
              <p className="text-muted">
                Recibe semanalmente resúmenes, curiosidades y nuevos artículos sobre la historia
                argentina directamente en tu bandeja de entrada.
              </p>
            </div>

            {status === 'success' ? (
              <div className="alert alert-success d-inline-block fade-in-up" role="alert">
                <i className="bi bi-check-circle-fill me-2"></i>
                ¡Gracias por suscribirte! Pronto recibirás noticias nuestras.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column flex-sm-row gap-2 justify-content-center mx-auto"
                style={{ maxWidth: '500px' }}
              >
                <input
                  type="email"
                  required
                  className="form-control form-control-lg rounded-pill"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-pill px-4"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : (
                    'Suscribirse'
                  )}
                </button>
              </form>
            )}

            <p className="small text-muted mt-3 mb-0">
              * No enviamos spam. Puedes desuscribirte cuando quieras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
