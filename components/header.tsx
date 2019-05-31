import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;

  .profile-image-wrapper {
    flex-basis: 50%;
    text-align: center;
  }

  .profile-image {
    border-radius: 50%;
  }

  .profile-wrapper {
    flex-basis: 50%;
    padding-top: 50px;
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
  return (
    <>
      <StyledHeader>
        <div className="profile-image-wrapper">
          <img className="profile-image" src="/static/chowder.jpeg" alt="" />
        </div>
        <div className="profile-wrapper">
          <h1 className="profile-name">hxrxchang</h1>
          <p className="profile-description">Web Frontend Developper</p>
        </div>
      </StyledHeader>
    </>
  );
};
