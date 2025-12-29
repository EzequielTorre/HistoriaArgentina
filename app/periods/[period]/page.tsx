import { getPostsByTag } from '../../../lib/posts';
import Link from 'next/link';

type Props = { params: { period: string } };

export default function PeriodTagPage({ params }: Props) {
  const period = decodeURIComponent(params.period);
  const posts = getPostsByTag(period);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{period}</h1>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="border p-4 rounded bg-white">
            <Link href={`/posts/${p.slug}`} className="text-lg font-medium text-blue-600">
              {p.title}
            </Link>
            <p className="text-sm text-gray-500">{p.date}</p>
            <p className="mt-2 text-gray-700">{p.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
