import React from 'react';

import { PageContainer } from './index';
import { Menu, Header, Works } from './../components/index';

const WorksPage: React.FC<{}> = () => (
  <>
    <PageContainer>
      <Header />
      <Menu route="works" />
      <div className="contents">
        <Works />
      </div>
    </PageContainer>
  </>
);

export default WorksPage;
