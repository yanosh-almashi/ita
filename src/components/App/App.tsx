import React from 'react';
import './App.css';
import MenuContainer from './MenuContainer/MenuContainer';
import ContentWrapper from './ContentWrapper/ContentWrapper';
import AuthPopUp from './Auth/Auth';

const App = () => {
  return (
    <div className="App">
      <AuthPopUp />
      <MenuContainer />
      <ContentWrapper />
    </div>
  );
};

export default App;
