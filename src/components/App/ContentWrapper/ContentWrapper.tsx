import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';

const ProfilePage = lazy(() => import('./ProfilePage/ProfilePage'));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/profile" component={ ProfilePage } />
        </Suspense>
      </Switch>
    </StyledContentWrapper>
  )
}

export default ContentWrapper;