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

  return {
    slug,
    meta: data,
    content,
  };
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
