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
  padding: 10px 20% 20px;

  .blog-list {
    padding-inline-start: 0px;
  }

  .pagenation {
    display: flex;
    justify-content: space-between;
  }

  .pagenation-link-wrapper {
    font-weight: bold;
    font-size: 1.2em;
  }

  @media (max-width: ${breakPointMedium}) {
    padding: 10px 10% 20px;
  }

  @media (max-width: ${breakPointSmall}) {
    padding: 10px 4% 20px;
    min-height: 300px;

    .pagenation {
      padding: 0 8%;
    }
  }
`;

export const BlogList: React.FC<Props> = ({ blogDataList, pageId, pagenationInfo }) => {
  return (
    <Styled>
      <ul className="blog-list">
        {blogDataList.map((blogData) => (
          <BlogLink key={blogData.id} id={blogData.id} title={blogData.title} createdAt={blogData.createdAt} />
        ))}
      </ul>
      <div className="pagenation">
        <div className="pagenation-link-wrapper">{pagenationInfo.hasPrev && <Link href={`/blogs/page/${pageId - 1}`}>←Prev</Link>}</div>
        <div className="pagenation-link-wrapper">{pagenationInfo.hasNext && <Link href={`/blogs/page/${pageId + 1}`}>→Next</Link>}</div>
      </div>
    </Styled>
  );
};
