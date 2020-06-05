import { NextPage, GetStaticProps } from 'next';
import { Layout, BlogList } from '../components';
import { CustomHead } from '../components/custom-head';
import { getSortedBlogsData } from '../repositories/blogs';
import { BlogData } from '../models';

const BlogsPage: NextPage<{ blogDataList: BlogData[] }> = ({ blogDataList }) => {
  return (
    <>
      <CustomHead title="Blogs" page="/blogs" description="@hxrxchangのブログ一覧" type="website"></CustomHead>
      <Layout route="blogs">
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
