import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { BlogData, PagenationInfo } from '../models';
import { breakPointMedium, breakPointSmall } from '../styles';
import { BlogLink } from './blog-link';

type Props = {
  blogDataList: BlogData[];
  pageId: number;
  pagenationInfo: PagenationInfo;
};

const Styled = styled.div`
  padding: 0 20%;

  .blog-list {
    padding-top: 10px;
  }

  .pagenation {
    display: flex;
  }

  @media (max-width: ${breakPointMedium}) {
    padding: 0 10%;
  }

  @media (max-width: ${breakPointSmall}) {
    padding: 0;
    min-height: 300px;
  }
`;

export const BlogList: React.FC<Props> = ({ blogDataList, pageId, pagenationInfo }) => {
  return (
    <>
      <Styled>
        <ul className="blog-list">
          {blogDataList.map((blogData) => (
            <BlogLink key={blogData.id} id={blogData.id} title={blogData.title} createdAt={blogData.createdAt} />
          ))}
        </ul>
        <div className="pagenation">
          <div className="pagenation-link-wrapper">{pagenationInfo.hasPrev && <Link href={`/blogs/page/${pageId - 1}`}>Prev</Link>}</div>
          <div className="pagenation-link-wrapper">{pagenationInfo.hasNext && <Link href={`/blogs/page/${pageId + 1}`}>Next</Link>}</div>
        </div>
      </Styled>
    </>
  );
};
