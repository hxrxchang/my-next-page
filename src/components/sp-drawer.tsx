import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import { DrawerContent } from './drawer-content';

const useStyles = makeStyles({
  drawer: {
    width: '60vw',
  },
  fullList: {
    width: 'auto',
  },
});

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  changeSidenav: () => void;
};

export const SpDrawer: React.FC<Props> = ({ children, isOpen, changeSidenav }) => {
  const classes = useStyles();

  return (
    <div>
      {children}
      <Drawer
        classes={{
          paper: classes.drawer,
        }}
        open={isOpen}
        onClose={changeSidenav}
      >
        <DrawerContent></DrawerContent>
      </Drawer>
    </div>
  );
};
