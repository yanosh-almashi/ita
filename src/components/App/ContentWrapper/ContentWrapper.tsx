import React from 'react';
import HomePage from './HomePage/HomePage';
import { Switch, Route } from 'react-router';
import ProfilePage from './ProfilePage/ProfilePage';
import styled from 'styled-components';

const StyledContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = () => {
  return (
    <StyledContentWrapper>
      <Switch>
        <Route path="/" exact component={ HomePage } />
        <Route path="/profile" component={ ProfilePage } />
      </Switch>
    </StyledContentWrapper>
  )
}

export default ContentWrapper;