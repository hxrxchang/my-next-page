import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { CustomHead } from '../components/custom-head';
import { BlogList } from '../components/blog-list';
import { getPagenatedSortedBlogsData, getPagenationInfo } from '../repositories/blogs';
import { BlogData, PagenationInfo } from '../models';

const BlogsPage: NextPage<{ blogDataList: BlogData[]; pagenationInfo: PagenationInfo; pageId: number }> = ({
  blogDataList,
  pagenationInfo,
  pageId,
}) => {
  return (
    <>
      <CustomHead title="Blogs" page="/blogs" description="@hxrxchangのブログ一覧" type="website"></CustomHead>
      <BlogList blogDataList={blogDataList} pagenationInfo={pagenationInfo} pageId={pageId}></BlogList>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageId = 1;
  const blogDataList = getPagenatedSortedBlogsData(pageId);
  const pagenationInfo = getPagenationInfo(pageId);
  return {
    props: { blogDataList, pagenationInfo, pageId },
  };
};

export default BlogsPage;
