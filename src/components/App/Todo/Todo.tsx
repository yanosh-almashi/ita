import React from 'react';
import TodoApp from './components/TodoApp';

import { createStore } from 'redux';

import { todoReducer } from '../../../store/todo/todoReducer';

import { Provider } from 'react-redux';

const store = createStore(todoReducer);

const Todo = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default Todo;
