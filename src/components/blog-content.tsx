import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from './code-block';

const StyledDiv = styled.div`
  padding: 0 10%;
  position: relative;
  .date-area {
    text-align: right;
  }

  img {
    max-width: 60%;
  }

  .iframe-wrapper {
    width: 60%;
  }

  @media (max-width: 700px) {
    padding: 0;

    min-height: 300px;

    img {
      max-width: 100%;
    }

    .iframe-wrapper {
      width: 100%;
    }
  }
`;

export const BlogContent: React.FC<{ title: string; createdAt: string; updatedAt: string; content: string }> = ({
  title,
  createdAt,
  updatedAt,
  content,
}) => {
  useEffect(() => {
    const twttr = (window as any).twttr;
    twttr.widgets.load();
  }, []);
  return (
    <StyledDiv>
      <h1>{title}</h1>
      <div className="date-area">
        <span>created_at: {createdAt}</span>
        <br></br>
        <span>updated_at: {updatedAt}</span>
      </div>
      <ReactMarkdown source={content} renderers={{ code: CodeBlock }} escapeHtml={false} />
    </StyledDiv>
  );
};
