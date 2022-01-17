import React from 'react';
import styled from 'styled-components';

const Styled = styled.footer`
  border-top: 1px solid #efefef;
  text-align: center;

  .link {
    padding: 10px;
  }
`;

export const Footer: React.FC<{}> = ({}) => {
  return (
    <Styled>
      <div>
        <a className="link" href="https://github.com/hxrxchang/my-next-page" target="_blank" rel="noopener">
          Source code
        </a>
        <span>|</span>
        <a className="link" href="/feed.xml" target="_blank" rel="noopener">
          RSS feed
        </a>
      </div>
      <p>&copy; 2019 hxrxchang</p>
    </Styled>
  );
};
