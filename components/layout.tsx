import React from 'react';
import styled from 'styled-components';
import { Header, Menu, Footer } from './index';

interface Props {
  children: React.ReactNode;
  route: string;
}

const PageContainer = styled.div`
  padding: 0 14%;

  @media (max-width: 700px) {
    padding: 0 2%;
  }
`;

export const Layout: React.FC<Props> = ({ children, route }) => {
  return (
    <PageContainer>
      <Header />
      <Menu route={route} />
      {children}
      <Footer />
    </PageContainer>
  );
};
