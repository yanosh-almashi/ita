import React from "react";
import MenuItems from "./MenuItems/MenuItems";
import styled from "styled-components";
import { ItemsInterface } from "../types/types";

const StyledNavMenu = styled.ul`
  margin-top: 40px;
`;

interface Props {
  items: ItemsInterface[];
  handleClick?(nextMenu: ItemsInterface[], active: boolean): void;
}

const NavigationMenu: React.FC<Props> = ({items, handleClick}) => {

  return (
    <StyledNavMenu>
      {items.map(item => (
        <MenuItems
          key={item.id}
          isActive={item.isActive}
          name={item.name}
          path={item.path}
          icon={item.icon}
          nextMenu={item.nextMenu}
          handleClick={handleClick}
        />
      ))}
    </StyledNavMenu>
  );
};

export default NavigationMenu;
