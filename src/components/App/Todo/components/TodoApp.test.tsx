import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import '@testing-library/jest-dom/extend-expect';
import * as actionCreators from '../../../../store/todo/actions';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

it('renders succesfully', () => {
  const mockStore = configureStore([]);
  const store: any = mockStore({
    tasks: [
      {
        text: 'Learn react',
        id: 1,
        done: false
      }
    ],
    showedItems: 'all'
  });
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <TodoApp
        tasks={store.getState().tasks}
        showAllItems={actionCreators.showAllItems}
        showCompletedItems={actionCreators.showCompletedItems}
        showedItems={store.getState().showedItems}
        deleteTodo={actionCreators.deleteTodo}
        showActiveItems={actionCreators.showActiveItems}
        changeStatus={actionCreators.changeStatus}
        addTodo={actionCreators.addTodo}
      />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
