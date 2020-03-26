import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  public render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
