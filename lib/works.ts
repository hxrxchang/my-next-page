import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getWorks(): string {
  const worksPath = path.join(process.cwd(), '/data-sources/works.md');
  const fileContents = fs.readFileSync(worksPath, 'utf8');
  const { content } = matter(fileContents);
  return content;
}
