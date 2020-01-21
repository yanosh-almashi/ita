import React from 'react';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ProtectedRoute from '../../../HOC/ProtectedRoute';
import HomePage from './HomePage/HomePage';
import ProfilePage from './ProfilePage/ProfilePage';
import Auth from '../Auth/Auth';

const StyledContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const ContentWrapper = (props: any) => {
  console.log(props.id);
  console.log(!!props.id);
  return (
    <StyledContentWrapper>
      <Switch>
        <Route path="/" exact component={ HomePage } />
        <ProtectedRoute path="/profile" redirect="/" isAuth={!!props.id}>
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute path="/auth" redirect="/" isAuth={!props.id}>
          <Auth />
        </ProtectedRoute> 
      </Switch>
    </StyledContentWrapper>
  )
}

const mapStateToProps = (state: any) => ({
  id: state.authReducer.uid
});

export default connect(mapStateToProps)(ContentWrapper);