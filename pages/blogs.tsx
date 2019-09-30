import { NextPage } from 'next';
import { Layout, BlogList } from '../components';
import Head from '../setting/head';
import { blogDataList, BlogData } from '../docs/blogs/blog-data-list';

const BlogsPage: NextPage<{ blogDataList: BlogData[] }> = ({ blogDataList }) => {
  return (
    <>
      <Head title="Blogs" page="/blogs" description="@hxrxchangのブログ一覧" type="website"></Head>
      <Layout route="blogs">
        <BlogList blogDataList={blogDataList}></BlogList>
      </Layout>
    </>
  );
};

BlogsPage.getInitialProps = async () => {
  return { blogDataList }
}

export default BlogsPage;
