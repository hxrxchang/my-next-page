import React from 'react';
import { Header } from './header';
import { Menu } from './menu';
import { Footer } from './footer';

type Props = {
  children: React.ReactNode;
  currentPath: string;
};

export function PageLayout({ children, currentPath }: Props) {
  return (
    <div className="flex flex-col min-h-screen px-[2%] sm:px-[8%] md:px-[14%]">
      <div className="grow">
        <Header />
        <Menu route={currentPath} />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
