import React from 'react';
import styled from 'styled-components';
// import Image from 'next/image';
import { breakPointMedium, breakPointSmall } from '../styles';

const StyledDiv = styled.div`
  position: absolute;
  top: 50vh;
  padding: 0 6%;
  width: 60%;
  display: flex;
  justify-content: space-around;

  .account-icon-wrapper {
    height: 50px;
    width: 50px;
  }

  .account-icon {
    display: block;
    width: 100%;
  }

  @media (max-width: ${breakPointMedium}) {
    position: static;
    margin-top: 90px;
    width: 100%;
    padding: 0;
  }

  @media (max-width: ${breakPointSmall}) {
    position: static;
    margin-top: 90px;
    width: 100%;
    padding: 0;
  }
`;

export const SocialAccounts: React.FC<{}> = ({}) => {
  return (
    <StyledDiv>
      <div className="account-icon-wrapper">
        <a href="https://twitter.com/hxrxchang" rel="noopener">
          {/* <Image
            src="/account-icons/Twitter_Social_Icon_Square_Color.svg"
            alt="twitter icon"
            className="account-icon"
            width={50}
            height={50}
            unoptimized={true}
          /> */}
          <img src="/account-icons/Twitter_Social_Icon_Square_Color.svg" alt="twitter icon" className="account-icon" />
        </a>
      </div>
      <div className="account-icon-wrapper">
        <a href="https://github.com/hxrxchang" rel="noopener">
          {/* <Image
            src="/account-icons/github-icon.svg"
            alt="github icon"
            className="account-icon"
            width={50}
            height={50}
            unoptimized={true}
          /> */}
          <img src="/account-icons/github-icon.svg" alt="github icon" className="account-icon" />
        </a>
      </div>
      <div className="account-icon-wrapper">
        <a href="https://www.wantedly.com/users/5835988" rel="noopener">
          {/* <Image
            src="/account-icons/wantedly_mark.svg"
            alt="wantedly icon"
            className="account-icon"
            width={50}
            height={50}
            unoptimized={true}
          /> */}
          <img src="/account-icons/wantedly_mark.svg" alt="wantedly icon" className="account-icon" />
        </a>
      </div>
    </StyledDiv>
  );
};
