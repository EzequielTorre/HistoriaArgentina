import Link from 'next/link';
import { PostMeta } from '../lib/posts';

export default function PostList({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((p) => (
        <li key={p.slug} className="card p-5">
          <Link
            href={`/posts/${p.slug}`}
            className="text-lg font-semibold text-indigo-600 hover:underline"
          >
            {p.title}
          </Link>
          <p className="text-sm text-gray-500 mt-1">
            {p.date} • {p.tags?.join(', ')}
          </p>
          <p className="mt-3 text-gray-700 text-sm">{p.summary}</p>
        </li>
      ))}
    </ul>
  );
}
