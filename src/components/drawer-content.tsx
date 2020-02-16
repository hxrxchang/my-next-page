import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Divider } from '@material-ui/core';

export const DrawerContent: React.FC<{}> = () => {
  const StyledDiv = styled.div`
    height: 100vh;

    .profile {
      padding-top: 20vh;
    }

    .link {
      cursor: pointer;
      text-decoration: none;
      display: block;
      text-align: center;
      margin-bottom: 20px;
    }

    .profile-image {
      display: block;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
    }

    .name {
      text-align: center;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .blog-link {
      font-weight: bold;
    }
  `;

  return (
    <StyledDiv>
      <div className="profile">
        <Link href="/blogs">
          <a className="link blog-link">ブログ一覧に戻る</a>
        </Link>
        <Divider></Divider>
        <img className="profile-image" src="/chowder.jpeg" alt="" />
        <p className="name">Yuto Hara</p>
        <Link href="/">
          <a className="link">Profile</a>
        </Link>
        <Link href="/accounts">
          <a className="link">Accounts</a>
        </Link>
      </div>
    </StyledDiv>
  );
};
