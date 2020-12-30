import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.li`
  padding: 10px 0;
  list-style: none;

  .date {
    display: block;
  }

  .link {
    text-decoration: none;
  }

  .link:hover {
    text-decoration: underline;
  }

  .title {
    margin: 0;
  }

  .created-at {
    margin: 4px 0;
  }
`;

interface Props {
  id: string;
  title: string;
  createdAt: string;
}

export const BlogLink: React.FC<Props> = ({ id, title, createdAt }) => {
  return (
    <StyledLink>
      <Link href={`blog/${id}`}>
        <a className="link">
          <h2 className="title">{title}</h2>
        </a>
      </Link>
      <p className="created-at">{createdAt}</p>
    </StyledLink>
  );
};
