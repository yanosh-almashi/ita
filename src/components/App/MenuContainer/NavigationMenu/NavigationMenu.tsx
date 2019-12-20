import React from "react";
import MenuItems from "./MenuItems/MenuItems";
import styled from "styled-components";

const StyledNavMenu = styled.ul`
  margin-top: 40px;
`;

export const itemProps = [
  {
    name: "home",
    id: 11,
    icon: "fas fa-home",
    isActive: true,
    path: "/random"
  },
  {
    name: "profile",
    id: 12,
    icon: "fas fa-user",
    isActive: false,
    path: "/profile"
  },
  {
    name: "tools",
    id: 13,
    icon: "fas fa-wrench",
    isActive: false,
    nextMenu: []
  }
];
const NavigationMenu: React.FC<any> = () => {
  return (
    <StyledNavMenu>
      {itemProps.map(item => (
        <MenuItems
          key={item.id}
          isActive={item.isActive}
          name={item.name}
          path={item.path}
          icon={item.icon}
          nextMenu={item.nextMenu}
        />
      ))}
    </StyledNavMenu>
  );
};

export default NavigationMenu;
