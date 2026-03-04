import { Metadata } from 'next';
import { BlogLayout } from '../../../components/blog-layout';
import { getAllBlogIds, getBlogData } from '../../../repositories/blogs';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const paths = getAllBlogIds();
  return paths.map((p) => ({ id: p.params.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { blogData } = getBlogData(id);

  return {
    title: blogData.title,
    description: blogData.description,
    openGraph: {
      title: blogData.title,
      description: blogData.description,
      type: 'article',
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${id}`,
      images: blogData.image
        ? [`${process.env.NEXT_PUBLIC_URL}/${blogData.image}`]
        : [`${process.env.NEXT_PUBLIC_URL}/tuna2.jpeg`],
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { id } = await params;
  const { content, blogData } = getBlogData(id);

  return <BlogLayout content={content} blogData={blogData} />;
}
