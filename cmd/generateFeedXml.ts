import { getSortedBlogsData } from '../src/repositories/blogs';
import RSS from 'rss';
import { promises as fs } from 'fs';

export async function main() {
  const origin = 'https://hxrxchang.dev';
  const feed = new RSS({
    title: 'hxrxchang.dev/blogs',
    description: 'Yuto Hara のブログ',
    site_url: `${origin}/blogs`,
    feed_url: `${origin}/feed.xml`,
    language: 'ja',
  });

  const blogs = getSortedBlogsData();
  blogs.forEach((blog) => {
    feed.item({
      title: blog.title,
      description: blog.description,
      date: new Date(blog.createdAt),
      url: `${origin}/blog/${blog.id}`,
    });
  });
  const feedXml = feed.xml();
  await fs.writeFile(`${process.cwd()}/public/feed.xml`, feedXml);
}

main();
