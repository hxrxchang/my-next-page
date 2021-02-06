import React from 'react';
import { CustomHead } from '../components/custom-head';
import { SocialAccounts } from '../components/social-accounts';

const AccountsPage: React.FC<{}> = () => {
  return (
    <>
      <CustomHead title="Accounts" page="/accounts" description="@hxrxchangのWebsite" type="website"></CustomHead>
      <SocialAccounts />
    </>
  );
};

export default AccountsPage;
