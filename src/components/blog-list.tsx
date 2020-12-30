import React from 'react';
import styled from 'styled-components';
import { BlogData } from '../models';
import { breakPointMedium, breakPointSmall } from '../styles';
import { BlogLink } from './blog-link';

type Props = {
  blogDataList: BlogData[];
};

const Styled = styled.div`
  padding: 0 20%;

  .blog-list {
    padding-top: 10px;
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
      <Styled>
        <ul className="blog-list">
          {blogDataList.map((blogData) => (
            <BlogLink key={blogData.id} id={blogData.id} title={blogData.title} createdAt={blogData.createdAt} />
          ))}
        </ul>
      </Styled>
    </>
  );
};
