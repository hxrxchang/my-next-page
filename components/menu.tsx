import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`
  border-bottom: 1px solid #efefef;

  .menu-list {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  .menu-item {
    font-weight: bold;
    padding-bottom: 10px;
    cursor: pointer;
  }

  .focused {
    border-bottom: 2px solid red;
  }
`;

export const Menu: React.FC<{}> = () => (
  <>
    <StyledMenu>
      <div className="menu-list">
        <div className="menu-item">Profile</div>
        <div className="menu-item">Social</div>
        <div className="menu-item">Works</div>
      </div>
    </StyledMenu>
  </>
);
