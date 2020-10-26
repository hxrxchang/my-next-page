import { ThemeProvider } from '@material-ui/styles';
import { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Footer, Header } from '../components';
import { useGaTrackPage } from '../hooks/ga-hook';
import theme from '../material/theme';
import { breakPointMedium, breakPointSmall } from '../styles';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    padding: 0px;
    margin:  0px;
    word-break: break-word;
    line-height: 1.8;
  }

  h1, h2, h3 {
    line-height: 1.4;
  }

  table {
    border-collapse: collapse;
    border: 1px solid #CCC;
  }

  th, td {
    padding: 5px 10px;
    border: 1px solid #CCC;
  }

  th {
    background: #EEE;
  }
`;

const StyledAppContainer = styled.div`
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

type Props = {
  Component: NextComponentType;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: Props) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles!.parentNode!.removeChild(jssStyles);
    }
  }, []);

  const { route, asPath } = useRouter();
  if (typeof window !== 'undefined') {
    useGaTrackPage(asPath);
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledAppContainer>
          {route === '/blog/[id]' ? (
            // ブログ記事ページ用
            <Component {...pageProps} />
          ) : (
            // ブログ記事以外
            <div className="app-wrapper">
              <div className="contents-wrapper">
                {route !== '/_error' && <Header />}
                <Component {...pageProps} />
              </div>
              {route !== '/_error' && (
                <div className="footer-wrapper">
                  <Footer />
                </div>
              )}
            </div>
          )}
        </StyledAppContainer>
      </ThemeProvider>
    </>
  );
}
