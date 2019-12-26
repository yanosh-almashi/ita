import React, {useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import './MenuItems.css';
import {ItemsInterface} from "@components/App/MenuContainer/types/types";

interface Props {
    name: string;
    icon: string;
    path?: string;
    nextMenu?: ItemsInterface[];
    isActive?: boolean;
    handleClick?(nextMenu: ItemsInterface[] , active: boolean): void;
}

const MenuItems: React.FC<Props> = ({name, icon, path, nextMenu, handleClick, isActive}) => {

  const ListItem = styled.li`
    list-style-type: none;
    ${isActive
      ? `color: #24c0fd`
      : `color:  #9ba6b2`}
    font-size: 20px;
    width: 40px;
    border-radius: 8px;
    padding: 8px;
    text-align: center;
    margin: 10px auto; 
    position: relative;
    cursor: pointer;
    &:hover {
      background-color: #e1f6ff;
    }
  `;
  const ArrowSubmenu = styled.i`
    position: absolute;
    font-size: 11px;
    right: 0;
    margin-top: 8px;
  `;

  const RouterLink = styled(NavLink)`
    text-decoration: none;
    color: #9ba6b2;
  `;

  let itemContainer;

  if (nextMenu) {
      itemContainer =
          <ListItem onClick={() => handleClick!(nextMenu , isActive!)}>
              <i className={icon}/>
              {isActive
                  ? <ArrowSubmenu className="fas fa-chevron-right" />
                  : <ArrowSubmenu className="fas fa-chevron-down" />
              }
          </ListItem>
  } else {
      itemContainer =
          <ListItem>
              <RouterLink to={path!} activeClassName="active">
                  <i className={icon} />
              </RouterLink>
          </ListItem>
  }

  return (
      <Tooltip title={name} placement="right" >
          {itemContainer}
      </Tooltip>
  );
};

export default MenuItems;
