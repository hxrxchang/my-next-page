import React from 'react';
import Link from 'next/link';

export const DrawerContent: React.FC<{}> = () => {
  return (
    <div className="pt-[20vh]">
      <Link href="/blogs" className="cursor-pointer no-underline block text-center mb-5 font-bold">
        <span>ブログ一覧に戻る</span>
      </Link>
      <hr className="border-0 border-t border-gray-200 my-2.5" />
      <div className="mt-5 flex justify-center">
        <div className="w-[120px] h-[120px]">
          <img src="/tuna2.jpeg" className="rounded-full w-full" alt="profile image" />
        </div>
      </div>
      <p className="text-center font-bold mb-5">Yuto Hara</p>
      <Link href="/" className="cursor-pointer no-underline block text-center mb-5">
        <span>Profile</span>
      </Link>
    </div>
  );
};
