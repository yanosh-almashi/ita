import React, { useState, useEffect, ReactElement } from 'react';
import NavigationMenu from './NavigationMenuList/NavigationMenuList';
import Logo from './Logo/Logo';
import Chat from './Chat/Chat';
import styled from 'styled-components';
import { ItemsInterface } from './types/types';
import {Route, Switch } from 'react-router-dom';

export const menuItems: ItemsInterface[] = [
  {
    name: 'home',
    icon: 'fas fa-home',
    path: '/random'
  },
  {
    name: 'profile',
    icon: 'fas fa-user',
    path: '/profile'
  },
  {
    name: 'tools',
    icon: 'fas fa-wrench',
    path: '/tools',
    nextMenu: [
      {
        name: 'rem',
        icon: 'far fa-address-book',
        path: '/rem'
      },
      {
        name: 'schedule',
        icon: 'far fa-calendar-alt',
        path: '/schedule'
      },
      {
        name: 'randomaizer',
        icon: 'fas fa-random',
        path: '/random'
      },
      {
        name: 'todo',
        icon: 'far fa-list-alt',
        path: '/todo'
      }
    ]
  }
];

const StyledContainer = styled.div`
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  text-align: center;
  width: 90px;
  background-color: #fefefe;
  border-right: 2px solid #f8f8f9;
  color: #9ba6b2;
  box-shadow: 10px 0px 15px -15px rgba(0, 0, 0, 0.72);
`;

const StyledMenuContainer = styled.div`
  display: flex;
`;

const MenuContainer = () => {
  const [nestedMenuContent, addNestedMenuContent] = useState<ReactElement>();
  const [initialNestedMenu, addInitialNestedMenu] = useState<
    Array<ReactElement>
  >([]);

  const addMenu = (elem: ReactElement) => {
    addNestedMenuContent(elem);
  };

  useEffect(() => {
    menuItems.forEach((item: ItemsInterface, i: number) => {
      if (item.nextMenu) {
        addInitialNestedMenu(prevState => {
          return [
            ...prevState,
            <Route
              key={i + item.name}
              path={item.path}
              render={() => {
                return (
                  <StyledContainer>
                    <NavigationMenu
                      nestedRoute={item.path}
                      menuItems={item.nextMenu!}
                    />
                  </StyledContainer>
                );
              }}
            />
          ];
        });
      }
    });
  }, []);

  return (
      <StyledMenuContainer data-testid="menu-container">
        <StyledContainer>
          <div>
            <Logo />
            <NavigationMenu addNestedMenu={addMenu} menuItems={menuItems} />
          </div>
          <Chat />
        </StyledContainer>
        {nestedMenuContent ? (
            <StyledContainer>{nestedMenuContent}</StyledContainer>
        ) : (
            <Switch>
              {initialNestedMenu.map((item: ReactElement) => {
                return item;
              })}
            </Switch>
        )}
      </StyledMenuContainer>
  );
};

export default MenuContainer;
