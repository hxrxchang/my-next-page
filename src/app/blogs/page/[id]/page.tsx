import { Metadata } from 'next';
import { BlogList } from '../../../../components/blog-list';
import { getBlogsPagePaths, getPagenatedSortedBlogsData, getPagenationInfo } from '../../../../repositories/blogs';
import { PageLayout } from '../../../../components/page-layout';

type Props = {
  params: Promise<{ id: string }>;
};

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

export async function generateStaticParams() {
  const paths = getBlogsPagePaths();
  return paths.map((p) => ({ id: p.params.id }));
}

export default async function BlogsPageWithPagination({ params }: Props) {
  const { id } = await params;
  const pageId = parseInt(id, 10);
  const blogDataList = getPagenatedSortedBlogsData(pageId);
  const pagenationInfo = getPagenationInfo(pageId);

  return (
    <PageLayout currentPath="/blogs">
      <BlogList blogDataList={blogDataList} pagenationInfo={pagenationInfo} pageId={pageId} />
    </PageLayout>
  );
}
