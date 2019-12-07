import React from 'react';
import './MenuContainer.css';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import Logo from './Logo/Logo';
import Chat from './Chat/Chat';

const MenuContainer = () => {
  return (
    <div>
      <div>MenuContainer</div>
      <Logo />
      <NavigationMenu />
      <Chat />
    </div>
  )
} 

export default MenuContainer;