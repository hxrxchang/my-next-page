import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { CustomHead } from '../components/custom-head';
import { getProfile } from '../repositories/profile';
import { Profile } from '../components/profile';

const IndexPage: NextPage<{ content: string }> = ({ content }) => {
  return (
    <>
      <CustomHead title="Profile" page="/" description="@hxrxchangのWebsite" type="website"></CustomHead>
      <Profile content={content} />
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
