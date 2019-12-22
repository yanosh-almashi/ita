import React from 'react';
import HomePage from './HomePage/HomePage';
import { Switch, Route } from 'react-router';
import ProfilePage from './ProfilePage/ProfilePage';
import styled from 'styled-components';
import Signup from '../Auth/Signup/Signup';

const StyledContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const StyledModalTest = styled.div`
  margin-top: 100px;
`;

const ContentWrapper = () => {
  return (
    <StyledContentWrapper>
      <Switch>
        <Route path="/" exact component={ HomePage } />
        <Route path="/profile" component={ ProfilePage } />2
      </Switch>
      <StyledModalTest>
        <Signup />
      </StyledModalTest>
    </StyledContentWrapper>
  )
}

export default ContentWrapper;