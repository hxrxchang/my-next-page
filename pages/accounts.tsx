import React from 'react';

import { PageContainer } from './index';
import { Header, Menu } from '../components';

const AccountsPage: React.FC<{}> = () => (
  <>
    <PageContainer>
      <Header />
      <Menu route="accounts" />
    </PageContainer>
  </>
);

export default AccountsPage;
