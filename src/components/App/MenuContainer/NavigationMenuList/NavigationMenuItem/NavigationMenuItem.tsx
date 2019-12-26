import React from "react";
import styled from "styled-components";
import {NavLink, useLocation} from 'react-router-dom';
import NavigationMenu from '../NavigationMenuList';
import Tooltip from '@material-ui/core/Tooltip';

const MenuItem: React.FC<any> = (props: any) => {
  let location = useLocation();
  // const [nestedMenuOpened, nestedMenuOpenedListenter] = useState();
  const Item = styled.li`
    list-style-type: none; 
    font-size: 0; 
    padding: 8px; 
    text-align: center; 
    margin: auto; 
    position: relative; 
    & a {
      color:  #9ba6b2;
      display: block;
      width: 40px;
      padding: 10px;
      border-radius: 8px;
      position: relative;
      margin: 0 auto;
    }
    & a:hover {
      background-color: #e1f6ff;
    }    
  `;
  const MenuItemIcon = styled.i`
    font-size: 20px;    
  `;
  const ArrowSubmenu = styled.i`
    position: absolute;
    font-size: 11px;
    right: 0;
    margin-top: 8px;
    color:  #9ba6b2;
  `;
  let link;

  let linkContent = (<>
    <MenuItemIcon className={props.icon} />
    {props.nextMenu && <ArrowSubmenu className="fas fa-chevron-down" />}
  </>);

  if ( props.nextMenu ) {
    const linkClickListener = (event: any) => {
      event.preventDefault();
      props.addNestedMenuContent(<NavigationMenu nestedRoute={props.path} menuItems={props.nextMenu}/>);

    };
    link = (<a
      style={ location.pathname.indexOf(props.path + '/') !== -1 ? {
        color: `#24c0fd`,
        backgroundColor: `#e1f6ff`
    }: {}}
      href={props.path}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{linkClickListener(event)}}
      >
       {linkContent}
     </a>);
  } else {
    const linkClickListener = () => {
      if ( props.addNestedMenuContent) {
        props.addNestedMenuContent('');
      }
    };
    link = ( <NavLink
      to={props.path}
      activeStyle={{
         color: `#24c0fd`,
         backgroundColor: `#e1f6ff`
     }}
     onClick={linkClickListener}>
       {linkContent}
     </NavLink>
     );
  }

  return (
    <Item>
        <Tooltip title={props.name} placement="right" arrow>
            {link}
        </Tooltip>
    </Item>
  );
};

export default MenuItem;
