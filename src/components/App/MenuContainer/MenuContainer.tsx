import React, { useState } from 'react';
import './MenuContainer.css';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import Logo from './Logo/Logo';
import Chat from './Chat/Chat';

import menuSections from './MenuInterface';

const MenuContainer = () => {

  const [menu, setMenu] = useState<any>(menuSections);
  const [openedSections, setOpenedSections] = useState<any>(
    ['root']
  );
  const [sections, setSections] = useState<any>([]);

  const onClickItemMenu = (id: string, param: string) => {

    const tmpArray = [
      ...openedSections
    ];

    tmpArray.push(param);
    setOpenedSections(tmpArray);
  }


  let sectionWrapped = (content: any, key : string) => {
    return (
      <div className="menu" key={key}>
        <NavigationMenu content = { content } onClickItem = { onClickItemMenu }/>
      </div>
    )
  }

  let tmpSections = [];
  let i = 0;

    for(let menuKey in menu) {
      if(menuKey === openedSections[i]) {
        //console.log(sectionWrapped(menu[menuKey].menuItems));
        tmpSections.push(sectionWrapped(menu[menuKey].menuItems, menuKey));
        i++;
      }
    }


  return (
    <div className="menu-container">
      {
        tmpSections.map( section => {
          return section;
        })
      }
    </div>
  )
} 

export default MenuContainer;