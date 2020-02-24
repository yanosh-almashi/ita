import React from 'react';
import App from './components/App';

import { createStore } from 'redux';
import { reducer } from './redux/reducer'
import { Provider } from 'react-redux';

const store = createStore(reducer);


const Todo = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>)
}

export default Todo;
