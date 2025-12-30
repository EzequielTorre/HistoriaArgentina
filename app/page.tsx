import { getAllPosts, getAllTags } from '../lib/posts';
import PostList from '../components/PostList';
import Search from '../components/Search';

export default async function Home() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div>
      <section className="mb-10">
        <div className="container py-12">
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-700" />
            <svg className="absolute inset-0 opacity-20" viewBox="0 0 1200 400" preserveAspectRatio="none">
              <rect x="0" y="0" width="1200" height="400" fill="none" />
              <rect x="0" y="60" width="1200" height="20" fill="#ffffff" />
              <rect x="0" y="140" width="1200" height="20" fill="#ffffff" />
              <rect x="0" y="220" width="1200" height="20" fill="#ffffff" />
              <circle cx="80" cy="80" r="26" fill="#d4af37" />
            </svg>
            <div className="relative z-10 px-8 py-12 text-white text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Historia Argentina</h1>
              <p className="mt-3 text-sky-100 max-w-2xl mx-auto">
                &ldquo;Serás lo que debas ser, o no serás nada.&rdquo; — San Martín
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="text-2xl font-semibold mb-4 text-center">Artículos recientes</h2>
        <Search />
        <PostList posts={posts} />
      </section>

      <section className="container mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Línea de tiempo de periodos</h2>
        <div className="timeline-h relative overflow-x-auto py-3">
          <div className="inline-flex items-center gap-6 px-2">
            {tags.map((t) => (
              <div key={t} className="relative">
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400" />
                <a href={`/periods/${encodeURIComponent(t)}`} className="inline-flex items-center rounded-full border px-4 py-1 text-sm bg-white text-gray-700 hover:bg-gray-50 border-gray-200 shadow-sm dark:bg-gray-900 dark:text-gray-300 dark:border-gray-800">
                  {t}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
