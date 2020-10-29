import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { breakPointMedium, breakPointSmall } from '../styles';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;

  .profile-image-wrapper {
    flex-basis: 50%;
    text-align: center;
    height: 200px;
    padding-top: 20px;
  }

  .profile-image {
    height: 200px;
    width: 200px;
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
    }

    .profile-image {
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
    }

    .profile-image {
      height: 144px;
      width: 144px;
      border-radius: 50%;
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
      <StyledHeader>
        <div className="profile-image-wrapper">
          <Image className="profile-image" src="/chowder.jpeg" unsized={true} />
        </div>
        <div className="profile-wrapper">
          <h1 className="profile-name">Yuto Hara</h1>
          <p className="profile-description">Web Application Developer</p>
        </div>
      </StyledHeader>
    </>
  );
};
