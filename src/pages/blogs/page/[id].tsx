import React from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { CustomHead } from '../../../components/custom-head';
import { BlogList } from '../../../components/blog-list';
import { getSortedBlogsData } from '../../../repositories/blogs';
import { BlogData } from '../../../models';

const BlogsPage: NextPage<{ blogDataList: BlogData[] }> = ({ blogDataList }) => {
  return (
    <>
      <CustomHead title="Blogs" page="/blogs" description="@hxrxchangのブログ一覧" type="website"></CustomHead>
      <BlogList blogDataList={blogDataList}></BlogList>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { id: '1' } }];
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async () => {
  const blogDataList = getSortedBlogsData();
  return {
    props: { blogDataList },
  };
};

export default BlogsPage;
