export default function Footer() {
  return (
    <footer className="mt-12 text-center text-sm text-gray-500">
      <div className="container py-8 space-y-2">
        <div>
          © {new Date().getFullYear()} Historia Argentina — Ezequiel Torres
        </div>
        <div className="space-x-6">
          <a href="https://github.com/EzequielTorre" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sky-700 no-underline">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.34-5.46-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.66.26 2.88.13 3.18.77.85 1.24 1.93 1.24 3.25 0 4.64-2.8 5.67-5.47 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z"/></svg>
            GitHub
          </a>
          <a href="https://instagram.com/ezequieltorres" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sky-700 no-underline">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm6.5-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>
            Instagram
          </a>
          <a href="mailto:ezequiel.torres0682@gmail.com" className="inline-flex items-center gap-2 text-sky-700 no-underline">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M4 4h16v16H4z" fill="none"/><path d="M20 8l-8 5-8-5V6l8 5 8-5z"/></svg>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
