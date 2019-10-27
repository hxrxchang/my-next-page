import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export const DrawerContent: React.FC<{}> = () => {
  const StyledWrapper = styled.div`
    height: 100vh;

    .profile {
      padding-top: 20vh;
    }

    .link {
      cursor: pointer;
      text-decoration: none;
      display: block;
      text-align: center;
    }

    .profile-image {
      display: block;
      border-radius: 50%;
      width: 120px;
      margin-left: auto;
      margin-right: auto;
    }

    .name {
      text-align: center;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .profile-link {
      margin-bottom: 20px;
    }
  `;

  return (
    <StyledWrapper>
      <div className="profile">
        <img className="profile-image" src="/static/chowder.jpeg" alt="" />
        <p className="name">Yuto Hara</p>
        <Link href="/">
          <a className="link profile-link">Profile</a>
        </Link>
        <Link href="/accounts">
          <a className="link profile-link">Accounts</a>
        </Link>
        <Link href="/blogs">
          <a className="link profile-link">Blogs</a>
        </Link>
      </div>
    </StyledWrapper>
  );
};
