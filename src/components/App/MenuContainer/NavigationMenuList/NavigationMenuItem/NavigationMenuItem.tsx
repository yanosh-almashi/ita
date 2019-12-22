import React from "react";
import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import NavigationMenu from '../NavigationMenuList';

const MenuItem: React.FC<any> = (props: any) => {
  const Item = styled.li`
    list-style-type: none;
    color:  #9ba6b2;
    backgroundColor: #fff;
    font-size: 0;
    width: 40px;
    border-radius: 8px;
    padding: 8px;
    text-align: center;
    margin: 10px auto; 
    position: relative;
    & a {
      color:  #9ba6b2;
    }    
  `;
  const MenuItemIcon = styled.i`
    font-size: 20px;    
  `
  const ArrowSubmenu = styled.i`
    position: absolute;
    font-size: 11px;
    right: 0;
    margin-top: 8px;
    color:  #9ba6b2;
  `;
  let link;
  let linkContent = (<>
  {props.name}
    <MenuItemIcon className={props.icon} />
    {props.nextMenu && <ArrowSubmenu className="fas fa-chevron-down" />}
  </>);
  
  const linkClickListener = (event: any) => {
    event.preventDefault();
    props.addNestedMenuContent(<NavigationMenu menuItems={props.nextMenu}/>)
  }

  if ( props.nextMenu ) {
    link = (<a
      href={props.path}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{linkClickListener(event)}}
      >
       {linkContent}
      
     </a>)
  } else {
    link = ( <NavLink 
      to={props.path}
      activeStyle={{
         color: `#24c0fd`,
         backgroundColor: `#e1f6ff`
     }}>
       {linkContent}
     </NavLink>
     );
  }
  
  return (
    <Item>
      {link}
    </Item>
  );
};

export default MenuItem;   
