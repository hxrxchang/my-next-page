import { Metadata } from 'next';
import { BlogList } from '../../components/blog-list';
import { getPagenatedSortedBlogsData, getPagenationInfo } from '../../repositories/blogs';
import { PageLayout } from '../../components/page-layout';

export const metadata: Metadata = {
  title: 'Blogs',
  description: '@hxrxchangのブログ一覧',
  openGraph: {
    title: 'Blogs',
    description: '@hxrxchangのブログ一覧',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_URL}/blogs`,
    images: [`${process.env.NEXT_PUBLIC_URL}/tuna2.jpeg`],
  },
};

export default function BlogsPage() {
  const pageId = 1;
  const blogDataList = getPagenatedSortedBlogsData(pageId);
  const pagenationInfo = getPagenationInfo(pageId);

  return (
    <PageLayout currentPath="/blogs">
      <BlogList blogDataList={blogDataList} pagenationInfo={pagenationInfo} pageId={pageId} />
    </PageLayout>
  );
}
