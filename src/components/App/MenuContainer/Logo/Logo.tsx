import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
const logo = require("../../../../assets/images/Logo.png");


const StyledLogo = styled.div`
  margin-top: 25px;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">
        <img src={logo} alt=""/>
      </Link>     
    </StyledLogo>
  )
}

export default Logo;
