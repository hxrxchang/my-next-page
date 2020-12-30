import React from 'react';
import { CustomHead } from '../components/custom-head';
import { Layout } from '../components/layout';
import { SocialAccounts } from '../components/social-accounts';

const AccountsPage: React.FC<{}> = () => (
  <>
    <CustomHead title="Accounts" page="/accounts" description="@hxrxchangのWebsite" type="website"></CustomHead>
    <Layout route="accounts">
      <SocialAccounts />
    </Layout>
  </>
);

export default AccountsPage;
