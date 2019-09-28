import React from 'react';
import Link from 'next/link';

const PostLink: React.FC<{ title: string }> = (props) => (
  <li>
    <Link href={`/blog?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const BlogsPage: React.FC<{}> = () => {
  return (
    <>
      <div>Blogs Page Works!</div>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </>
  );
};

export default BlogsPage;
