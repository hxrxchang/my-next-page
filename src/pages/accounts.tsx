import React from 'react';
import Head from '../setting/head';

import { Layout, SocialAccounts } from '../components';

const AccountsPage: React.FC<{}> = () => (
  <>
    <Head title="Accounts" page="/accounts" description="@hxrxchangのWebsite" type="website"></Head>
    <Layout route="accounts">
      <SocialAccounts />
    </Layout>
  </>
);

export default AccountsPage;
