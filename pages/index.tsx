import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 200px;
`;

const IndexPage: React.FC<{}> = () => (
  <Wrapper>
    <h1>Welcome to Next.js for TypeScript!</h1>
    <img src="/static/chowder.jpeg" alt="" />
  </Wrapper>
);

export default IndexPage;
