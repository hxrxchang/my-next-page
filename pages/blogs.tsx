import React from 'react';
import { Layout, BlogList } from '../components';
import Head from '../setting/head';

const BlogsPage: React.FC<{}> = () => {
  return (
    <>
      <Head title="Blogs" page="/blogs" description="@hxrxchangのブログ一覧" type="website"></Head>
      <Layout route="blogs">
        <BlogList></BlogList>
      </Layout>
    </>
  );
};

export default BlogsPage;
