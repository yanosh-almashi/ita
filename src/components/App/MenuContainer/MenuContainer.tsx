import React from 'react';
import './MenuContainer.css';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import Logo from './Logo/Logo';
import Chat from './Chat/Chat';

const MenuContainer = () => {
  return (
    <div className='menu-container'>
      <Logo />
      <NavigationMenu />
      <Chat />
    </div>
  )
};

export default MenuContainer;
