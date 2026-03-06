import React from 'react';
import ReactMarkdown from 'react-markdown';

export const Works: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="mt-12 flex justify-around">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};
