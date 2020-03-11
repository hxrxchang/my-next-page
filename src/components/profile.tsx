import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Profile: React.FC<{ content: string }> = ({ content }) => {
  return (
    <StyledDiv>
      <div>
        <ReactMarkdown source={content} />
      </div>
    </StyledDiv>
  );
};
