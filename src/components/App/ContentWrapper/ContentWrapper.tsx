import React from 'react';
import './ContentWrapper.css';
import HomePage from './HomePage/HomePage';
import { Switch, Route } from 'react-router';
import ProfilePage from './ProfilePage/ProfilePage';

const ContentWrapper = () => {
  return (
    <div className="content-wrapper">
      <Switch>
        <Route path="/" exact component={ HomePage } />
        <Route path="/profile" component={ ProfilePage } />2
      </Switch>
    </div>
  )
}

export default ContentWrapper;