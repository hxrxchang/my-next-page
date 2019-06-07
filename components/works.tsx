import React from 'react';
import styled from 'styled-components';

const StyledWorks = styled.div`
  margin-top: 50px;

  display: flex;
  justify-content: space-around;
`;

export const Works: React.FC<{}> = ({}) => {
  return (
    <div>
      <StyledWorks>
        <p>Comming soon ....</p>
      </StyledWorks>
    </div>
  );
};
