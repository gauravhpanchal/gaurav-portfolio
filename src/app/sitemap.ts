/*
 * Go to https://github.com/leerob/site/blob/1129b6d81937cef493edb060f87e6f2ac9f335ed/app/sitemap.ts to see details
 */

import { getBlogPosts } from '@/lib/db/blog';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://1chooo.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/resume', '/portfolio', '/blog', '/contact'].map((route) => ({
    url: `https://1chooo.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
