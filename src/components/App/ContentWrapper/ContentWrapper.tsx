import React from 'react';
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
        <Route path="/profile" component={ ProfilePage } />2
      </Switch>
    </StyledContentWrapper>
  )
}

export default ContentWrapper;