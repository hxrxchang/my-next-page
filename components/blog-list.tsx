import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { BlogData } from '../docs/blogs/blog-data-list';

interface Props {
  blogDataList: BlogData[];
}

const StyledLink = styled.li`
  padding: 10px 0;
  list-style: none;

  .date {
    display: block;
  }

  .link {
    text-decoration: none;
  }

  .link:hover {
    text-decoration: underline;
  }

  .title {
    line-height: 0px;
  }
`;

const PostLink: React.FC<{ id: string; title: string }> = ({ id, title }) => {
  return (
    <StyledLink key={id}>
      <Link href="blog/[id]" as={`/blog/${id}`}>
        <a className="link">
          <h2 className="title">{title}</h2>
        </a>
      </Link>
      <p>2019.10.01</p>
    </StyledLink>
  );
};

const StyledWrapper = styled.div`
  padding: 0 20%;

  @media (max-width: 700px) {
    padding: 0;
    min-height: 300px;
  }
`;

export const BlogList: React.FC<Props> = ({ blogDataList }) => {
  return (
    <>
      <StyledWrapper>
        <h1>Blogs</h1>
        <ul>
          {blogDataList.map((blogData) => (
            <PostLink key={blogData.id} id={blogData.id} title={blogData.title} />
          ))}
        </ul>
      </StyledWrapper>
    </>
  );
};