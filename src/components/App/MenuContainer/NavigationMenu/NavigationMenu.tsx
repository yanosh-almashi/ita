import React from 'react';
import './NavigationMenu.css';




const content = [
  {
    id: '11',
    name: 'Home',
    icon: 'icon-user',
    next: '2-home'
  },
  {
    id: '12',
    name: 'Tools',
    icon: 'icon-calendar',
    next: '2-tools'
  },
  {
    id: '13',
    name: 'Tools',
    icon: 'icon-cog',
    next: '2-tools'
  }
];

const NavigationMenu = () => {
  return (
    <div>
      <div className="menu__item menu__item--active" key={'010324'}>
        <i className={`icon icon-home menu__icon`}></i>
      </div>
      {content.map(item => {
        return (
          <div className="menu__item" key={item.id}>
            <i className={`icon ${item.icon} menu__icon`}></i>
          </div>
        )
      })}
    </div>
  )
} 

export default NavigationMenu;