import React from 'react';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import Logo from './Logo/Logo';
import Chat from './Chat/Chat';
import styled from "styled-components";

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

const MenuContainer = () => {
  return (
    <StyledContainer>
      <Logo />
      <NavigationMenu />
      <Chat />
    </StyledContainer>
  )
};

export default MenuContainer;
