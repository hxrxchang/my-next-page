import { NextPage } from 'next';
import ErrorPage from 'next/error';
import { BlogContent, Layout } from '../../components';
import Head from '../../setting/head';

const BlogPage: NextPage<{ content: string; statusCode: 200 | 404 }> = ({ content, statusCode }) => {
  if (statusCode === 404) {
    return <ErrorPage statusCode={statusCode}></ErrorPage>;
  }
  return (
    <>
      <Head title="Profile" page="/" description="@hxrxchangのWebsite" type="website"></Head>
      <Layout route="blog">
        <BlogContent content={content}></BlogContent>
      </Layout>
    </>
  );
};

BlogPage.getInitialProps = async (context) => {
  try {
    const content = await require(`../../docs/blogs/${context.query.id}.md`);
    return { content: content.default, statusCode: 200 };
  } catch (e) {
    return { content: '', statusCode: 404 };
  }
};

export default BlogPage;
