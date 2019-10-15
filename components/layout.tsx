import React from 'react';
import { Menu } from './index';

interface Props {
  children: React.ReactNode;
  route: string;
}

export const Layout: React.FC<Props> = ({ children, route }) => {
  return (
    <div className="wrapper">
      <Menu route={route} />
      <main>{children}</main>
    </div>
  );
};
