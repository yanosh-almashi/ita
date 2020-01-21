import React, { useState } from 'react';
import MenuItem from './NavigationMenuItem/NavigationMenuItem';
import styled from 'styled-components';
import { ItemsInterface, NestedMenuType } from '../types/types';
import { BrowserRouter } from 'react-router-dom';

interface Props {
  menuItems: ItemsInterface[];
  nestedRoute?: string;
  addNestedMenu?(elem: NestedMenuType): void;
}

const NavigationMenu: React.FC<Props> = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);

  const StyledNavMenu = styled.ul`
    margin-top: ${props.addNestedMenu ? '40px' : '93px'};
  `;

  const activeState = (elem: boolean) => {
    setActive(elem);
  };

  return (
    <BrowserRouter>
      <StyledNavMenu>
        {props.menuItems.map((item: ItemsInterface, i: number) => (
          <MenuItem
            key={i + item.name}
            isNestedItem={props.nestedRoute!}
            name={item.name}
            path={props.nestedRoute ? props.nestedRoute + item.path : item.path}
            icon={item.icon}
            nextMenu={item.nextMenu!}
            addNestedMenu={props.addNestedMenu}
            active={active}
            setActive={activeState}
          />
        ))}
      </StyledNavMenu>
    </BrowserRouter>
  );
};

export default NavigationMenu;
