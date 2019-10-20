import React from 'react';
import { Menu } from './index';
import { isMenuShown } from '../domain/layout';

interface Props {
  children: React.ReactNode;
  route: string;
}

export const Layout: React.FC<Props> = ({ children, route }) => {
  return (
    <div className="wrapper">
      {isMenuShown(route) && <Menu route={route} />}
      <main>{children}</main>
    </div>
  );
};
