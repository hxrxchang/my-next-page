import Link from 'next/link';
import React from 'react';

interface Props {
  id: string;
  title: string;
  createdAt: string;
}

export const BlogLink: React.FC<Props> = ({ id, title, createdAt }) => {
  return (
    <li className="py-2.5 list-none">
      <Link href={`/blog/${id}`} className="no-underline hover:underline">
        <h2 className="m-0">{title}</h2>
      </Link>
      <p className="my-1">{createdAt}</p>
    </li>
  );
};
