import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

type MenuProps = {
  route: string;
};

const Styled = styled.div`
  border-bottom: 1px solid #efefef;

  .menu-list {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  .menu-item {
    font-weight: bold;
    cursor: pointer;
  }

  .selected {
    border-bottom: 4px solid red;
  }

  .not-selected:hover {
    border-bottom: 4px solid silver;
  }

  a {
    text-decoration: none;
    color: black;
    display: block;
    padding-bottom: 10px;
  }
`;

export const Menu: React.FC<MenuProps> = ({ route }: MenuProps) => {
  return (
    <Styled>
      <div className="menu-list">
        <div className={route === '/' ? 'menu-item selected' : 'menu-item not-selected'}>
          <Link href="/">
            <a>Profile</a>
          </Link>
        </div>
        <div className={route === '/blogs' || route === '/blogs/page/[id]' ? 'menu-item selected' : 'menu-item not-selected'}>
          <Link href="/blogs">
            <a>Blogs</a>
          </Link>
        </div>
      </div>
    </Styled>
  );
};
