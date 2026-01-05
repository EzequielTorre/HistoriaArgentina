import { getPostBySlug } from '../../../lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props) {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: post.meta.title,
      description: post.meta.summary || post.meta.title,
      openGraph: {
        title: post.meta.title,
        description: post.meta.summary || post.meta.title,
        url: `/posts/${post.slug}`,
        type: 'article',
        siteName: 'Historia Argentina',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.meta.title,
        description: post.meta.summary || post.meta.title,
      },
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

    return (
      <article className="fade-in-up container py-4">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3 text-primary">{post.meta.title}</h1>
          <p className="text-muted fst-italic">
            <i className="bi bi-calendar3 me-2"></i>
            {post.meta.date}
          </p>
        </div>
        <div className="prose mx-auto">
          <MDXRemote source={post.content} />
        </div>
      </article>
    );
  } catch (e) {
    notFound();
  }
}
