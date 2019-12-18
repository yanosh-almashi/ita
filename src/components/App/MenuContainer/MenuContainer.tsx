import React, { useState } from 'react';
import './MenuContainer.css';
import NavigationMenu from './NavigationMenu/NavigationMenu';

import menuSections from './MenuInterface';

const MenuContainer = () => {

  const [menu] = useState<any>(menuSections);
  const [openedSections, setOpenedSections] = useState<any>(
    ['1-root']
  );
  const [sections, setSections] = useState<number>(1);
  const [clickedSection, setClickedSection] = useState<number>(1);

  const onClickItemMenu = (id: string, param: string) => {
    const tmpArray = [
      ...openedSections
    ];
    const currentSection = Number(id.split('')[0]);
    let addSection;
    addSection = sections + 1;


    setSections(addSection);
    tmpArray[sections] = param;
    setOpenedSections(tmpArray);
  }

  const onClickItemMenuSection = (key: string): void => {
    const currentSection = Number(key.split('-')[0]);
    
    setClickedSection(currentSection);
  }

  return (
    <div className="menu-container">
        <div className="menu" >
        <NavigationMenu />
      </div>
    </div>
  )
} 

export default MenuContainer;