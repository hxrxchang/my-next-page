import { ThemeProvider } from '@material-ui/styles';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import styled, { createGlobalStyle } from 'styled-components';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Menu } from '../components/menu';
import theme from '../material/theme';
import { breakPointMedium, breakPointSmall } from '../styles';

const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID as string;
ReactGA.initialize(gaTrackingId);

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

  a {
    text-decoration: none;
  }
`;

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

export default function MyApp({ Component, pageProps }: AppProps) {
  const { route, asPath } = useRouter();

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles!.parentNode!.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    ReactGA.pageview(asPath);
  }, [asPath]);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Styled>
          {route === '/blog/[id]' ? (
            // ブログ記事ページ用
            <Component {...pageProps} />
          ) : (
            // ブログ記事以外
            // Safariでページ切り替え時に画像を再読み込みさせないためにここで共通化している
            <div className="app-wrapper">
              <div className="contents-wrapper">
                <Header />
                <Menu route={route} />
                <main>
                  <Component {...pageProps} />
                </main>
              </div>
              <Footer />
            </div>
          )}
        </Styled>
      </ThemeProvider>
    </>
  );
}
