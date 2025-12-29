import Link from 'next/link';
import SearchHeader from './SearchHeader';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 mb-8 backdrop-blur bg-white/70 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
      <Link href="/" className="text-2xl font-bold tracking-tight">
        Historia Argentina
      </Link>

      <div className="flex items-center gap-4">
        <div className="hidden sm:block">
          <SearchHeader />
        </div>

        <nav className="hidden md:flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
          <Link href="/" className="hover:text-gray-800 dark:hover:text-white">
            Inicio
          </Link>
          <Link href="/periods" className="hover:text-gray-800 dark:hover:text-white">
            Periodos
          </Link>
          <Link href="/tags" className="hover:text-gray-800 dark:hover:text-white">
            Etiquetas
          </Link>
        </nav>

        <div className="md:hidden">
          <SearchHeader />
        </div>

        <ThemeToggle />
      </div>
      </div>
    </header>
  );
}
