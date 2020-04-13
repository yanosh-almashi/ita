import React, { useState, useEffect, ReactElement } from 'react';
import NavigationMenu from './NavigationMenuList/NavigationMenuList';
import Chat from '../Chat/Chat';
import { StyledContainer, StyledMenuContainer } from './MenuContainerStyles';
import { ItemsInterface } from './types/types';
import { Route, Switch } from 'react-router-dom';

const menuItems: ItemsInterface[] = [
  {
    name: 'logo',
    path: '/'
  },
  {
    name: 'auth',
    icon: 'fas fa-sign-in-alt',
    path: '/auth'
  },
  {
    name: 'tools',
    icon: 'fas fa-wrench',
    path: '/tools',
    nextMenu: [
      {
        name: 'rem',
        icon: 'far fa-address-book',
        path: '/planner'
      },
      {
        name: 'schedule',
        icon: 'far fa-calendar-alt',
        path: '/chicken'
      },
      {
        name: 'randomizer',
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
        <NavigationMenu addNestedMenu={addMenu} menuItems={menuItems} />
        <Chat />
      </StyledContainer>
      {nestedMenuContent ? (
        <StyledContainer>{nestedMenuContent}</StyledContainer>
      ) : (
          <Switch>{initialNestedMenu.map((item: ReactElement) => item)}</Switch>
      )}
    </StyledMenuContainer>
  );
};

export default MenuContainer;
