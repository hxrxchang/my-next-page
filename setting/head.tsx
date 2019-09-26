import React from 'react';
import NextHead from 'next/head';
import { environment } from '../environments/environment';

interface Props {
  title: string;
  page: string;
  type: string;
  description: string;
  image?: string;
}

export default ({ title, description, image, page, type }: Props): JSX.Element => {
  return (
    <NextHead>
      <title key="title">{title}</title>
      <link rel="icon" type="image/x-icon" href="../static/ogp-profile.jpg" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`${environment.url + page}`} />
      <meta property="og:image" content={image || '/static/ogp-profile.jpg'} />
      <meta property="og:site_name" content={title} />
      <link rel="canonical" href={`${environment.url + page}`} />
    </NextHead>
  );
};
