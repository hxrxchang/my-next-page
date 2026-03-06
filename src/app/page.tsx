import { Metadata } from 'next';
import { getProfile } from '../repositories/profile';
import { Profile } from '../components/profile';
import { PageLayout } from '../components/page-layout';

export const metadata: Metadata = {
  title: 'Profile',
  description: '@hxrxchangのWebsite',
  openGraph: {
    title: 'Profile',
    description: '@hxrxchangのWebsite',
    type: 'website',
    url: process.env.NEXT_PUBLIC_URL,
    images: [`${process.env.NEXT_PUBLIC_URL}/tuna2.jpeg`],
  },
};

export default function IndexPage() {
  const content = getProfile();

  return (
    <PageLayout currentPath="/">
      <Profile content={content} />
    </PageLayout>
  );
}
