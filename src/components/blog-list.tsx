import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { BlogData } from '../models';
import { breakPointMedium, breakPointSmall } from '../styles';

type Props = {
  blogDataList: BlogData[];
};

const StyledList = styled.li`
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
    margin: 0;
  }

  .created-at {
    margin: 4px 0;
  }
`;

const BlogLink: React.FC<{ id: string; title: string; createdAt: string }> = ({ id, title, createdAt }) => {
  return (
    <StyledList>
      <Link href={`blog/${id}`}>
        <a className="link">
          <h2 className="title">{title}</h2>
        </a>
      </Link>
      <p className="created-at">{createdAt}</p>
    </StyledList>
  );
};

const StyledWrapper = styled.div`
  padding: 0 20%;

  .blog-list {
    padding-top: 20px;
  }

  @media (max-width: ${breakPointMedium}) {
    padding: 0 10%;
  }

  @media (max-width: ${breakPointSmall}) {
    padding: 0;
    min-height: 300px;
  }
`;

export const BlogList: React.FC<Props> = ({ blogDataList }) => {
  return (
    <>
      <StyledWrapper>
        <ul className="blog-list">
          {blogDataList.map((blogData) => (
            <BlogLink key={blogData.id} id={blogData.id} title={blogData.title} createdAt={blogData.createdAt} />
          ))}
        </ul>
      </StyledWrapper>
    </>
  );
};
