import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

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

export const PcDrawer = (props: ResponsiveDrawerProps) => {
  const { children } = props;
  const classes = useStyles();

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
};
