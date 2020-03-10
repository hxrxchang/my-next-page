import React from 'react';
import { NextPage } from 'next';
import { CustomHead } from '../components/custom-head';
import { Layout, Profile } from './../components/index';

const IndexPage: NextPage<{ content: string }> = ({ content }) => {
  return (
    <>
      <CustomHead title="Profile" page="/" description="@hxrxchangのWebsite" type="website"></CustomHead>
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
