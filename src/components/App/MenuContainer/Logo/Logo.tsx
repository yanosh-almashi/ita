import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
const logo = require("../../../../assets/images/Logo.png");

const RouterLink = styled(NavLink)`
  text-decoration: none;
  &:hover {
    opacity: .8;
  }
`;

const Logo = () => {
  return (
    <React.Fragment>
        <RouterLink to="/">
            <img src={logo} alt="logo"/>
        </RouterLink>
    </React.Fragment>
  )
}

export default Logo;
