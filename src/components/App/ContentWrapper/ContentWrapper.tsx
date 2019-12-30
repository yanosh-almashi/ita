import React from 'react';
import HomePage from './HomePage/HomePage';
import { Switch, Route } from 'react-router';
import ProfilePage from './ProfilePage/ProfilePage';
import styled from 'styled-components';
import Signup from '../Auth/Signup/Signup';
import { connect } from 'react-redux';
import Auth from '../Auth/Auth';
import ProtectedRoute from '../../../HOC/ProtectedRoute';

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

const ContentWrapper = (props: any) => {
  return (
    <StyledContentWrapper>
      <Auth />
      <Switch>
        <Route path="/" exact component={ HomePage } />

        <ProtectedRoute path="/profile" redirect="/" isAuth={props.isAuth}>
          <ProfilePage />
        </ProtectedRoute>

      </Switch>
      
      <StyledModalTest>
        <Signup />
      </StyledModalTest>
    </StyledContentWrapper>
  )
}

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.isAuth,
    id: state.id
  }
}

export default connect(mapStateToProps, null)(ContentWrapper);