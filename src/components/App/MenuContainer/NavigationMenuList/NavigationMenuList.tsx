import React from "react";
import MenuItem from "./NavigationMenuItem/NavigationMenuItem";
import styled from "styled-components";
import {ItemsInterface} from "../types/types";

interface Props {
  menuItems: ItemsInterface[];
  nestedRoute?: string;
  addNestedMenuContent?(val: any): void;
}

const NavigationMenu: React.FC<Props> = (props: Props) => {
    const StyledNavMenu = styled.ul`
      margin-top: ${props.addNestedMenuContent ? "40px" : "93px"};
    `;

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
