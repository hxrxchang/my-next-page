import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Layout, Profile } from './../components/index';

export const PageContainer = styled.div`
  padding: 0 14%;

  @media (max-width: 700px) {
    padding: 0 2%;
  }
`;

const IndexPage: React.FC<{}> = () => (
  <>
    <Head>
      <title key="title">Profile</title>
    </Head>
    <Layout route="profile">
      <Profile />
    </Layout>
  </>
);

export default IndexPage;
