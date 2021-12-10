import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { breakPointSmall } from '../styles';

const Styled = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: ${breakPointSmall}) {
    width: 100%;
    margin: 0;
  }
`;

export const Profile: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Styled>
      <ReactMarkdown source={content} />
    </Styled>
  );
};
