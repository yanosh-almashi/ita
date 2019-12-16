import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import  App  from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 
import { rootReducer } from './store/reduces';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { useTheme, createMuiTheme } from '@material-ui/core/styles';

const store = createStore(rootReducer);

const theme = createMuiTheme({
  palette: {
    primary:  { 
      main: '#20233f' 
    }
  }
});

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
