import React from 'react';
import styled from 'styled-components';
import { Header, Menu, Profile } from './../components/index';

export const PageContainer = styled.div`
  padding: 0 14%;

  @media (max-width: 700px) {
    padding: 0 2%;
  }
`;

const IndexPage: React.FC<{}> = () => (
  <PageContainer>
    <Header />
    <Menu route="profile" />
    <Profile />
  </PageContainer>
);

export default IndexPage;
