import React from 'react';
import './ContentWrapper.css';
import HomePage from './HomePage/HomePage';
import { Switch, Route } from 'react-router';
import ProfilePage from './ProfilePage/ProfilePage';

const ContentWrapper = () => {
  return (
    <div className="content-wrapper">
      <div>ContentWrapper</div>
      <Switch>
        <Route path="/" exact component={ HomePage } />
        <Route path="/profile" component={ ProfilePage } />
      </Switch>
    </div>
  )
}

export default ContentWrapper;