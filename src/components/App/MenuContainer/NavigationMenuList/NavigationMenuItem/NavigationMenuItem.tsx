import React from 'react';
import { Item, MenuItemIcon, ArrowSubmenu } from './NavigationMenuItemStyles';
import { NavLink } from 'react-router-dom';
import NavigationMenu from '../NavigationMenuList';
import Tooltip from '@material-ui/core/Tooltip';
import {
  ItemsInterface,
  NestedMenuType
} from '@components/App/MenuContainer/types/types';

export interface Props {
  name: string;
  icon: string;
  nextMenu: ItemsInterface[];
  path: string;
  active: boolean;
  setActive(elem: boolean): void;
  isNestedItem?: string;
  addNestedMenu?(elem: NestedMenuType): void;
}

const MenuItem: React.FC<Props> = (props) => {
  const linkClickListener = () => {
    if (props.nextMenu) {
      if (props.addNestedMenu) {
        props.addNestedMenu(<NavigationMenu nestedRoute={props.path} menuItems={props.nextMenu} />)
      }
      props.setActive(true);
    }

    if (!props.isNestedItem && !props.nextMenu && props.active) {
      if (props.addNestedMenu) {
        props.addNestedMenu(null);
      }
      props.setActive(false);
    }
  };

  let linkContent = (
    <>
      <MenuItemIcon className={props.icon} />
      {props.nextMenu && (
        <ArrowSubmenu
          className={
            props.active ? 'fas fa-chevron-right' : 'fas fa-chevron-down'
          }
          {...props}
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
