import React from 'react';
import NextHead from 'next/head';
import { environment } from '../environments/environment';

interface Props {
  title: string;
  description?: string;
  image?: string;
  path?: string;
}

export default ({ title, description, image, path }: Props): JSX.Element => {
  return (
    <NextHead>
      <title key="title">{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={`${environment.url + path}`} />
      <meta property="og:image" content={image || '../static/ogp-profile.jpg'} />
      <meta property="og:site_name" content={title} />
      <link rel="canonical" href={`${environment.url + path}`} />
      <link rel="shortcut icon" href={'https://t-cr.jp/favicon.ico'} />
      <link rel="apple-touch-icon" href={'https://t-cr.jp/logo.png'} />
    </NextHead>
  );
};
