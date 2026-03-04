'use client';

import React from 'react';
import { DrawerContent } from './drawer-content';

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  changeSidenav: () => void;
};

export const DrawerContainer: React.FC<Props> = ({ children, isOpen, changeSidenav }) => {
  return (
    <div>
      {children}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/50 z-[100] transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={changeSidenav}
      />
      <div
        className={`fixed top-0 left-0 w-[60vw] h-full bg-white z-[101] overflow-y-auto transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <DrawerContent />
      </div>
    </div>
  );
};
