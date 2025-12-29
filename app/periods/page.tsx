import Link from 'next/link';
import { getAllTags } from '../../lib/posts';

export default function PeriodsPage() {
  const tags = getAllTags();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Periodos</h1>
      <p className="mb-6 text-gray-600">Explora artículos por periodos o temas.</p>

      <ul className="space-y-2">
        {tags.map((t) => (
          <li key={t}>
            <Link
              href={`/periods/${encodeURIComponent(t)}`}
              className="text-blue-600 hover:underline"
            >
              {t}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
