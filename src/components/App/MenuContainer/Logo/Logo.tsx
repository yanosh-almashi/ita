import React from 'react';
import styled from "styled-components";
const logo = require("../../../../assets/images/Logo.png");

const StyledLogo = styled.div`
  margin-top: 25px;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logo} alt=""/>
    </StyledLogo>
  )
}

export default Logo;
