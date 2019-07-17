import React from 'react';
import Head from 'next/head';
import { NextFunctionComponent } from 'next';

import { Layout, Works } from './../components/index';

const WorksPage: NextFunctionComponent<{ content: string }> = ({ content }) => (
  <>
    <Head>
      <title key="title">Works</title>
    </Head>
    <Layout route="works">
      <Works content={content} />
    </Layout>
  </>
);

WorksPage.getInitialProps = async () => {
  const content = await require('../docs/works.md');
  return { content: content.default };
};

export default WorksPage;
