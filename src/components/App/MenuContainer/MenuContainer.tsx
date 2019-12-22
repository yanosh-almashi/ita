import React, {useState} from 'react';
import NavigationMenu from './NavigationMenuList/NavigationMenuList';
import Logo from './Logo/Logo';
import Chat from './Chat/Chat';
import styled from "styled-components";

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
        path: '/tools'
      }
    ]
  }
];

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  width: 90px;
  background-color: #fefefe;
  border-right: 1px solid #f8f8f9;
  color: #9ba6b2;
  box-shadow: 10px 0px 15px -15px rgba(0,0,0,0.72);
  transition: .3s;
`;

const StyledMenuContainer =styled.div`
  display: flex;
`;

const MenuContainer = () => {
  const [nestedMenuContent, addNestedMenuContent] = useState();
  return (
    <StyledMenuContainer>
      <StyledContainer>
        <Logo />
        <NavigationMenu addNestedMenuContent={addNestedMenuContent} menuItems={menuItems}/>
        <Chat />
      </StyledContainer>
      { nestedMenuContent && <StyledContainer>
            { nestedMenuContent}
        </StyledContainer>
      }
    </StyledMenuContainer>
  )
};

export default MenuContainer;
