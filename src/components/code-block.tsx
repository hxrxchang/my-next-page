import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

interface Props {
  value: string;
  language?: string;
}

export const CodeBlock: React.FC<Props> = ({ value, language }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};
