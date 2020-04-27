import { ThemeProvider } from '@material-ui/styles';
import { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Footer, Header } from '../components';
import { useGaTrackPage } from '../hooks/ga-hook';
import theme from '../material/theme';

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

interface Props {
  Component: NextComponentType;
  pageProps: any;
}

export default function MyApp({ Component, pageProps }: Props) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles!.parentNode!.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RouterComponent>
          <Component {...pageProps} />
        </RouterComponent>
      </ThemeProvider>
    </>
  );
}
