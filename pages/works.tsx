import React from 'react';

import { PageContainer } from './index';
import { Menu, Header } from './../components/index';

const WorksPage: React.FC<{}> = () => (
  <>
    <PageContainer>
      <Header />
      <Menu route="works" />
    </PageContainer>
  </>
);

export default WorksPage;
