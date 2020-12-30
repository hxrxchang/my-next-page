import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Styled = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Profile: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Styled>
      <div>
        <ReactMarkdown source={content} />
      </div>
    </Styled>
  );
};
