import React from 'react';
import styled from 'styled-components';
import { breakPointSmall } from '../styles';

const StyledDiv = styled.div`
  position: absolute;
  top: 50vh;
  padding: 0 6%;
  width: 60%;
  display: flex;
  justify-content: space-around;

  .account-icon {
    display: block;
    height: 50px;
    width: 50px;
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
      <a href="https://twitter.com/hxrxchang" rel="noopener">
        <img src="account-icons/Twitter_Social_Icon_Square_Color.svg" alt="" className="account-icon" />
      </a>
      <a href="https://github.com/hxrxchang" rel="noopener">
        <img src="account-icons/github-icon.svg" alt="" className="account-icon" />
      </a>
      <a href="https://www.wantedly.com/users/5835988" rel="noopener">
        <img src="account-icons/wantedly_mark.svg" alt="" className="account-icon" />
      </a>
    </StyledDiv>
  );
};
