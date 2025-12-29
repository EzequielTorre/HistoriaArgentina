import Link from 'next/link';
import { getAllTags } from '../../lib/posts';

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Etiquetas</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">Explora artículos por etiquetas.</p>

      <div className="flex flex-wrap gap-3">
        {tags.map((t) => (
          <Link
            key={t}
            href={`/periods/${encodeURIComponent(t)}`}
            className="inline-flex items-center rounded-full border px-4 py-1 text-sm bg-white text-gray-700 hover:bg-gray-50 border-gray-200 shadow-sm dark:bg-gray-900 dark:text-gray-300 dark:border-gray-800"
          >
            {t}
          </Link>
        ))}
      </div>
    </div>
  );
}