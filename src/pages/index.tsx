import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { CustomHead } from '../components/custom-head';
import { getProfile } from '../repositories/profile';
import { Layout } from '../components/layout';
import { Profile } from '../components/profile';
import { useRouter } from 'next/router';

const IndexPage: NextPage<{ content: string }> = ({ content }) => {
  const { route } = useRouter();
  return (
    <>
      <CustomHead title="Profile" page="/" description="@hxrxchangのWebsite" type="website"></CustomHead>
      <Layout route={route}>
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
