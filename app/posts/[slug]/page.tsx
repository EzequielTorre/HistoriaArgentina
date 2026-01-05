import { getPostBySlug, getRelatedPosts } from '../../../lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import ReadingProgress from '../../../components/ReadingProgress';
import ShareButtons from '../../../components/ShareButtons';
import RelatedPosts from '../../../components/RelatedPosts';
import Image from 'next/image';

const components = {
  Image,
  img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt || ''}
      {...props}
      className="img-fluid rounded-4 shadow my-4"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  ),
};

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
    const readingTime = post.meta.readingTime || 5;
    const relatedPosts = getRelatedPosts(slug, post.meta.tags);

    return (
      <>
        <ReadingProgress />
        <article className="fade-in-up container py-4">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3 text-primary">{post.meta.title}</h1>
            <div className="d-flex justify-content-center align-items-center gap-3 text-muted fst-italic">
              <span>
                <i className="bi bi-calendar3 me-2"></i>
                {post.meta.date}
              </span>
              <span>•</span>
              <span>
                <i className="bi bi-clock me-2"></i>
                {readingTime} min de lectura
              </span>
            </div>
          </div>

          <div className="prose mx-auto mb-5">
            <MDXRemote source={post.content} components={components} />
          </div>

          <div className="mx-auto" style={{ maxWidth: '65ch' }}>
            <ShareButtons title={post.meta.title} slug={slug} />
            <RelatedPosts posts={relatedPosts} />
          </div>
        </article>
      </>
    );
  } catch (e) {
    notFound();
  }
}
