import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { CustomHead } from '../components/custom-head';
import { Layout, Profile } from './../components/index';
import { getProfile } from '../repositories/profile';

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
  const content = getProfile();
  return {
    props: { content },
  };
};

export default IndexPage;
