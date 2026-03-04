'use client';

import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { CodeBlock } from './code-block';
import { EmbedType } from '../models';
import { isTwitterEmbed } from '../domains/blog';

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
    <div className="px-0 min-h-[300px] md:px-[10%] md:min-h-0 relative blog-content">
      <h1>{title}</h1>
      <div className="text-right">
        <span>created_at: {createdAt}</span>
        <br />
        <span>updated_at: {updatedAt}</span>
        <br />
        <a className="no-underline hover:underline" href={`https://github.com/hxrxchang/my-next-page/commits/main/data-sources/blogs/${id}.md`}>
          編集履歴
        </a>
      </div>
      <ReactMarkdown source={content} plugins={[gfm]} renderers={{ code: CodeBlock }} escapeHtml={false} />
    </div>
  );
};
