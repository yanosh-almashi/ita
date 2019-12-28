import React from 'react';
import HomePage from './HomePage/HomePage';
import { Switch, Route, Redirect } from 'react-router';
import ProfilePage from './ProfilePage/ProfilePage';
import styled from 'styled-components';
import Signup from '../Auth/Signup/Signup';
import { connect } from 'react-redux';
import Auth from '../Auth/Auth';

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
        <Route 
          path="/profile" 
          render={ () => props.isAuth ? ( <ProfilePage /> ) : ( <Redirect to={{ pathname: "/" }} /> ) }
        />
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