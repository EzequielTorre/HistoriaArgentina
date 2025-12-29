import Link from 'next/link';
import SearchHeader from './SearchHeader';

export default function Header() {
  return (
    <header className="mb-8 flex items-center justify-between gap-4">
      <Link href="/" className="text-2xl font-bold tracking-tight">
        Historia Argentina
      </Link>

      <div className="flex items-center gap-4">
        <div className="hidden sm:block">
          <SearchHeader />
        </div>

        <nav className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-800">
            Inicio
          </Link>
          <Link href="/periods" className="hover:text-gray-800">
            Periodos
          </Link>
          <Link href="/tags" className="hover:text-gray-800">
            Etiquetas
          </Link>
        </nav>

        <div className="md:hidden">
          <SearchHeader />
        </div>
      </div>
    </header>
  );
}
