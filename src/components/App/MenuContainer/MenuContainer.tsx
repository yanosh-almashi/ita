import React, {useState, useEffect} from 'react';
import NavigationMenu from './NavigationMenuList/NavigationMenuList';
import Logo from './Logo/Logo';
import Chat from './Chat/Chat';
import styled from "styled-components";
import {Route, Switch} from 'react-router-dom';

export const menuItems = [
  {
    name: "home",
    icon: "fas fa-home",
    path: "/random"
  },
  {
    name: "profile",
    icon: "fas fa-user",
    path: "/profile"
  },
  {
    name: "tools",
    icon: "fas fa-wrench",
    path: '/tools',
    nextMenu: [
      {
        name: "home1",
        icon: "fas fa-home",
        path: "/random1"
      },
      {
        name: "profile1",
        icon: "fas fa-user",
        path: "/profile1"
      },
      {
        name: "tools1",
        icon: "fas fa-wrench",
        path: '/tools1'
      }
    ]
  },
  {
    name: "tools-new",
    icon: "fas fa-wrench",
    path: '/tools-new',
    nextMenu: [
      {
        name: "home1-new",
        icon: "fas fa-home",
        path: "/random1-new"
      },

      {
        name: "tools1-new",
        icon: "fas fa-wrench",
        path: '/tools1-new'
      },
      {
        name: "profile1-new",
        icon: "fas fa-user",
        path: "/profile1-new"
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
  box-shadow: 10px 0px 15px -15px rgba(0,0,0,0.72);
`;

const StyledMenuContainer = styled.div`
  display: flex;
`;

const MenuContainer = () => {
  const [nestedMenuContent, addNestedMenuContent] = useState();
  const [initialNestedMenu, addInitialNestedMenu] = useState<Array<any>>([]);

  useEffect(() => {
    menuItems.forEach((item: any, i: number) => {
      if ( item.nextMenu ) {
        console.log(item.nextMenu);

        addInitialNestedMenu((prevState) => {
          return [
            ...prevState,
            (
              <Route key={i} path={item.path} render={() => {
                return (
                <StyledContainer>
                  <NavigationMenu nestedRoute={item.path} menuItems={item.nextMenu}/>
                </StyledContainer>)
              }}/>
            )
          ]
        });
      }
    });
  }, []);

  return (
    <StyledMenuContainer>
      <StyledContainer>
        <div>
          <Logo />
          <NavigationMenu addNestedMenuContent={addNestedMenuContent}  menuItems={menuItems}/>
        </div>
        <Chat />
      </StyledContainer>
      { nestedMenuContent ?
        <StyledContainer>
          {nestedMenuContent}
        </StyledContainer> :
        (<Switch>
            {initialNestedMenu.map((item: any) => {
              console.log(item);
              return item;
            })}
        </Switch>) }
    </StyledMenuContainer>
  )
};

export default MenuContainer;
