import React, { useState, useCallback } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Icon from '@material-ui/core/Icon';
import { Divider } from '@material-ui/core';
import styled from 'styled-components';

import { BlogContent, Layout, PcDrawer, SpDrawer, Footer } from '../../components';
import { CustomHead } from '../../components/custom-head';
import { blogDataList, BlogData } from '../../../data-sources/blogs/blog-data-list';

interface Props {
  content: string;
  blogData: BlogData | null;
}

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
      position: fixed;
      width: 100%;
      background: white;
    }

    .content {
      margin-top: 24px;
    }
  }
`;

const Blog: NextPage<Props> = ({ content, blogData }) => {
  const router = useRouter();
  const [isSpDrawerOpen, setIsSpDrawerOpen] = useState(false);
  const changeIsDrawerOpen = useCallback(() => {
    setIsSpDrawerOpen((prev) => !prev);
  }, []);

  return (
    <>
      <CustomHead title={blogData!.title} page={router.asPath} description={blogData!.description} type="website"></CustomHead>
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
                <Icon onClick={changeIsDrawerOpen} fontSize="large">
                  menu
                </Icon>
                <Divider></Divider>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogDataList.map((blog) => {
    return {
      params: {
        id: blog.id,
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const content = await require(`../../../data-sources/blogs/${params!.id}.md`);
  const blogData = blogDataList.find((blogData) => blogData.id === params!.id);
  return {
    props: { content: content.default, blogData },
  };
};

export default Blog;
