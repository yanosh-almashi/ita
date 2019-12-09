import React from 'react';
import './NavigationMenu.css';
import MenuItems from './MenuItems/MenuItems';

interface Props {
  content: MenuItemInterface[];
  onClickItem(id: string, param: string): void
}

interface MenuItemInterface {
  name: string;
  path: string;
  next: string;
  id: string;
}

const NavigationMenu: React.FC<Props> = ({ content,  onClickItem}) => {
  return (
    <div>
      {content.map(item => {
        return (
          <div className="menu__item" key={item.id} onClick = {() => onClickItem(item.id, item.next)}>
            <span>{item.name}</span>
          </div>
        )
      })}
    </div>
  )
} 

export default NavigationMenu;