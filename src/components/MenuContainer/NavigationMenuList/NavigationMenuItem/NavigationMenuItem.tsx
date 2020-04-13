import React, {ReactElement, useEffect} from 'react';
import { Item, MenuItemIcon, ArrowSubmenu, LogoLink } from './NavigationMenuItemStyles';
import { NavLink, useLocation } from 'react-router-dom';
import NavigationMenu from '../NavigationMenuList';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';
import {
  ItemsInterface,
  NestedMenuType
} from '@components/MenuContainer/types/types';

export interface Props {
  name: string;
  icon?: string;
  id: string;
  nextMenu: ItemsInterface[];
  path: string;
  active: boolean;
  setActive(elem: boolean): void;
  isNestedItem?: string;
  addNestedMenu?(elem: NestedMenuType): void;
}


const ConnectedMenuItem: React.FC<Props> = props => {
  let location = useLocation();
  useEffect(() => {
    if ( location.pathname.indexOf('/tools') !== -1) {
      props.setActive(true);
    } else {
      props.setActive(false);
    }
  }, [props, location]);

  const linkClickListener = () => {
    if (props.nextMenu) {
      if (props.addNestedMenu) {
        props.addNestedMenu(
          <NavigationMenu nestedRoute={props.path} menuItems={props.nextMenu} />
        );
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

  let linkContent: ReactElement;
  let link = () => {
    if (props.icon) {
      if (props.id && props.path === '/auth') {
        linkContent = (
            <>
              <MenuItemIcon className={`fas fa-user`}/>
            </>
        );
      } else {
        linkContent = (
            <>
              <MenuItemIcon className={props.icon}/>
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
      }

      if (props.id && props.path === '/auth') {
        return (
            <NavLink
                activeStyle={{
                  color: `#24c0fd`,
                  backgroundColor: `#e1f6ff`
                }}
                to={`/profile`}
                onClick={linkClickListener}
            >
              {linkContent}
            </NavLink>
        )
      }

      return (
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
      )
    } else {
      return (
          <LogoLink
              to={props.path}
              onClick={linkClickListener}
          />
      )
    }
  }
  return (
    <Item>
      <Tooltip title={ props.id && props.path === '/auth' ? 'profile': props.name } placement="right" arrow>
        {link()}
      </Tooltip>
    </Item>
  );
};


  const mapStateToProps = (state: any) => ({
    id: state.authReducer.uid
  });
  const MenuItem = connect(mapStateToProps)(ConnectedMenuItem);

  export default MenuItem;
