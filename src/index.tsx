import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import  App  from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StylesProvider, withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import authReducer from './store/reducers/authReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(authReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const theme = createMuiTheme({
  palette: {
    primary:  {
      main: '#24c3f9'
    },
    error:  {
      main: '#d73c2a'
    },
    secondary: {
      main: '#346ef3'
    }
  }
});

const GlobalCSS = withStyles({
  '@global': {
    '.MuiButton-contained': {
      fontSize: '14px',
      borderRadius: '50px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      width: '140px',
      color: '#f8f7ff',
      "&:hover": {
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        color: '#20233f',
      }
    },
    '.MuiOutlinedInput-input': {
      padding: '10px 15px',
      width: '450px',
    },
    '.MuiOutlinedInput-root': {
      borderRadius: '50px',
    },
    '.MuiInputLabel-outlined': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '23px',
      fontSize: '14px',
      color: '#20233f',
      transition: 'all 0.2s ease-in-out',
    },
    '.MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(0, -37px) scale(0.9)'
    },

    '.MuiOutlinedInput-root.MuiOutlinedInput-notchedOutline': {
      borderColor: '#ffffff',
      backgroundColor: '#ffffff',
    }
  }
})(() => null);

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
