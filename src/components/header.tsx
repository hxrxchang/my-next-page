import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="block text-center pb-1.5 sm:flex sm:justify-around sm:pb-5 sm:text-left">
      <div className="sm:basis-1/2 sm:flex sm:justify-center">
        <div className="text-center pt-5 h-36 w-36 mx-auto sm:h-[180px] sm:w-[180px] sm:mx-0 md:h-[200px] md:w-[200px]">
          <img className="w-full rounded-full" src="/tuna2.jpeg" alt="profile image" />
        </div>
      </div>
      <div className="pt-0 sm:basis-1/2 sm:pt-[50px]">
        <h1 className="text-[1.4em] font-bold my-[0.67em] sm:text-[2em]">Yuto Hara</h1>
        <p>Software Engineer</p>
      </div>
    </header>
  );
};
