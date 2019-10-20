import React from 'react';
import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { Header, Footer } from '../components';
import { useRouter } from 'next/router';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
  }

  .app-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 0 14%;
  }

  .contents-wrapper {
    flex-grow: 1;
  }

  @media (max-width: 700px) {
    .app-wrapper {
      padding: 0 2%;
    }
  }
`;

const RouterComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { route } = useRouter();
  return (
    <>
      {route === '/blog/[id]' ? (
        // ブログ記事ページ用
        <>{children}</>
      ) : (
        // ブログ記事以外
        <div className="app-wrapper">
          <div className="contents-wrapper">
            {route !== '/_error' && <Header />}
            <>{children}</>
          </div>
          {route !== '/_error' && (
            <div className="footer-wrapper">
              <Footer />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <RouterComponent>
          <Component {...pageProps} />
        </RouterComponent>
      </Container>
    );
  }
}
