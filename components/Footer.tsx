export default function Footer() {
  return (
    <footer className="mt-12 text-center text-sm text-gray-500">
      <div className="container py-8 space-y-2">
        <div>
          © {new Date().getFullYear()} Historia Argentina — Ezequiel Torres
        </div>
        <div className="space-x-4">
          <a href="https://github.com/EzequielTorre" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">GitHub</a>
          <a href="https://instagram.com/ezequieltorres" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">Instagram</a>
          <a href="mailto:ezequiel.torres0682@gmail.com" className="text-sky-700 hover:underline">Email</a>
        </div>
      </div>
    </footer>
  );
}
