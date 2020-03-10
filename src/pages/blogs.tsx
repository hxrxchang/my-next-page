import { NextPage, GetStaticProps } from 'next';
import { Layout, BlogList } from '../components';
import { CustomHead } from '../components/custom-head';
import { blogDataList, BlogData } from '../../data-sources/blogs/blog-data-list';

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
  return {
    props: { blogDataList },
  };
};

export default BlogsPage;
