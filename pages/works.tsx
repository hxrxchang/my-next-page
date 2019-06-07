import React from 'react';

import { PageContainer } from './index';
import { Menu, Header, Works, Footer } from './../components/index';

const WorksPage: React.FC<{}> = () => (
  <>
    <PageContainer>
      <Header />
      <Menu route="works" />
      <Works />
      <Footer />
    </PageContainer>
  </>
);

export default WorksPage;
