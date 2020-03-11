import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const StyledDiv = styled.div`
  margin-top: 50px;

  display: flex;
  justify-content: space-around;
`;

export const Works: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div>
      <StyledDiv>
        <ReactMarkdown source={content} />
      </StyledDiv>
    </div>
  );
};
