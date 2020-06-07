import React from 'react';
import NextHead from 'next/head';
import { environment } from '../environments/environment';

interface Props {
  title: string;
  page: string;
  type: string;
  description: string;
  id?: string;
  image?: string;
}

export const CustomHead = ({ title, description, image, page, type }: Props): JSX.Element => {
  return (
    <NextHead>
      <title key="title">{title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.png" />
      <meta name="description" content={description}></meta>
      <meta name="author" content="hxrxchang"></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`${environment.url + page}`} />
      <meta property="og:image" content={image ? `${environment.url}/${image}` : `${environment.url}/ogp-profile.jpg`} />
      <meta property="og:site_name" content={title} />
      <link rel="canonical" href={`${environment.url + page}`} />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </NextHead>
  );
};
