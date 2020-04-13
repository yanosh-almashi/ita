import React from 'react';
import TodoApp from './components/TodoApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { todoReducer } from '../../store/todo/todoReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, todoReducer);
export const store = createStore(persistedReducer);
const persistor = persistStore(store);

const Todo: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoApp />
      </PersistGate>
    </Provider>
  );
};

export default Todo;
