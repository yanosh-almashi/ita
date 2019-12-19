import React from 'react';
import './App.css';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 
import { changeProjectTitle } from '../../store/actions';
import MenuContainer from './MenuContainer/MenuContainer';
import ContentWrapper from './ContentWrapper/ContentWrapper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const App = () => {
  return (
    <div className="App">
      <MenuContainer />
      <ContentWrapper />
      <Button variant="contained" color="primary">
        Submit
      </Button>
      <Button variant="contained" color="secondary">
        Submit
      </Button>

      <form className="form" noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
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