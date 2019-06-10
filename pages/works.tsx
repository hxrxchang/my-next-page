import React from 'react';
import Head from 'next/head';

import { Layout, Works } from './../components/index';

const WorksPage: React.FC<{}> = () => (
  <>
    <Head>
      <title key="title">Works</title>
    </Head>
    <Layout route="works">
      <Works />
    </Layout>
  </>
);

export default WorksPage;
