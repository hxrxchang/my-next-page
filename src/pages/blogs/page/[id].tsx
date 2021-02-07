import React from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { CustomHead } from '../../../components/custom-head';
import { BlogList } from '../../../components/blog-list';
import { getBlogsPagePaths, getPagenatedSortedBlogsData, getPagenationInfo } from '../../../repositories/blogs';
import { BlogData, PagenationInfo } from '../../../models';

const BlogsPage: NextPage<{ blogDataList: BlogData[]; pagenationInfo: PagenationInfo; pageId: number }> = ({
  blogDataList,
  pagenationInfo,
  pageId,
}) => {
  return (
    <>
      <CustomHead title="Blogs" page="/blogs" description="@hxrxchangのブログ一覧" type="website"></CustomHead>
      <BlogList blogDataList={blogDataList} pageId={pageId} pagenationInfo={pagenationInfo}></BlogList>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getBlogsPagePaths();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params!.id as string;
  const pageId = parseInt(id, 10);
  const blogDataList = getPagenatedSortedBlogsData(pageId);
  const pagenationInfo = getPagenationInfo(pageId);
  return {
    props: { blogDataList, pagenationInfo, pageId },
  };
};

export default BlogsPage;
