import React, {Dispatch, ReactElement, SetStateAction} from "react";
import MenuItem from "./NavigationMenuItem/NavigationMenuItem";
import styled from "styled-components";
import {ItemsInterface} from "../types/types";

const StyledNavMenu = styled.ul`
  margin-top: 40px;
`;

interface Props {
  menuItems: ItemsInterface[];
  nestedRoute?: string;
  addNestedMenuContent?(val: any): void;
}

const NavigationMenu: React.FC<Props> = (props: Props) => {
  return (
    <StyledNavMenu>
      {props.menuItems.map((item: ItemsInterface, i: number ) => (
        <MenuItem
          key={i + item.name}
          isNestedItem={props.nestedRoute!}
          name={item.name}
          path={props.nestedRoute ? props.nestedRoute + item.path: item.path}
          icon={item.icon}
          nextMenu={item.nextMenu!}
          addNestedMenuContent={props.addNestedMenuContent}
        />
      ))}
    </StyledNavMenu>
  );
};

export default NavigationMenu;
