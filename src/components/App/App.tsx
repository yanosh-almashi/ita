import React from 'react';
import './App.css';
import '../../assets/fonts/FontAwesome.css';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 
import { changeProjectTitle } from '../../store/actions';
import MenuContainer from './MenuContainer/MenuContainer';
import ContentWrapper from './ContentWrapper/ContentWrapper';
import Button from '@material-ui/core/Button';

const App = () => {
  return (
    <div className="App">
      <MenuContainer />
      <ContentWrapper />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Button variant="contained" color="secondary">
        Hello World
      </Button>
    </div>
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