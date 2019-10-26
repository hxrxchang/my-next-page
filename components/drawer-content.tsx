import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export const DrawerContent: React.FC<{}> = () => {
  const StyledWrapper = styled.div`
    .link {
      cursor: pointer;
      text-decoration: none;
    }
  `;

  return (
    <StyledWrapper>
      <Link href="/blogs">
        <a className="link">ブログ一覧に戻る</a>
      </Link>
    </StyledWrapper>
  );
};
