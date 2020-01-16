import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavigationMenu from "../NavigationMenuList";
import Tooltip from "@material-ui/core/Tooltip";
import {
    ItemsInterface,
    NestedMenuType
} from "@components/App/MenuContainer/types/types";

interface Props {
    name: string;
    icon: string;
    nextMenu: ItemsInterface[];
    isNestedItem?: string;
    addNestedMenu?(elem: NestedMenuType): void;
    path: string;
    active: boolean;
    setActive(elem: boolean): void
}

const MenuItem: React.FC<Props> = (props: Props) => {
    const Item = styled.li`
    list-style-type: none;
    font-size: 0;
    padding: 8px;
    text-align: center;
    margin: auto;
    position: relative;
    & a {
      color: #9ba6b2;
      display: block;
      width: 40px;
      padding: 10px;
      border-radius: 8px;
      position: relative;
      margin: 0 auto;
    }
    & a:hover {
      background-color: #e1f6ff;
    }`;

    const MenuItemIcon = styled.i`
    font-size: 20px;`;

    const ArrowSubmenu = styled.i`
    position: absolute;
    font-size: 11px;
    right: 0;
    margin-top: 8px;
    color: ${props.active ? "#24c0fd" : "#9ba6b2"};`;


    const linkClickListener = () => {
        if (props.nextMenu) {
            props.addNestedMenu!(
                <NavigationMenu nestedRoute={props.path} menuItems={props.nextMenu} />
            );
            props.setActive(true);
        }

        if (!props.isNestedItem && !props.nextMenu && props.active) {
            props.addNestedMenu!(null);
            props.setActive(false);
        }
    };

    let linkContent = (
        <>
            <MenuItemIcon className={props.icon} />
            {props.nextMenu && (
                <ArrowSubmenu
                    className={props.active ? "fas fa-chevron-right" : "fas fa-chevron-down"}
                />
            )}
        </>
    );

    let link = (
        <NavLink
            activeStyle={{
                color: `#24c0fd`,
                backgroundColor: `#e1f6ff`
            }}
            to={props.path}
            onClick={linkClickListener}
        >
            {linkContent}
        </NavLink>
    );

    return (
        <Item>
            <Tooltip title={props.name} placement="right" arrow>
                {link}
            </Tooltip>
        </Item>
    );
};

export default MenuItem;
