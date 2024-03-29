import React from 'react';
import NextHead from 'next/head';

type Props = {
  title: string;
  page: string;
  type: string;
  description: string;
  id?: string;
  image?: string;
};

export const CustomHead = ({ title, description, image, page, type }: Props): JSX.Element => {
  return (
    <NextHead>
      <title key="title">{title}</title>
      <link rel="icon" type="image/x-icon" href="/tuna2.jpeg" />
      <meta name="description" content={description}></meta>
      <meta name="author" content="hxrxchang"></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_URL + page}`} />
      <meta property="og:image" content={image ? `${process.env.NEXT_PUBLIC_URL}/${image}` : `${process.env.NEXT_PUBLIC_URL}/tuna2.jpeg`} />
      <meta property="og:site_name" content={title} />
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_URL + page}`} />
    </NextHead>
  );
};
