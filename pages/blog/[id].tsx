import React, { useState, useCallback } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Icon from '@material-ui/core/Icon';
import { Divider } from '@material-ui/core';

import styled from 'styled-components';

import { BlogContent, Layout, PcDrawer, SpDrawer, Footer } from '../../components';

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
  const [isSpDrawerOpen, setIsSpDrawerOpen] = useState(false);
  const changeIsDrawerOpen = useCallback(() => {
    setIsSpDrawerOpen((prev) => !prev);
  }, []);

  const StyledPage = styled.div`
    .pc {
      display: block;
    }

    .sp {
      display: none;
    }

    .drawer-and-content {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .header {
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
      padding: 0 2%;
      .pc {
        display: none;
      }

      .sp {
        display: block;
      }

      .header {
        display: block;
        position: fixed;
        width: 100%;
        background: white;
      }

      .content {
        margin-top: 24px;
      }
    }
  `;
  return (
    <>
      <Head title={blogData!.title} page={router.asPath} description={blogData!.description} type="website"></Head>
      <StyledPage>
        <div className="pc">
          <PcDrawer>
            <div className="drawer-and-content">
              <div className="content">
                <Layout route={router.route}>
                  <BlogContent content={content}></BlogContent>
                </Layout>
              </div>
              <div className="footer">
                <Footer></Footer>
              </div>
            </div>
          </PcDrawer>
        </div>
        <div className="sp">
          <SpDrawer isOpen={isSpDrawerOpen} changeSidenav={changeIsDrawerOpen}>
            <div className="drawer-and-content">
              <div className="header">
                <Icon onClick={changeIsDrawerOpen}>menu</Icon>
                <Divider></Divider>{' '}
              </div>
              <div className="content">
                <Layout route={router.route}>
                  <BlogContent content={content}></BlogContent>
                </Layout>
              </div>
              <div className="footer">
                <Footer></Footer>
              </div>
            </div>
          </SpDrawer>
        </div>
      </StyledPage>
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
