import Link from 'next/link';
import type { PostMeta } from '../lib/posts';

export default function RelatedPosts({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-5 pt-4 border-top">
      <h3 className="h4 fw-bold mb-4">Quizás también te interese</h3>
      <div className="row g-4">
        {posts.map((post) => (
          <div key={post.slug} className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <small className="text-muted d-block mb-2">{post.date}</small>
                <h4 className="h6 card-title fw-bold">
                  <Link href={`/posts/${post.slug}`} className="text-decoration-none text-dark stretched-link">
                    {post.title}
                  </Link>
                </h4>
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-2">
                    <span className="badge bg-light text-secondary border">
                      {post.tags[0]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
