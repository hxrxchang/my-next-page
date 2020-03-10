import React from 'react';
import { CustomHead } from '../components/custom-head';
import { NextPage, GetStaticProps } from 'next';

import { Layout, Works } from '../components/index';

const WorksPage: NextPage<{ content: string }> = ({ content }) => (
  <>
    <CustomHead title="Works" page="/works" description="@hxrxchangのWebsite" type="website"></CustomHead>
    <Layout route="works">
      <Works content={content} />
    </Layout>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const content = await require('../../docs/works.md');
  return {
    props: { content: content.default },
  };
};

export default WorksPage;
