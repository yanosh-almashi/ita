import React from 'react';
import HomePage from './HomePage/HomePage';
import { Switch, Route } from 'react-router';
import ProfilePage from './ProfilePage/ProfilePage';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ProtectedRoute from '../../../HOC/ProtectedRoute';

const StyledContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 40px 0px;
`;

const StyledModalTest = styled.div`
  margin-top: 100px;
`;


const ContentWrapper = (props: any) => {

  return (
    <StyledContentWrapper>
      <StyledModalTest>
      </StyledModalTest>
      <Switch>
        <Route path="/" exact component={ HomePage } />
        <ProtectedRoute path="/profile" redirect="/" isAuth={!!props.id}>
          <ProfilePage />
        </ProtectedRoute>
      </Switch>
    </StyledContentWrapper>
  )
}

const mapStateToProps = (state: any) => {
  return {
    id: state.authReducer.uid
  }
}

export default connect(mapStateToProps, null)(ContentWrapper);