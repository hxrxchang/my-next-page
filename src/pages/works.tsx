import React from 'react';
import { CustomHead } from '../components/custom-head';
import { NextPage, GetStaticProps } from 'next';

import { getWorks } from '../repositories/works';
import { Works } from '../components/works';

const WorksPage: NextPage<{ content: string }> = ({ content }) => (
  <>
    <CustomHead title="Works" page="/works" description="@hxrxchangのWebsite" type="website"></CustomHead>
    <Works content={content} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const content = getWorks();
  return {
    props: { content },
  };
};

export default WorksPage;
