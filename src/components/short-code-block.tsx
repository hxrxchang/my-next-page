import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

type Props = {
  value: string;
};

export const ShortCodeBlock: React.FC<Props> = ({ value }) => {
  return <SyntaxHighlighter>{value}</SyntaxHighlighter>;
};
