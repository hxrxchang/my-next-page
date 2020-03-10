import React from 'react';
import { NextPage, GetStaticProps } from 'next';
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

export const getStaticProps: GetStaticProps = async () => {
  const content = await require('../../data-sources/profile.md');
  return {
    props: { content: content.default },
  };
};

export default IndexPage;
