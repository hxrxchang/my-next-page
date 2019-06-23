import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  border-top: 1px solid #efefef;
  display: flex;
  justify-content: center;
`;

export const Footer: React.FC<{}> = ({}) => {
  return (
    <>
      <StyledFooter>
        <p>
          Source code is <a href="https://github.com/hxrxchang/my-next-page">here.</a>
        </p>
      </StyledFooter>
    </>
  );
};
