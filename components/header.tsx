import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;

  .profile-image-wrapper {
    flex-basis: 50%;
    text-align: center;
    height: 224px;
  }

  .profile-image {
    border-radius: 50%;
  }

  .profile-wrapper {
    flex-basis: 50%;
    padding-top: 50px;
  }

  .profile-name {
    font-size: 2em;
    font-weight: bold;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  @media (max-width: 700px) {
    display: block;
    text-align: center;
    padding-bottom: 6px;

    .profile-wrapper {
      padding-top: 0px;
    }
  }
`;

export const Header: React.FC<{}> = () => {
  const route = useRouter().asPath;
  return (
    <>
      <StyledHeader>
        <div className="profile-image-wrapper">
          <img className="profile-image" src="/static/chowder.jpeg" alt="" />
        </div>
        <div className="profile-wrapper">
          {route === '/blogs' ? <p className="profile-name">Yuto Hara</p> : <h1 className="profile-name">Yuto Hara</h1>}
          <p className="profile-description">Web Application Developer</p>
        </div>
      </StyledHeader>
    </>
  );
};
