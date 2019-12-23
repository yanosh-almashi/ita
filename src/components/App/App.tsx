import React from 'react';
import './App.css';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 
import { changeProjectTitle } from '../../store/actions';
import MenuContainer from './MenuContainer/MenuContainer';
import ContentWrapper from './ContentWrapper/ContentWrapper';
import { Form } from "./Auth/Signin/Signin";

export const AuthContext: any = React.createContext(null);
const App = () => {
    const [isLoggedIn, setLog ] = React.useState(false);
  return (
      <AuthContext.Provider value = { { isLoggedIn, setLog } }>
          {isLoggedIn ? alert('You are logged in' ) : alert('Error')}
    <div className="App">
        <Form/>
      <MenuContainer />
      <ContentWrapper />
    </div>
      </AuthContext.Provider>
  );
};


const mapStateToProps = (state: any) => {
  return {projectTitle: state.projectTitle};
}

const mapActionsCreators = (dispatch: any) => {
  return {
      changeProjectTitle: bindActionCreators(changeProjectTitle, dispatch)
  }
}

export default connect(mapStateToProps, mapActionsCreators)(App);