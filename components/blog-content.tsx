import React from 'react';
import ReactMarkdown from 'react-markdown';

export const BlogContent: React.FC<{ content: string }> = ({ content }) => {
  return <ReactMarkdown source={content} />;
};
