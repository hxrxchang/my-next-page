import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Icon from '@material-ui/core/Icon';
import styled from 'styled-components';
import { BlogContent, Layout, DrawerAndContent } from '../../components';

import Head from '../../setting/head';
import { blogDataList, BlogData } from '../../docs/blogs/blog-data-list';

interface Props {
  content: string;
  statusCode: 200 | 404;
  blogData: BlogData | null;
}

const StyledPage = styled.div`
  .drawer-and-content {
    display: flex;
  }

  .menu-icon {
    display: none;
  }

  .drawer-not-sp {
    width: 240px;
    flex-shrink: 0;
  }

  .content {
    flex-grow: 1;
  }

  @media (max-width: 700px) {
    .menu-icon {
      display: block;
    }

    .drawer-sp {
    }
  }
`;

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
      <DrawerAndContent>
        <StyledPage>
          <div className="drawer-and-content">
            <div className="content">
              <Layout route={router.route}>
                <div className="menu-icon">
                  <Icon>menu</Icon>
                </div>
                <BlogContent content={content}></BlogContent>
              </Layout>
            </div>
          </div>
        </StyledPage>
      </DrawerAndContent>
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
