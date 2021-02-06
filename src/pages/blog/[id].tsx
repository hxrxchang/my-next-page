import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { BlogLayout } from '../../components/blog-layout';
import { CustomHead } from '../../components/custom-head';
import { BlogData } from '../../models';
import { getAllBlogIds, getBlogData } from '../../repositories/blogs';

type Props = {
  content: string;
  blogData: BlogData;
};

const Blog: NextPage<Props> = ({ content, blogData }) => {
  const router = useRouter();

  return (
    <>
      <CustomHead title={blogData.title} page={router.asPath} description={blogData.description} type="website"></CustomHead>
      <BlogLayout content={content} blogData={blogData}></BlogLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogIds();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogId = params!.id as string;
  const { content, blogData } = getBlogData(blogId);
  return {
    props: { content, blogData },
  };
};

export default Blog;
