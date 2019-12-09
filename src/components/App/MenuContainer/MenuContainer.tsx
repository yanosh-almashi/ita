import React, { useState } from 'react';
import './MenuContainer.css';
import NavigationMenu from './NavigationMenu/NavigationMenu';

import menuSections from './MenuInterface';

const MenuContainer = () => {

  const [menu] = useState<any>(menuSections);
  const [openedSections, setOpenedSections] = useState<any>(
    ['1-root']
  );
  const [sections, setSections] = useState<number>(
    1
  );

  const onClickItemMenu = (id: string, param: string) => {
    const tmpArray = [
      ...openedSections
    ];

    let addSection = sections + 1;
    setSections(addSection);
    tmpArray[sections] = param;
    
    setOpenedSections(tmpArray);
  }

  let sectionWrapped = (content: any, key : string, small: boolean) => {
    let menuClasses = 'menu';
    if (small) {
      menuClasses = 'menu menu--small';
    }
    return (
      <div className={ menuClasses } key={key}>
        <NavigationMenu content = { content } onClickItem = { onClickItemMenu }/>
      </div>
    )
  }

  let tmpSections = [];
  let i = 0;

    for(let menuKey in menu) {
      if(menuKey === openedSections[i]) {
        const currentSection = Number(menuKey.split('-')[0]);
        let small = true;
        if (currentSection === sections) {
          small = false;
        }
        tmpSections.push(sectionWrapped(menu[menuKey].menuItems, menuKey, small));
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