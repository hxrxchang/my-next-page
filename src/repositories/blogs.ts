import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogData, PagenationInfo } from '../models';

const blogsDirectory = path.join(process.cwd(), '/data-sources/blogs');
const blogItemLengthPerPage = 10;

export function getPagenatedSortedBlogsData(pageId: number): BlogData[] {
  const sortedBlogData = getSortedBlogsData();
  const from = (pageId - 1) * blogItemLengthPerPage;
  const to = pageId * blogItemLengthPerPage;
  return sortedBlogData.slice(from, to);
}

export function getBlogsPagePaths(): { params: { id: string } }[] {
  const paths: { params: { id: string } }[] = [];
  const pagesLength = getPagesLength();
  for (let i = 1; i <= pagesLength; i++) {
    paths.push({ params: { id: `${i}` } });
  }
  return paths;
}

export function getPagenationInfo(pageId: number): PagenationInfo {
  const pagesLength = getPagesLength();
  const hasNext = pageId + 1 <= pagesLength;
  const hasPrev = pageId - 1 > 0;
  return {
    hasNext,
    hasPrev,
  };
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

export function getBlogData(id: string): { content: string; blogData: BlogData } {
  const fullPath = path.join(blogsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);
  return {
    content,
    blogData: data as BlogData,
  };
}

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

function getPagesLength(): number {
  const allBlogsLength = fs.readdirSync(blogsDirectory).length;
  const quotient = Math.floor(allBlogsLength / blogItemLengthPerPage);
  const remainder = allBlogsLength % blogItemLengthPerPage;
  const pagesLength = remainder === 0 ? quotient : quotient + 1;
  return pagesLength;
}
