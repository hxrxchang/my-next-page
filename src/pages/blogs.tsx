import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { CustomHead } from '../components/custom-head';
import { BlogList } from '../components/blog-list';
import { getSortedBlogsData } from '../repositories/blogs';
import { BlogData } from '../models';

const BlogsPage: NextPage<{ blogDataList: BlogData[] }> = ({ blogDataList }) => {
  return (
    <>
      <CustomHead title="Blogs" page="/blogs" description="@hxrxchangのブログ一覧" type="website"></CustomHead>
      <BlogList blogDataList={blogDataList}></BlogList>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogDataList = getSortedBlogsData();
  return {
    props: { blogDataList },
  };
};

export default BlogsPage;
