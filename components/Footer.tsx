export default function Footer() {
  return (
    <footer className="mt-5 text-center text-muted small border-top py-4 bg-light">
      <div className="container">
        <p className="mb-2">© {new Date().getFullYear()} Historia Argentina — Ezequiel Torres</p>
        <div className="d-flex justify-content-center gap-4">
          <a
            href="https://github.com/EzequielTorre"
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-flex align-items-center gap-2 text-decoration-none text-secondary"
          >
            <i className="bi bi-github"></i>
            GitHub
          </a>
          <a
            href="https://instagram.com/ezequieltorres"
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-flex align-items-center gap-2 text-decoration-none text-secondary"
          >
            <i className="bi bi-instagram"></i>
            Instagram
          </a>
          <a
            href="mailto:ezequiel.torres0682@gmail.com"
            className="d-inline-flex align-items-center gap-2 text-decoration-none text-secondary"
          >
            <i className="bi bi-envelope"></i>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
