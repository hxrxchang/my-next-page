import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import styled from 'styled-components';

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

  const StyledPage = styled.div`
    .pc {
      display: block;
    }

    .sp {
      display: none;
    }

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
      .pc {
        display: none;
      }

      .sp {
        display: block;
      }

      .menu-icon {
        display: block;
      }
    }
  `;
  return (
    <>
      <Head title={blogData!.title} page={router.asPath} description={blogData!.description} type="website"></Head>
      <StyledPage>
        <div className="pc">
          <ResponsiveDrawer>
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
          </ResponsiveDrawer>
        </div>
        <div className="sp">
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: '20%',
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: '20%',
    },
    content: {
      flexGrow: 1,
    },
  }),
);

interface ResponsiveDrawerProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container?: Element;
  children: React.ReactNode;
}

function ResponsiveDrawer(props: ResponsiveDrawerProps) {
  const { container, children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Divider />
      <div>hoge</div>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp>
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>{children}</div>
    </div>
  );
}
