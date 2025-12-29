import { getAllPosts } from '../lib/posts';
import PostList from '../components/PostList';
import Search from '../components/Search';

export default async function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <section className="mb-10">
        <div className="container py-12">
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-sky-500" />
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
    </div>
  );
}
