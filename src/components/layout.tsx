import React from 'react';
import styled from 'styled-components';
import { breakPointMedium, breakPointSmall } from '../styles';
import { Footer } from './footer';
import { Header } from './header';
import { Menu } from './menu';

type Props = {
  children: React.ReactNode;
  route: string;
};

const Styled = styled.div`
  .app-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 0 14%;
  }
  .contents-wrapper {
    flex-grow: 1;
  }
  @media (max-width: ${breakPointMedium}) {
    .app-wrapper {
      padding: 0 8%;
    }
  }
  @media (max-width: ${breakPointSmall}) {
    .app-wrapper {
      padding: 0 2%;
    }
  }
`;

export const Layout: React.FC<Props> = ({ children, route }) => {
  return (
    <Styled>
      <div className="app-wrapper">
        <Header />
        <Menu route={route}></Menu>
        <div className="contents-wrapper">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </Styled>
  );
};
