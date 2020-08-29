import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type Props = {
  value: string;
};

export const ShortCodeBlock: React.FC<Props> = ({ value }) => {
  return <SyntaxHighlighter style={agate}>{value}</SyntaxHighlighter>;
};
