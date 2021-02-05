import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { CustomHead } from '../components/custom-head';
import { Layout } from '../components/layout';
import { BlogList } from '../components/blog-list';
import { getSortedBlogsData } from '../repositories/blogs';
import { BlogData } from '../models';
import { useRouter } from 'next/router';

const BlogsPage: NextPage<{ blogDataList: BlogData[] }> = ({ blogDataList }) => {
  const { route } = useRouter();
  return (
    <>
      <CustomHead title="Blogs" page="/blogs" description="@hxrxchangのブログ一覧" type="website"></CustomHead>
      <Layout route={route}>
        <BlogList blogDataList={blogDataList}></BlogList>
      </Layout>
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
