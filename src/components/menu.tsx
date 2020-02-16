import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface MenuProps {
  route: string;
}

export const Menu: React.FC<MenuProps> = ({ route }: MenuProps) => {
  const StyledDiv = styled.div`
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

  return (
    <>
      <StyledDiv>
        <div className="menu-list">
          <div className={route === 'profile' ? 'menu-item selected' : 'menu-item not-selected'}>
            <Link href="/">
              <a>Profile</a>
            </Link>
          </div>
          <div className={route === 'accounts' ? 'menu-item selected' : 'menu-item not-selected'}>
            <Link href="/accounts">
              <a>Accounts</a>
            </Link>
          </div>
          <div className={route === 'blogs' || route === '/blog/[id]' ? 'menu-item selected' : 'menu-item not-selected'}>
            <Link href="/blogs">
              <a>Blogs</a>
            </Link>
          </div>
        </div>
      </StyledDiv>
    </>
  );
};