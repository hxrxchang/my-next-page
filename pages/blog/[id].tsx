import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { BlogContent, Layout } from '../../components';
import Head from '../../setting/head';
import { blogDataList, BlogData } from '../../docs/blogs/blog-data-list';

interface Props {
  content: string;
  statusCode: 200 | 404;
  blogData: BlogData | null;
}

const BlogPage: NextPage<Props> = ({ content, statusCode, blogData }) => {
  if (statusCode === 404) {
    const e: any = new Error();
    e.code = 'ENOENT';
    throw e;
  }
  const router = useRouter();
  return (
    <>
      <Head title={blogData!.title} page={router.asPath} description={blogData!.description} type="website"></Head>
      <Layout route={router.route}>
        <BlogContent content={content}></BlogContent>
      </Layout>
    </>
  );
};

BlogPage.getInitialProps = async (context) => {
  try {
    const content = await require(`../../docs/blogs/${context.query.id}.md`);
    const blogData = blogDataList.find((blogData) => blogData.id === context.query.id);
    if (!blogData) {
      throw new Error('blogData is not found');
    }
    return { content: content.default, statusCode: 200, blogData };
  } catch (e) {
    return { content: '', statusCode: 404, blogData: null };
  }
};

export default BlogPage;
