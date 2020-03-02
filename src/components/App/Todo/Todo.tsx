import React from 'react';
import TodoApp from './components/TodoApp';

import { createStore } from 'redux';
import { reducer } from './redux/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

const Todo = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default Todo;
