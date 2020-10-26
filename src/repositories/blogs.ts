import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { BlogData } from '../models';

const blogsDirectory = path.join(process.cwd(), '/data-sources/blogs');

export function getSortedBlogsData(): BlogData[] {
  const fileNames = fs.readdirSync(blogsDirectory);

  const allBlogsData = fileNames.map((fileName) => {
    const fullPath = path.join(blogsDirectory, fileName);
    const fullContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fullContents);
    return { ...matterResult.data };
  }) as BlogData[];

  return allBlogsData.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllBlogIds(): { params: { id: string } }[] {
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getBlogData(id: string): Promise<{ content: string; blogData: BlogData }> {
  const fullPath = path.join(blogsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);
  const parsedConntent = await remark().use(html).process(content);
  const contentHtml = parsedConntent.toString();
  return {
    content: contentHtml,
    blogData: data as BlogData,
  };
}
