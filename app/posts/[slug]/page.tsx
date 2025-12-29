import { getPostBySlug } from '../../../lib/posts';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props) {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: post.meta.title,
      description: post.meta.summary || post.meta.title,
    };
  } catch (e) {
    return {
      title: 'Publicación no encontrada',
      description: 'No se encontró la publicación solicitada.',
    };
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = params;
  try {
    const post = getPostBySlug(slug);
    const mdxSource = await serialize(post.content);

    return (
      <article>
        <h1 className="text-2xl font-bold">{post.meta.title}</h1>
        <p className="text-sm text-gray-500">{post.meta.date}</p>
        <div className="prose mt-6">
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    );
  } catch (e) {
    notFound();
  }
}
