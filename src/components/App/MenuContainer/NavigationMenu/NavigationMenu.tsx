import React from 'react';
import './NavigationMenu.css';
import MenuItems from './MenuItems/MenuItems';

const NavigationMenu = () => {
  return (
    <div className='nav-menu'>
      <div>Nav</div>
      <MenuItems />
    </div>
  )
}

export default NavigationMenu;
