import React from 'react';
import Link from 'next/link';

const PostLink: React.FC<{ id: string; title: string }> = (props) => {
  return (
    <li>
      <Link href="blog/[id]" as={`/blog/${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

const BlogsPage: React.FC<{}> = () => {
  return (
    <>
      <div>Blogs Page Works!</div>
      <ul>
        <PostLink id="hello" title="Hello Next.js" />
        <PostLink id="learn" title="Learn Next.js is awesome" />
        <PostLink id="deploy" title="Deploy apps with Zeit" />
      </ul>
    </>
  );
};

export default BlogsPage;
