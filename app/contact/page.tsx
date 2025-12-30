'use client';

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
    <section className="container">
      <h1 className="text-3xl font-bold text-center mb-4">Contacto</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Envíanos tu consulta.</p>
      <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
          className="w-full border rounded px-4 py-2"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
          className="w-full border rounded px-4 py-2"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mensaje"
          className="w-full border rounded px-4 py-2"
          rows={5}
          required
        />
        <button type="submit" className="w-full rounded bg-sky-600 text-white py-2 hover:bg-sky-500">
          Enviar
        </button>
        {status && <p className="text-center text-green-600">{status}</p>}
      </form>
    </section>
  );
}