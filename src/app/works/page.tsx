import { Metadata } from 'next';
import { getWorks } from '../../repositories/works';
import { Works } from '../../components/works';
import { PageLayout } from '../../components/page-layout';

export const metadata: Metadata = {
  title: 'Works',
  description: '@hxrxchangのWebsite',
  openGraph: {
    title: 'Works',
    description: '@hxrxchangのWebsite',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_URL}/works`,
    images: [`${process.env.NEXT_PUBLIC_URL}/tuna2.jpeg`],
  },
};

export default function WorksPage() {
  const content = getWorks();

  return (
    <PageLayout currentPath="/works">
      <Works content={content} />
    </PageLayout>
  );
}
