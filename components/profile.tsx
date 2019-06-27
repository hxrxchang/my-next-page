import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Profile: React.FC<{}> = () => {
  return (
    <StyledWrapper>
      <div>
        <h2>About</h2>
        <div>
          <p>EdTech企業でフロントエンドエンジニアとして働いています。</p>
          <p>
            フロントエンドに軸足を置きつつ、
            <br />
            バックエンドとインフラも触ってサービス全体に貢献できるエンジニアになりたいです。
          </p>
          <p>犬、猫、野球観戦、食べることが好きです。</p>
        </div>

        <h2>Skill</h2>
        <ul>
          <li>Angular</li>
          <li>TypeScript</li>
          <li>NgRx</li>
          <li>Node.js</li>
        </ul>
        <h2>Studying</h2>
        <ul>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>AWS</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>
      </div>
    </StyledWrapper>
  );
};
