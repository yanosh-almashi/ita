import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import  App  from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 
import { rootReducer } from './store/reduces';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StylesProvider, withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const store = createStore(rootReducer);

const theme = createMuiTheme({
  palette: {
    primary:  { 
      main: '#346ef3' 
    },
    error:  { 
      main: '#d73c2a' 
    },
    secondary: {
      main: '#20233f'
    }
  }
});

/*

*/

const GlobalCSS = withStyles({
  '@global': {
    '.MuiButton-contained': {
      fontSize: '14px',
      borderRadius: '50px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      width: '140px'
    },
    '.MuiInputBase-input': {
      height: '0px'
    },
    '.MuiTextField-root': {
      height: '0px'
    },
    '.MuiOutlinedInput-input': {
      height: '30px',
      padding: '5px 15px',
      width: '250px'
    },
    '.MuiOutlinedInput-root': {
      borderRadius: '50px'
    },
    '.MuiInputLabel-outlined': {
      top: '-7px'
    }
  }
})(() => null)

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
    
      <ThemeProvider theme={theme}>
        <StylesProvider>
          <GlobalCSS />
          <App/>
        </StylesProvider>
      </ThemeProvider>

    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
