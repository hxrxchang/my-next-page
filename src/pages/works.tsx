import React from 'react';
import Head from '../setting/head';
import { NextPage } from 'next';

import { Layout, Works } from '../components/index';

const WorksPage: NextPage<{ content: string }> = ({ content }) => (
  <>
    <Head title="Works" page="/works" description="@hxrxchangのWebsite" type="website"></Head>
    <Layout route="works">
      <Works content={content} />
    </Layout>
  </>
);

WorksPage.getInitialProps = async () => {
  const content = await require('../../docs/works.md');
  return { content: content.default };
};

export default WorksPage;
