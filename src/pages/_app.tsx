import { ThemeProvider } from '@material-ui/styles';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { createGlobalStyle } from 'styled-components';
import theme from '../material/theme';

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

export default function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
