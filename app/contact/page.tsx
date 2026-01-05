"use client";
import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('Mensaje enviado correctamente');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      const mailto = `mailto:ezequiel.torres0682@gmail.com?subject=Contacto%20Blog&body=${encodeURIComponent(
        `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      )}`;
      window.location.href = mailto;
    }
  }

  return (
    <section className="container mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-6 fw-bold text-center mb-3">Contacto</h1>
              <p className="text-center text-muted mb-4">Envíanos tu consulta.</p>
              
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Tu nombre</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Tu email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Mensaje</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu mensaje aquí..."
                    className="form-control"
                    rows={5}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Enviar mensaje
                  </button>
                </div>
                {status && <div className="alert alert-success mt-3 text-center">{status}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
