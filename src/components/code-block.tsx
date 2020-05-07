import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface Props {
  value: string;
  language?: string;
}

export const CodeBlock: React.FC<Props> = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language} style={agate}>
      {value}
    </SyntaxHighlighter>
  );
};
