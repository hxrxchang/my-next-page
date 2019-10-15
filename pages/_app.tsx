import React from 'react';
import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { Header, Footer } from '../components';

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

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <div className="app-wrapper">
          <div className="contents-wrapper">
            <Header />
            <Component {...pageProps} />
          </div>
          <div className="footer-wrapper">
            <Footer />
          </div>
        </div>
      </Container>
    );
  }
}
