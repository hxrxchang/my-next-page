import React from 'react';
import styled from 'styled-components';

interface MenuProps {
  route: string;
}
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

  .selected {
    border-bottom: 2px solid red;
  }

  .not-selected:hover {
    border-bottom: 2px solid gray;
  }
`;

export const Menu: React.FC<MenuProps> = ({ route }: MenuProps) => {
  return (
    <>
      <StyledMenu>
        <div className="menu-list">
          <div className={route === 'profile' ? 'menu-item selected' : 'menu-item not-selected'}>Profile</div>
          <div className={route === 'accounts' ? 'menu-item selected' : 'menu-item not-selected'}>Accounts</div>
          <div className={route === 'works' ? 'menu-item selected' : 'menu-item not-selected'}>Works</div>
        </div>
      </StyledMenu>
    </>
  );
};
