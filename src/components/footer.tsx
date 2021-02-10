import React from 'react';
import styled from 'styled-components';

const Styled = styled.footer`
  border-top: 1px solid #efefef;
  text-align: center;
`;

export const Footer: React.FC<{}> = ({}) => {
  return (
    <Styled>
      <p>
        Source code is{' '}
        <a href="https://github.com/hxrxchang/my-next-page" target="_blank" rel="noopener">
          here.
        </a>
      </p>
      <p>&copy; 2019 hxrxchang</p>
    </Styled>
  );
};
