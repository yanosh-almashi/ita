import React from "react";
import MenuItem from "./NavigationMenuItem/NavigationMenuItem";
import styled from "styled-components";

const StyledNavMenu = styled.ul`
  margin-top: 40px;
`;


const NavigationMenu: React.FC<any> = (props) => {
  return (
    <StyledNavMenu>
      {props.menuItems.map((item: any, i:number ) => (
        <MenuItem
          key={i + item.name}
          isNestedItem={props.nestedRoute}
          name={item.name}
          path={props.nestedRoute ? props.nestedRoute + item.path: item.path}
          icon={item.icon}
          nextMenu={item.nextMenu}
          addNestedMenuContent={props.addNestedMenuContent}
        />
      ))}
    </StyledNavMenu>
  );
};

export default NavigationMenu;
