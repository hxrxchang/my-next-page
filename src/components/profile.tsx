import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const Profile: React.FC<{ content: string }> = ({ content }) => {
  const StyledDiv = styled.div`
    display: flex;
    justify-content: space-around;
  `;

  return (
    <StyledDiv>
      <div>
        <ReactMarkdown source={content} />
      </div>
    </StyledDiv>
  );
};
