import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'content', 'posts');

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  summary?: string;
  readingTime?: number;
};

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$|\.md$/, '');
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      tags: data.tags || [],
      summary: data.summary || '',
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  const fullPathMd = path.join(postsDir, `${slug}.md`);
  const fullPathMdx = path.join(postsDir, `${slug}.mdx`);

  let fullPath: string | null = null;
  if (fs.existsSync(fullPathMd)) fullPath = fullPathMd;
  else if (fs.existsSync(fullPathMdx)) fullPath = fullPathMdx;

  if (!fullPath) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Calculate reading time: avg 200 words per minute
  const words = content.split(/\s+/).length;
  const readingTime = Math.ceil(words / 200);

  return {
    slug,
    meta: {
      slug,
      title: data.title || slug,
      date: data.date || '',
      tags: data.tags || [],
      summary: data.summary || '',
      readingTime
    } as PostMeta,
    content,
  };
}

export function getRelatedPosts(currentSlug: string, tags: string[] = []): PostMeta[] {
  const allPosts = getAllPosts();

  if (tags.length === 0) return [];

  const related = allPosts.filter((post) => {
    // Don't include the current post
    if (post.slug === currentSlug) return false;

    // Find intersection of tags
    const commonTags = (post.tags || []).filter((t) => tags.includes(t));
    return commonTags.length > 0;
  });

  // Sort by number of common tags (relevance) then date
  return related
    .sort((a, b) => {
      const aCommon = (a.tags || []).filter((t) => tags.includes(t)).length;
      const bCommon = (b.tags || []).filter((t) => tags.includes(t)).length;

      if (aCommon > bCommon) return -1;
      if (aCommon < bCommon) return 1;

      return a.date < b.date ? 1 : -1;
    })
    .slice(0, 3); // Return top 3
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((p) => (p.tags || []).forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function getPostsByTag(tag: string): PostMeta[] {
  const posts = getAllPosts();
  return posts.filter((p) => (p.tags || []).includes(tag));
}
