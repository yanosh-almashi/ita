import React from "react";
import "./App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeProjectTitle } from "../../store/actions";
import MenuContainer from "./MenuContainer/MenuContainer";
import ContentWrapper from "./ContentWrapper/ContentWrapper";
import SignIn from "./Auth/Signin/Signin";


const App = (props: any) => {
  return (
    <div className="App">
      <SignIn {...props}/>
      <MenuContainer />
      <ContentWrapper />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { projectTitle: state.projectTitle };
};

const mapActionsCreators = (dispatch: any) => {
  return {
    changeProjectTitle: bindActionCreators(changeProjectTitle, dispatch)
  };
};

export default connect(mapStateToProps, mapActionsCreators)(App);
