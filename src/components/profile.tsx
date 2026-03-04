import React from 'react';
import ReactMarkdown from 'react-markdown';

export const Profile: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="w-full sm:w-4/5 sm:mx-auto">
      <ReactMarkdown source={content} />
    </div>
  );
};
