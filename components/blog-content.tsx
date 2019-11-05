import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from './code-block';

export const BlogContent: React.FC<{ content: string }> = ({ content }) => {
  const StyledDiv = styled.div`
    padding: 0 10%;

    img {
      max-width: 60%;
    }

    @media (max-width: 700px) {
      padding: 0;

      min-height: 300px;

      img {
        max-width: 100%;
      }
    }
  `;

  return (
    <StyledDiv>
      <ReactMarkdown source={content} renderers={{ code: CodeBlock }} />
    </StyledDiv>
  );
};
