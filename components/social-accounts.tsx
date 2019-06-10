import React from 'react';
import styled from 'styled-components';

const StyledSocialAccount = styled.div`
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
    <StyledSocialAccount>
      <div className="accounts">
        <a href="https://twitter.com/hxrxchang">
          <img src="/static/Twitter_Social_Icon_Square_Color.png" alt="" className="account-icon" />
        </a>
        <a href="https://github.com/hxrxchang">
          <img src="/static/GitHub-Mark-64px.png" alt="" className="account-icon" />
        </a>
        <a href="https://www.wantedly.com/users/5835988">
          <img src="/static/wantedly_mark.png" alt="" className="account-icon" />
        </a>
      </div>
    </StyledSocialAccount>
  );
};
