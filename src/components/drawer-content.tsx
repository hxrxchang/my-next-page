import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import styled from 'styled-components';
import { Divider } from '@material-ui/core';

const StyledDiv = styled.div`
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

  .profile-image-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  .profile-image-wrapper {
    width: 120px;
    height: 120px;
  }

  .profile-image {
    border-radius: 50%;
    width: 100%;
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

export const DrawerContent: React.FC<{}> = () => {
  return (
    <StyledDiv>
      <div className="profile">
        <Link href="/blogs">
          <a className="link blog-link">ブログ一覧に戻る</a>
        </Link>
        <Divider></Divider>
        <div className="profile-image-container">
          <div className="profile-image-wrapper">
            {/* <Image src="/chowder.jpeg" className="profile-image" alt="profile image" width={120} height={120} unoptimized={true} /> */}
            <img src="/chowder.jpeg" className="profile-image" alt="profile image" />
          </div>
        </div>
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
