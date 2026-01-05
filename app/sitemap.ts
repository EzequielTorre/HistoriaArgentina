import { MetadataRoute } from 'next';
import { getAllPosts } from '../lib/posts';

const BASE_URL = 'https://historia-argentina.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postUrls = posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/periods`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tags`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    ...postUrls,
  ];
}
