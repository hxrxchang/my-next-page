import React from 'react';

import { Layout, SocialAccounts } from '../components';

const AccountsPage: React.FC<{}> = () => (
  <Layout route="accounts">
    <SocialAccounts />
  </Layout>
);

export default AccountsPage;
