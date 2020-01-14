import React from 'react';
import HomePage from './HomePage/HomePage';
import { Switch, Route } from 'react-router';
import ProfilePage from './ProfilePage/ProfilePage';
import MultilineTextFields from '../Randomizer/Randomizer';
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
        <Route path="/profile" component={ ProfilePage } />2
      </Switch>
    </StyledContentWrapper>
  )
}

export default ContentWrapper;