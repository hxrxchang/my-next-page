import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getProfile(): string {
  const profilePath = path.join(process.cwd(), '/data-sources/profile.md');
  const fileContents = fs.readFileSync(profilePath, 'utf8');
  const { content } = matter(fileContents);
  return content;
}
