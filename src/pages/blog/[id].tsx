import { Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { BlogContent } from '../../components/blog-content';
import { CustomHead } from '../../components/custom-head';
import { DrawerContainer } from '../../components/drawer-container';
import { DrawerContent } from '../../components/drawer-content';
import { Footer } from '../../components/footer';
import { BlogData } from '../../models';
import { getAllBlogIds, getBlogData } from '../../repositories/blogs';
import { breakPointMedium } from '../../styles';

type Props = {
  content: string;
  blogData: BlogData;
};

const Styled = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .sp-header {
    display: none;
  }

  .drawer-not-sp {
    width: 240px;
    flex-shrink: 0;
  }

  .content-wrapper {
    display: flex;
    min-height: 100vh;
  }

  .pc-drawer-container {
    border-right: 1px solid #efefef;
    flex-basis: 16%;
  }

  .pc-drawer {
    position: sticky;
    top: 0px;
  }

  .content {
    flex-basis: 84%;
  }

  @media (max-width: ${breakPointMedium}) {
    padding: 0 2%;

    .sp-header {
      display: flex;
      position: fixed;
      width: 100%;
      background: white;
      z-index: 1;
    }

    .content-wrapper {
      margin-top: 24px;
    }

    .pc-drawer-container {
      display: none;
    }

    .content {
      flex-basis: 100%;
      overflow: visible;
      max-width: 100%;
      word-break: break-word;
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
      <CustomHead title={blogData.title} page={router.asPath} description={blogData.description} type="website"></CustomHead>
      <Styled>
        <DrawerContainer isOpen={isSpDrawerOpen} changeSidenav={changeIsDrawerOpen}>
          <div className="wrapper">
            <div className="sp-header">
              <MenuIcon onClick={changeIsDrawerOpen} fontSize="large"></MenuIcon>
              <Divider></Divider>
            </div>
            <div className="content-wrapper">
              <aside className="pc-drawer-container">
                <div className="pc-drawer">
                  <DrawerContent></DrawerContent>
                </div>
              </aside>
              <div className="content">
                <BlogContent
                  id={blogData.id}
                  title={blogData.title}
                  createdAt={blogData.createdAt}
                  updatedAt={blogData.updatedAt}
                  content={content}
                  embedTypes={blogData.embedTypes}
                ></BlogContent>
                <div className="footer">
                  <Footer></Footer>
                </div>
              </div>
            </div>
          </div>
        </DrawerContainer>
      </Styled>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogIds();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogId = params!.id as string;
  const { content, blogData } = getBlogData(blogId);
  return {
    props: { content, blogData },
  };
};

export default Blog;
