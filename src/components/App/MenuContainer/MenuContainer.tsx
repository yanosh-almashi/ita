import React from 'react';
import './MenuContainer.css';
import NavigationMenu from './NavigationMenu/NavigationMenu';

const MenuContainer = () => {
  return (
    <div className="menu-container">
      <div className="menu" >
        <NavigationMenu />
      </div>
    </div>
  )
} 

export default MenuContainer;