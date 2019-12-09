import React from 'react';
import './MenuContainer.css';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import Logo from './Logo/Logo';
import Chat from './Chat/Chat';

const MenuContainer = () => {
  return (
    <div>
    <div className="menu-container">
      <div id="menuRoot" className="menu">
        <Logo />
        <NavigationMenu />
        <Chat />
      </div>
      <div className="menu menu__submenus">

      </div>
    </div>


    </div>
  )
} 

export default MenuContainer;