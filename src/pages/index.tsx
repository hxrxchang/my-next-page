import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { CustomHead } from '../components/custom-head';
import { getProfile } from '../repositories/profile';
import { Layout } from '../components/layout';
import { Profile } from '../components/profile';

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
