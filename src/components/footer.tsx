import React from 'react';
import styled from 'styled-components';

export const Footer: React.FC<{}> = ({}) => {
  const StyledFooter = styled.footer`
    border-top: 1px solid #efefef;
    display: flex;
    justify-content: center;
  `;

  return (
    <>
      <StyledFooter>
        <div>
          <p>
            Source code is{' '}
            <a href="https://github.com/hxrxchang/my-next-page" target="_blank" rel="noopener">
              here.
            </a>
          </p>
          <p>&copy; 2019 hxrxchang</p>
        </div>
      </StyledFooter>
    </>
  );
};
