import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { CodeBlock } from './code-block';
import { EmbedType } from '../models';
import { isTwitterEmbed } from '../domains/blog';
import { breakPointMedium } from '../styles';

const StyledDiv = styled.div`
  padding: 0 10%;
  position: relative;
  .date-area {
    text-align: right;
  }

  .content-history {
    text-decoration: none;
  }

  img {
    max-width: 60%;
  }

  blockquote {
    border-left: 3px solid gray;
    color: gray;
    padding: 8px;
  }

  code {
    background: rgba(33, 90, 160, 0.07);
    padding: 4px;
    border-radius: 4px;
  }

  .iframe-wrapper {
    width: 60%;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: ${breakPointMedium}) {
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

export const BlogContent: React.FC<{
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  embedTypes: EmbedType[];
}> = ({ id, title, createdAt, updatedAt, content, embedTypes }) => {
  useEffect(() => {
    if (embedTypes.length && isTwitterEmbed(embedTypes)) {
      const twttr = (window as any).twttr;
      if (typeof twttr === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.charset = 'utf-8';
        script.async = true;
        document.body.appendChild(script);
      } else {
        twttr.widgets.load();
      }
    }
  }, []);

  return (
    <StyledDiv>
      <h1>{title}</h1>
      <div className="date-area">
        <span>created_at: {createdAt}</span>
        <br></br>
        <span>updated_at: {updatedAt}</span>
        <br></br>
        <a className="content-history" href={`https://github.com/hxrxchang/my-next-page/commits/main/data-sources/blogs/${id}.md`}>
          編集履歴
        </a>
      </div>
      <ReactMarkdown source={content} plugins={[gfm]} renderers={{ code: CodeBlock }} escapeHtml={false} />
    </StyledDiv>
  );
};
