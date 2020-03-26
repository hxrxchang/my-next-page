import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Footer, Header } from '../components';
import { useGaTrackPage } from '../hooks/ga-hook';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    padding: 0px;
    margin:  0px;
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
  const { route, asPath } = useRouter();
  if (typeof window !== 'undefined') {
    useGaTrackPage(asPath);
  }

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

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <RouterComponent>
        <Component {...pageProps} />
      </RouterComponent>
    </>
  );
};

export default MyApp;
