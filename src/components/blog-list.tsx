import Link from 'next/link';
import React from 'react';
import { BlogData, PagenationInfo } from '../models';
import { BlogLink } from './blog-link';

type Props = {
  blogDataList: BlogData[];
  pageId: number;
  pagenationInfo: PagenationInfo;
};

export const BlogList: React.FC<Props> = ({ blogDataList, pageId, pagenationInfo }) => {
  return (
    <div className="pt-2.5 pb-5 px-[4%] min-h-[300px] sm:px-[10%] sm:min-h-0 md:px-[20%]">
      <ul className="ps-0">
        {blogDataList.map((blogData) => (
          <BlogLink key={blogData.id} id={blogData.id} title={blogData.title} createdAt={blogData.createdAt} />
        ))}
      </ul>
      <div className="flex justify-between px-[8%] sm:px-0">
        <div className="font-bold text-xl">{pagenationInfo.hasPrev && <Link href={`/blogs/page/${pageId - 1}`}><span>Prev</span></Link>}</div>
        <div className="font-bold text-xl">{pagenationInfo.hasNext && <Link href={`/blogs/page/${pageId + 1}`}><span>Next</span></Link>}</div>
      </div>
    </div>
  );
};
