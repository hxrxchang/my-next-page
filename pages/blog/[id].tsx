import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Icon from '@material-ui/core/Icon';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import List  Item from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import styled from 'styled-components';
import { BlogContent, Layout } from '../../components';

import Head from '../../setting/head';
import { blogDataList, BlogData } from '../../docs/blogs/blog-data-list';

interface Props {
  content: string;
  statusCode: 200 | 404;
  blogData: BlogData | null;
}

const StyledDrawer = styled.div``;

const drawer = <StyledDrawer>hoge</StyledDrawer>;

const StyledPage = styled.div`
  .drawer-and-content {
    display: flex;
  }

  .menu-icon {
    display: none;
  }

  @media (max-width: 700px) {
    .menu-icon {
      display: block;
    }
  }
`;

const BlogPage: NextPage<Props> = ({ content, statusCode, blogData }) => {
  const [isSidenavOpen] = useState(true);

  if (statusCode === 404) {
    const e: any = new Error();
    e.code = 'ENOENT';
    throw e;
  }
  const router = useRouter();
  return (
    <>
      <Head title={blogData!.title} page={router.asPath} description={blogData!.description} type="website"></Head>
      <StyledPage>
        <div className="drawer-and-content">
          <Drawer open={isSidenavOpen} variant="permanent">
            {drawer}
          </Drawer>
          <Layout route={router.route}>
            <div className="menu-icon">
              <Icon>menu</Icon>
            </div>
            <BlogContent content={content}></BlogContent>
          </Layout>
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
