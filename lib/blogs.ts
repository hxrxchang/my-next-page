import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogData } from '../src/models';

const blogsDirectory = path.join(process.cwd(), '/data-sources/blogs');

export function getSortedBlogsData() {
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
