import React from 'react';
import { Menu } from './menu';

type Props = {
  children: React.ReactNode;
  route: string;
};

export const Layout: React.FC<Props> = ({ children, route }) => {
  return (
    <div className="wrapper">
      {route !== '/blog/[id]' && <Menu route={route} />}
      <main>{children}</main>
    </div>
  );
};
