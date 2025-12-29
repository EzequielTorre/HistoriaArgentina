import Link from 'next/link';
import { PostMeta } from '../lib/posts';

export default function PostList({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {posts.map((p) => (
        <li key={p.slug} className="card p-5 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
          <Link
            href={`/posts/${p.slug}`}
            className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            {p.title}
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {p.date} • {p.tags?.join(', ')}
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm">{p.summary}</p>
        </li>
      ))}
    </ul>
  );
}
