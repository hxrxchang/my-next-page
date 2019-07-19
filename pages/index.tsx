import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { Layout, Profile } from './../components/index';

export const PageContainer = styled.div`
  padding: 0 14%;

  @media (max-width: 700px) {
    padding: 0 2%;
  }
`;

const IndexPage: NextPage<{ content: string }> = ({ content }) => {
  return (
    <>
      <Head>
        <title key="title">Profile</title>
      </Head>
      <Layout route="profile">
        <Profile content={content} />
      </Layout>
    </>
  );
};

IndexPage.getInitialProps = async () => {
  const content = await require('../docs/profile.md');
  return { content: content.default };
};

export default IndexPage;
