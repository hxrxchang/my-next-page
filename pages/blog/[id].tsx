import { NextPage } from 'next';
import { BlogContent } from '../../components';

const BlogPage: NextPage<{ content: string }> = ({ content }) => {
  return (
    <>
      <BlogContent content={content}></BlogContent>
    </>
  );
};

BlogPage.getInitialProps = async (context) => {
  console.log(context.query.id);
  const content = await require(`../../docs/blogs/${context.query.id}.md`);
  return { content: content.default };
};

export default BlogPage;
