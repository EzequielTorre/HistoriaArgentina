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
            <div className="relative z-10 px-8 py-12 text-white">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Historia Argentina</h1>
              <p className="mt-3 text-indigo-100 max-w-xl">
                Un recorrido por los hechos y personajes que marcaron el rumbo desde la independencia
                hasta hoy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="text-2xl font-semibold mb-4">Artículos recientes</h2>
        <Search />
        <PostList posts={posts} />
      </section>

      <section className="container mt-12">
        <h2 className="text-2xl font-semibold mb-4">Línea de tiempo de periodos</h2>
        <div className="timeline">
          {tags.map((t) => (
            <div key={t} className="timeline-item">
              <a href={`/periods/${encodeURIComponent(t)}`} className="text-sky-700 hover:underline dark:text-sky-300">
                {t}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
