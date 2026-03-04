import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 text-center">
      <div>
        <a className="p-2.5 inline-block" href="https://github.com/hxrxchang/my-next-page" target="_blank" rel="noopener">
          Source code
        </a>
        <span>|</span>
        <a className="p-2.5 inline-block" href="/feed.xml" target="_blank" rel="noopener">
          RSS feed
        </a>
      </div>
      <p>&copy; 2019 hxrxchang</p>
    </footer>
  );
};
