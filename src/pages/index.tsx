import React from 'react';
import { NextPage } from 'next';
import Head from '../setting/head';
import { Layout, Profile } from './../components/index';

const IndexPage: NextPage<{ content: string }> = ({ content }) => {
  return (
    <>
      <Head title="Profile" page="/" description="@hxrxchangのWebsite" type="website"></Head>
      <Layout route="profile">
        <Profile content={content} />
      </Layout>
    </>
  );
};

IndexPage.getInitialProps = async () => {
  const content = await require('../../docs/profile.md');
  return { content: content.default };
};

export default IndexPage;
