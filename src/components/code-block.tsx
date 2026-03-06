import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type Props = {
  children?: React.ReactNode;
  className?: string;
  inline?: boolean;
};

export const CodeBlock: React.FC<Props> = ({ children, className, inline }) => {
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : undefined;

  if (inline) {
    return <code className={className}>{children}</code>;
  }

  return (
    <SyntaxHighlighter language={language} style={agate}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
};
