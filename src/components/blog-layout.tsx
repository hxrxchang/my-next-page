'use client';

import React, { useCallback, useState } from 'react';
import { BlogData } from '../models';
import { BlogContent } from './blog-content';
import { DrawerContainer } from './drawer-container';
import { DrawerContent } from './drawer-content';
import { Footer } from './footer';

type Props = {
  content: string;
  blogData: BlogData;
};

const MenuIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <svg
    onClick={onClick}
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="cursor-pointer"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const BlogLayout: React.FC<Props> = ({ content, blogData }) => {
  const [isSpDrawerOpen, setIsSpDrawerOpen] = useState(false);
  const changeIsDrawerOpen = useCallback(() => {
    setIsSpDrawerOpen((prev) => !prev);
  }, []);

  return (
    <div className="px-[2%] md:px-0">
      <DrawerContainer isOpen={isSpDrawerOpen} changeSidenav={changeIsDrawerOpen}>
        <div className="flex flex-col min-h-screen">
          <div className="flex fixed w-full bg-white z-10 border-b border-gray-200 md:hidden">
            <MenuIcon onClick={changeIsDrawerOpen} />
          </div>
          <div className="flex min-h-screen mt-6 md:mt-0">
            <aside className="hidden md:block border-r border-gray-200 basis-[16%]">
              <div className="sticky top-0">
                <DrawerContent />
              </div>
            </aside>
            <div className="basis-full overflow-visible max-w-full break-words md:basis-[84%]">
              <main>
                <BlogContent
                  id={blogData.id}
                  title={blogData.title}
                  createdAt={blogData.createdAt}
                  updatedAt={blogData.updatedAt}
                  content={content}
                  embedTypes={blogData.embedTypes}
                />
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </DrawerContainer>
    </div>
  );
};
