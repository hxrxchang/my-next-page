import React from 'react';
import styled from 'styled-components';
import { Header, Menu, Profile, Footer } from './../components/index';

export const PageContainer = styled.div`
  padding: 0 14%;

  .contents {
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 700px) {
    padding: 0 2%;
  }
`;

const IndexPage: React.FC<{}> = () => (
  <PageContainer>
    <Header />
    <Menu route="profile" />
    <div className="contents">
      <Profile />
    </div>
    <Footer />
  </PageContainer>
);

export default IndexPage;
