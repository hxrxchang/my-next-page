import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const PostLink: React.FC<{ id: string; title: string }> = (props) => {
  return (
    <li>
      <Link href="blog/[id]" as={`/blog/${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

const StyledWrapper = styled.div`
  padding: 0 20%;

  @media (max-width: 700px) {
    padding: 0;
    min-height: 300px;
  }
`;

export const BlogList: React.FC<{}> = () => {
  return (
    <StyledWrapper>
      <h1>Blogs</h1>
      <ul>
        <PostLink id="hello-world" title="ブログ作りました" />
      </ul>
    </StyledWrapper>
  );
};
