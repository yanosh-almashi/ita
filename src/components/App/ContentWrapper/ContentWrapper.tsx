import React from 'react';
import { Switch, Route } from 'react-router';
import MultilineTextFields from '../Randomizer/Randomizer';
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
  return (
    <StyledContentWrapper>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <ProtectedRoute path="/profile" redirect="/" isAuth={!!props.id}>
          <ProfilePage />
        </ProtectedRoute>
        <Route path="/randomizer" component={ MultilineTextFields } />
        <ProtectedRoute path="/auth" redirect="/" isAuth={!props.id}>
          <Auth />
        </ProtectedRoute> 
      </Switch>
    </StyledContentWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  id: state.authReducer.uid
});

export default connect(mapStateToProps)(ContentWrapper);

