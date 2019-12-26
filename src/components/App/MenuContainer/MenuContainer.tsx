import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import Logo from './Logo/Logo';
import Chat from './Chat/Chat';
import styled from "styled-components";
import { ItemsInterface } from "../MenuContainer/types/types";
import { SubMenuType } from "../MenuContainer/types/types";

const StyledContainer = styled.div`
  padding: 25px 0 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  text-align: center;
  width: 90px;
  background-color: #fefefe;
  border-right: 2px solid #f8f8f9;
  color: #9ba6b2;
  box-shadow: 10px 0px 15px -15px rgba(0,0,0,0.72);
`;

const itemProps : ItemsInterface[] = [
    {
        name: "home",
        id: 11,
        icon: "fas fa-home",
        path: "/home"
    },
    {
        name: "profile",
        id: 12,
        icon: "fas fa-user",
        path: "/profile"
    },
    {
        name: "tools",
        id: 13,
        icon: "fas fa-wrench",
        isActive: false,
        nextMenu: [
            {
                name: "randomaizer",
                id: 14,
                icon: "fas fa-random",
                path: "/random"
            },
            {
                name: "rem",
                id: 15,
                icon: "far fa-address-book",
                path: "/rem"
            },
            {
                name: "schedule",
                id: 16,
                icon: "far fa-calendar-alt",
                path: "/schedule"
            }
        ]
    },
];

const MenuContainer = () => {
    const [subMenu, setSubMenu] = useState<SubMenuType>(null);
    const [initialNestedMenu, setInitialNestedMenu] = useState<Array<any>>([]);
    const [itemsConfig, setItemsConfig] = useState<ItemsInterface[]>(itemProps);

    function handleClick(nextMenu :ItemsInterface[], active: boolean) {
        if (subMenu === null) {
            setSubMenu(
                <StyledContainer>
                    <NavigationMenu  items={nextMenu} />
                </StyledContainer>
            );
        } else {
            setSubMenu(null);
        }
        let newConfig = [...itemsConfig];
        newConfig.forEach(item => item.isActive = !active);
        setItemsConfig(newConfig);

    }

    useEffect(() => {
        itemProps.forEach((item: any, index: any) => {
            if (item.nextMenu) {
                console.log(item.nextMenu);

               /* setInitialNestedMenu([...initialNestedMenu, (
                    <Route key={index} path={item.nextMenu.map((item: any) => item.path)} render={() => {
                        return (
                            <StyledContainer>
                                <NavigationMenu  items={item.nextMenu} />
                            </StyledContainer>
                        )
                    }} />
                )])*/
            }
        })
    }, []);

  return (
    <React.Fragment>
        <StyledContainer>
            <div>
                <Logo />
                <NavigationMenu  items={itemsConfig} handleClick={handleClick} />
            </div>
            <Chat />
        </StyledContainer>
        {subMenu}
    </React.Fragment>
  )
};

export default MenuContainer;
