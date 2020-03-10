import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 100px;
  .accounts {
    padding: 0 100px;
    display: flex;
    justify-content: space-around;
  }

  .account-icon {
    display: block;
    height: 50px;
    width: 50px;
  }

  @media (max-width: 700px) {
    margin-top: 40px;
    display: flex;
    justify-content: space-around;

    .accounts {
      display: block;
    }

    .account-icon {
      margin: 40px 0;
    }
  }
`;

export const SocialAccounts: React.FC<{}> = ({}) => {
  return (
    <StyledDiv>
      <div className="accounts">
        <a href="https://twitter.com/hxrxchang" rel="noopener">
          <img src="account-icons/Twitter_Social_Icon_Square_Color.svg" alt="" className="account-icon" />
        </a>
        <a href="https://github.com/hxrxchang" rel="noopener">
          <img src="account-icons/github-icon.svg" alt="" className="account-icon" />
        </a>
        <a href="https://www.wantedly.com/users/5835988" rel="noopener">
          <img src="account-icons/wantedly_mark.svg" alt="" className="account-icon" />
        </a>
      </div>
    </StyledDiv>
  );
};
