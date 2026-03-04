import React from 'react';
import Link from 'next/link';

type MenuProps = {
  route: string;
};

export const Menu: React.FC<MenuProps> = ({ route }) => {
  const baseClass = "font-bold cursor-pointer";
  const selectedClass = "border-b-4 border-red-500";
  const notSelectedClass = "hover:border-b-4 hover:border-gray-400";

  return (
    <nav className="border-b border-gray-200">
      <div className="flex justify-around">
        <div className={`${baseClass} ${route === '/' ? selectedClass : notSelectedClass}`}>
          <Link href="/" className="block pb-2.5 text-black no-underline">
            Profile
          </Link>
        </div>
        <div className={`${baseClass} ${route === '/blogs' || route === '/blogs/page/[id]' ? selectedClass : notSelectedClass}`}>
          <Link href="/blogs" className="block pb-2.5 text-black no-underline">
            Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
};
