import React from 'react';
import Head from 'next/head';

import { Layout, SocialAccounts } from '../components';

const AccountsPage: React.FC<{}> = () => (
  <>
    <Head>
      <title key="title">Accounts</title>
    </Head>
    <Layout route="accounts">
      <SocialAccounts />
    </Layout>
  </>
);

export default AccountsPage;
