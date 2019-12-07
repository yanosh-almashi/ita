import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import  App  from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 
import { rootReducer } from './store/reduces';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
