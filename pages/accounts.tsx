import React from 'react';

import { PageContainer } from './index';
import { Header, Menu, SocialAccounts, Footer } from '../components';

const AccountsPage: React.FC<{}> = () => (
  <>
    <PageContainer>
      <Header />
      <Menu route="accounts" />
      <div className="contents">
        <SocialAccounts />
      </div>
      <Footer />
    </PageContainer>
  </>
);

export default AccountsPage;
