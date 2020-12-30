import React from 'react';
import styled from 'styled-components';
// import Image from 'next/image';
import { breakPointMedium, breakPointSmall } from '../styles';

const Styled = styled.header`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;

  .profile-image-container {
    flex-basis: 50%;
    display: flex;
    justify-content: center;
  }

  .profile-image-wrapper {
    text-align: center;
    padding-top: 20px;
    height: 200px;
    width: 200px;
  }

  .profile-image {
    width: 100%;
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

  @media (max-width: ${breakPointMedium}) {
    .profile-image-wrapper {
      padding-top: 20px;
      height: 180px;
      width: 180px;
    }
  }

  @media (max-width: ${breakPointSmall}) {
    display: block;
    text-align: center;
    padding-bottom: 6px;

    .profile-image-wrapper {
      text-align: center;
      height: 144px;
      width: 144px;
    }

    .profile-wrapper {
      padding-top: 0px;
    }

    .profile-name {
      font-size: 1.4em;
      font-weight: bold;
      margin-block-start: 0.67em;
      margin-block-end: 0.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
  }
`;

export const Header: React.FC<{}> = () => {
  return (
    <>
      <Styled>
        <div className="profile-image-container">
          <div className="profile-image-wrapper">
            {/* <Image className="profile-image" src="/chowder.jpeg" alt="profile image" width={200} height={200} unoptimized={true} /> */}
            <img className="profile-image" src="/chowder.jpeg" alt="profile image" />
          </div>
        </div>
        <div className="profile-wrapper">
          <h1 className="profile-name">Yuto Hara</h1>
          <p className="profile-description">Web Application Developer</p>
        </div>
      </Styled>
    </>
  );
};
