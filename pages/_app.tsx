import React from 'react';
import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { Header } from '../components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
  }

  .header-wrapper {
    padding: 0 14%;
  }

  @media (max-width: 700px) {
    padding: 0 2%;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <div className="header-wrapper">
          <Header />
        </div>
        <Component {...pageProps} />
      </Container>
    );
  }
}
