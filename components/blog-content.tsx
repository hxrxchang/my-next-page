import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const StyledWrapper = styled.div`
  padding: 0 10%;

  @media (max-width: 700px) {
    padding: 0;

    min-height: 300px;
  }
`;

export const BlogContent: React.FC<{ content: string }> = ({ content }) => {
  return (
    <StyledWrapper>
      <ReactMarkdown source={content} />
    </StyledWrapper>
  );
};
