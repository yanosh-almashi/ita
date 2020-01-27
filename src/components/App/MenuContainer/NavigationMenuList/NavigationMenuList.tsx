import React, { useState } from 'react';
import MenuItem from './NavigationMenuItem/NavigationMenuItem';
import { StyledNavMenu } from './NavigationMenuListStyles';
import { ItemsInterface, NestedMenuType } from '../types/types';
import { BrowserRouter } from 'react-router-dom';

export interface Props {
  menuItems: ItemsInterface[];
  nestedRoute?: string;
  addNestedMenu?(elem: NestedMenuType): void;
}

const NavigationMenu: React.FC<Props> = props => {
  const [active, setActive] = useState(false);

  const activeState = (elem: boolean) => {
    setActive(elem);
  };

  return (
    <BrowserRouter>
      <StyledNavMenu {...props}>
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
